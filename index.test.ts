import { describe, expect, test } from 'bun:test'
import { z } from 'zod'
import { events } from '@/data/events'

const dateSchema = z.coerce.date()

describe('events', () => {
  test('should have events for each week', () => {
    events.forEach(weekItem => {
      expect(weekItem.events).toBeDefined()
      expect(Array.isArray(weekItem.events)).toBe(true)
    })
  })

  test('should have a valid date for each event', () => {
    events.forEach(weekItem => {
      weekItem.events.forEach(event => {
        expect(dateSchema.safeParse(event.date).success).toBeTrue()
      })
    })
  })

  test('should have unique dates in each week', () => {
    events.forEach(weekItem => {
      const dates = weekItem.events.map(event => event.date)
      const uniqueDates = new Set(dates)
      expect(uniqueDates.size).toBe(dates.length)
    })
  })

  test('should have unique dates across all weeks (no copy-paste duplicates)', () => {
    const allDates = new Map<string, number>()
    const duplicates: string[] = []

    events.forEach((weekItem, weekIndex) => {
      weekItem.events.forEach(event => {
        const existingIndex = allDates.get(event.date)
        if (existingIndex !== undefined) {
          duplicates.push(`"${event.date}" in week index ${weekIndex} duplicates week index ${existingIndex}`)
        } else {
          allDates.set(event.date, weekIndex)
        }
      })
    })

    if (duplicates.length > 0) {
      throw new Error(`Duplicate dates found:\n${duplicates.join('\n')}`)
    }
  })

  test('should have events sorted by date within each week', () => {
    events.forEach((weekItem, weekIndex) => {
      const dates = weekItem.events.map(e => new Date(e.date).getTime())
      for (let i = 0; i < dates.length - 1; i++) {
        if (dates[i] > dates[i + 1]) {
          throw new Error(
            `Week index ${weekIndex}: "${weekItem.events[i].date}" should come after "${weekItem.events[i + 1].date}"`
          )
        }
      }
    })
  })

  test('should have weeks ordered by dates (newest first)', () => {
    for (let i = 0; i < events.length - 1; i++) {
      const current = events[i]
      const next = events[i + 1]

      if (current.events.length === 0 || next.events.length === 0) continue

      const currentFirst = new Date(current.events[0].date).getTime()
      const nextFirst = new Date(next.events[0].date).getTime()

      if (currentFirst < nextFirst) {
        throw new Error(
          `Week index ${i} (${current.events[0].date}) should be newer than index ${i + 1} (${next.events[0].date})`
        )
      }
    }
  })

  test('should have unique rec links (no copy-paste duplicates)', () => {
    const recLinks = new Map<string, string>()
    const duplicates: string[] = []

    events.forEach(week => {
      week.events.forEach(event => {
        if (event.rec && event.rec.trim() !== '') {
          const existing = recLinks.get(event.rec)
          if (existing) {
            duplicates.push(`rec "${event.rec}" on ${event.date} duplicates ${existing}`)
          } else {
            recLinks.set(event.rec, event.date)
          }
        }
      })
    })

    if (duplicates.length > 0) {
      throw new Error(`Duplicate rec links found:\n${duplicates.join('\n')}`)
    }
  })

  test('should have at least one event date in the declared year', () => {
    const errors: string[] = []

    events.forEach((week, weekIndex) => {
      if (week.events.length === 0) return

      const eventYears = week.events.map(e => new Date(e.date).getFullYear())
      const hasMatchingYear = eventYears.some(y => y === week.year)

      if (!hasMatchingYear) {
        const uniqueYears = [...new Set(eventYears)].join(', ')
        errors.push(
          `Week index ${weekIndex} declares year ${week.year} but all events are in year(s): ${uniqueYears}`
        )
      }
    })

    if (errors.length > 0) {
      throw new Error(`Declared year mismatch:\n${errors.join('\n')}`)
    }
  })
})
