import { describe, expect, test } from "bun:test"
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

  test('should have unique days in each week', () => {
    events.forEach(weekItem => {
      const dates = weekItem.events.map(event => event.date)
      const uniqueDates = new Set(dates)
      expect(uniqueDates.size).toBe(dates.length)
    })
  })
})
