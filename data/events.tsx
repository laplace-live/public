import type { eventTypeMap } from '@/data/maps'

export type EventType = keyof typeof eventTypeMap

export type EventItem = {
  date: string
  type: EventType
  title: string
  rec?: string
  cancelled?: boolean
  reason?: string
  fans_rec?: boolean
}

export type WeekItem = {
  year: number
  week: number
  bilibili_url?: string
  events: EventItem[]
}

// prettier-ignore
export const events: WeekItem[] = [

  // Tools
  // https://www.iamwawa.cn/fontchanger.html

  // Template:
  // { year: 2023, week: 0, bilibili_url: "", events: [
  //   { date: "2023-00-00 20:00+08:00", type: "", title: "", rec: "", },
  //   { date: "2023-00-00 20:00+08:00", type: "", title: "", rec: "", },
  //   { date: "2023-00-00 20:00+08:00", type: "", title: "", rec: "", },
  //   { date: "2023-00-00 20:00+08:00", type: "", title: "", rec: "", },
  //   { date: "2023-00-00 20:00+08:00", type: "", title: "", rec: "", },
  //   { date: "2023-00-00 19:00+08:00", type: "", title: "", rec: "", },
  //   { date: "2023-00-00 19:00+08:00", type: "", title: "", rec: "", },
  // ] },

  { year: 2025, week: 1, bilibili_url: "", events: [
    { date: "2024-12-30 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-31 20:00+08:00", type: "radio", title: "冷冬！！", rec: "", },
    { date: "2025-01-01 20:00+08:00", type: "game", title: "【米塔】据说是电子女友？", rec: "", },
    { date: "2025-01-02 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2025-01-03 20:00+08:00", type: "game", title: "米塔", rec: "", },
    { date: "2025-01-04 19:00+08:00", type: "tbd", title: "", rec: "", },
    { date: "2025-01-05 19:00+08:00", type: "tbd", title: "", rec: "", },
  ] },

  { year: 2024, week: 52, bilibili_url: "", events: [
    { date: "2024-12-23 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-24 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-25 20:00+08:00", type: "radio", title: "在这么冷的天~", rec: "", },
    { date: "2024-12-26 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-27 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-28 19:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-29 19:00+08:00", type: "rest", title: "", rec: "", },
  ] },

  { year: 2024, week: 51, bilibili_url: "", events: [
    { date: "2024-12-16 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-17 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-18 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-19 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-20 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-21 19:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-22 19:00+08:00", type: "rest", title: "", rec: "", },
  ] },

  { year: 2024, week: 50, bilibili_url: "", events: [
    { date: "2024-12-09 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-10 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-11 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-12 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-13 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-14 19:00+08:00", type: "radio", title: "冻天", rec: "", },
    { date: "2024-12-15 19:00+08:00", type: "rest", title: "", rec: "", },
  ] },

  { year: 2024, week: 49, bilibili_url: "", events: [
    { date: "2024-12-02 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-03 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-04 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-05 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-06 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-07 19:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-12-08 19:00+08:00", type: "rest", title: "", rec: "", },
  ] },

  { year: 2024, week: 48, bilibili_url: "1004077544667873280", events: [
    { date: "2024-11-25 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-11-26 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-11-27 20:00+08:00", type: "watch", title: "水", rec: "", },
    { date: "2024-11-28 20:00+08:00", type: "watch", title: "浒", rec: "", },
    { date: "2024-11-29 20:00+08:00", type: "game", title: "Game Time", rec: "", },
    { date: "2024-11-30 19:00+08:00", type: "special", title: "头像小画家", rec: "", },
    { date: "2024-12-01 19:00+08:00", type: "radio", title: "冬眠电波", rec: "", },
  ] },

  { year: 2024, week: 47, bilibili_url: "1001483367268483076", events: [
    { date: "2024-11-18 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-11-19 20:00+08:00", type: "watch", title: "水浒", rec: "", },
    { date: "2024-11-20 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-11-21 20:00+08:00", type: "game", title: "GAME TIME", rec: "", },
    { date: "2024-11-22 20:00+08:00", type: "watch", title: "我推荐的视频～", rec: "", },
    { date: "2024-11-23 19:00+08:00", type: "game", title: "糖豆人", rec: "", },
    { date: "2024-11-24 19:00+08:00", type: "fitness", title: "健！", rec: "", },
  ] },

  { year: 2024, week: 46, bilibili_url: "998881450273013795", events: [
    { date: "2024-11-11 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-11-12 20:00+08:00", type: "watch", title: "水浒传！", rec: "", },
    { date: "2024-11-13 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-11-14 20:00+08:00", type: "game", title: "灾殃", rec: "", },
    { date: "2024-11-15 20:00+08:00", type: "sub", title: "粉丝优质投稿回（？", rec: "", },
    { date: "2024-11-16 19:00+08:00", type: "sub", title: "粉丝歌回（终）！", rec: "", },
    { date: "2024-11-17 19:00+08:00", type: "radio", title: "周末结束电台了", rec: "", },
  ] },

  { year: 2024, week: 45, bilibili_url: "996300329555329058", events: [
    { date: "2024-11-04 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-11-05 20:00+08:00", type: "watch", title: "水浒", rec: "", },
    { date: "2024-11-06 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-11-07 20:00+08:00", type: "game", title: "弹丸论破", rec: "", },
    { date: "2024-11-08 20:00+08:00", type: "watch", title: "双城之战", rec: "", },
    { date: "2024-11-09 19:00+08:00", type: "sub", title: "梦境之花续", rec: "", },
    { date: "2024-11-10 19:00+08:00", type: "sub", title: "粉丝歌回续", rec: "", },
  ] },

  { year: 2024, week: 44, bilibili_url: "993689784034525189", events: [
    { date: "2024-10-28 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-10-29 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-10-30 20:00+08:00", type: "watch", title: "水浒虎虎生风", rec: "", },
    { date: "2024-10-31 20:00+08:00", type: "game", title: "弹丸论破", rec: "", },
    { date: "2024-11-01 20:00+08:00", type: "radio", title: "神秘电台", rec: "", },
    { date: "2024-11-02 19:00+08:00", type: "collab", title: "不神秘梦境之花", rec: "", },
    { date: "2024-11-03 19:00+08:00", type: "watch", title: "JOJO的奇妙冒险", rec: "", },
  ] },

  { year: 2024, week: 43, bilibili_url: "991107108522950690", events: [
    { date: "2024-10-21 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-10-22 20:00+08:00", type: "watch", title: "水浒虎虎生风", rec: "", },
    { date: "2024-10-23 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-10-24 20:00+08:00", type: "game", title: "GAME TIME", rec: "", },
    { date: "2024-10-25 20:00+08:00", type: "game", title: "比宇宙更远的地方", rec: "", },
    { date: "2024-10-26 19:00+08:00", type: "sub", title: "粉丝歌回（续）", rec: "", },
    { date: "2024-10-27 19:00+08:00", type: "fitness", title: "锻炼锻炼！", rec: "", },
  ] },

  { year: 2024, week: 42, bilibili_url: "988850897748492296", events: [
    { date: "2024-10-14 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-10-15 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-10-16 20:00+08:00", type: "watch", title: "水浒", rec: "", },
    { date: "2024-10-17 20:00+08:00", type: "game", title: "弹丸论破！", rec: "", },
    { date: "2024-10-18 20:00+08:00", type: "watch", title: "JOJO7", rec: "", },
    { date: "2024-10-19 19:00+08:00", type: "radio", title: "电台时间", rec: "", },
    { date: "2024-10-20 19:00+08:00", type: "sub", title: "粉丝歌回2", rec: "", },
  ] },

  { year: 2024, week: 41, bilibili_url: "985912865264238599", events: [
    { date: "2024-10-07 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-10-08 20:00+08:00", type: "watch", title: "继续水浒水浒", rec: "", },
    { date: "2024-10-09 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-10-10 20:00+08:00", type: "game", title: "GAME TIME", rec: "", },
    { date: "2024-10-11 20:00+08:00", type: "game", title: "弹丸论破！", rec: "", },
    { date: "2024-10-12 19:00+08:00", type: "watch", title: "JOJOJOJO", rec: "", },
    { date: "2024-10-13 19:00+08:00", type: "sub", title: "粉丝歌回", rec: "", },
  ] },

  { year: 2024, week: 40, bilibili_url: "983302152226078720", events: [
    { date: "2024-09-30 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-10-01 20:00+08:00", type: "game", title: "哦沙威玛沙威玛～", rec: "", },
    { date: "2024-10-02 19:00+08:00", type: "watch", title: "心惊胆跳观影时间", rec: "", },
    { date: "2024-10-03 19:00+08:00", type: "game", title: "大家一起糖豆人", rec: "", },
    { date: "2024-10-04 19:00+08:00", type: "watch", title: "碧蓝之海", rec: "", },
    { date: "2024-10-05 19:00+08:00", type: "sub", title: "粉丝歌回", rec: "", reason: "与粉丝协商已改为游戏回（沙威玛传奇）" },
    { date: "2024-10-06 19:00+08:00", type: "watch", title: "我推的视频", rec: "", },
  ] },

  { year: 2024, week: 39, bilibili_url: "980710521683574801", events: [
    { date: "2024-09-23 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-09-24 20:00+08:00", type: "game", title: "弹丸论破！", rec: "", },
    { date: "2024-09-25 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-09-26 20:00+08:00", type: "watch", title: "Jo7解说", rec: "", },
    { date: "2024-09-27 20:00+08:00", type: "sub", title: "棉花糖聊天～", rec: "", },
    { date: "2024-09-28 19:00+08:00", type: "game", title: "GAME TIME", rec: "", },
    { date: "2024-09-29 19:00+08:00", type: "fitness", title: "健身环", rec: "", },
  ] },

  { year: 2024, week: 38, bilibili_url: "979228126866309155", events: [
    { date: "2024-09-16 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-09-17 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-09-18 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-09-19 20:00+08:00", type: "sing", title: "周年歌回*★,°*:.☆(￣▽￣", rec: "", },
    { date: "2024-09-20 20:00+08:00", type: "game", title: "弹丸论破", rec: "", },
    { date: "2024-09-21 19:00+08:00", type: "watch", title: "黑袍看到哪了？", rec: "", },
    { date: "2024-09-22 19:00+08:00", type: "game", title: "糖豆人！", rec: "", },
  ] },

  { year: 2024, week: 37, bilibili_url: "975520844023332921", events: [
    { date: "2024-09-09 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-09-10 20:00+08:00", type: "game", title: "影神图一览", rec: "", },
    { date: "2024-09-11 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-09-12 20:00+08:00", type: "game", title: "弹丸论破（游戏", rec: "", },
    { date: "2024-09-13 20:00+08:00", type: "watch", title: "哭泣少女乐队", rec: "", },
    { date: "2024-09-14 19:00+08:00", type: "watch", title: "看看JO7解说", rec: "", },
    { date: "2024-09-15 19:00+08:00", type: "sing", title: "周年歌回(^ω^)", rec: "", cancelled: true, reason: "https://t.bilibili.com/978088182179430407" },
  ] },

  { year: 2024, week: 36, bilibili_url: "972922444641730563", events: [
    { date: "2024-09-02 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-09-03 20:00+08:00", type: "game", title: "黑", rec: "", },
    { date: "2024-09-04 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-09-05 20:00+08:00", type: "game", title: "神", rec: "", },
    { date: "2024-09-06 20:00+08:00", type: "game", title: "话", rec: "", },
    { date: "2024-09-07 19:00+08:00", type: "game", title: "悟", rec: "", },
    { date: "2024-09-08 19:00+08:00", type: "radio", title: "电台时间", rec: "", },
  ] },

  { year: 2024, week: 35, bilibili_url: "970289668302045205", events: [
    { date: "2024-08-26 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-08-27 20:00+08:00", type: "game", title: "黑", rec: "", },
    { date: "2024-08-28 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-08-29 20:00+08:00", type: "game", title: "神", rec: "", },
    { date: "2024-08-30 20:00+08:00", type: "game", title: "话", rec: "", },
    { date: "2024-08-31 19:00+08:00", type: "game", title: "悟", rec: "", },
    { date: "2024-09-01 19:00+08:00", type: "watch", title: "没想到是JO吧！", rec: "", },
  ] },

  { year: 2024, week: 34, bilibili_url: "967706739456606211", events: [
    { date: "2024-08-19 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-08-20 20:00+08:00", type: "game", title: "黑神话 悟空", rec: "BV1j1421878f", },
    { date: "2024-08-21 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-08-22 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV1sZ421K7ax", },
    { date: "2024-08-23 20:00+08:00", type: "watch", title: "弹丸论破", rec: "BV18w4m1r733", },
    { date: "2024-08-24 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1YT421z72J", },
    { date: "2024-08-25 19:00+08:00", type: "fitness", title: "运动使人快乐", rec: "BV1qz421e74k", },
  ] },

  { year: 2024, week: 33, bilibili_url: "965124785495343145", events: [
    { date: "2024-08-12 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-08-13 20:00+08:00", type: "game", title: "Still Wakes the Deep", rec: "BV1zM4m1y7Fc", },
    { date: "2024-08-14 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-08-15 20:00+08:00", type: "sub", title: "康康大家的！", rec: "BV1eZ421N7Vv", },
    { date: "2024-08-16 20:00+08:00", type: "radio", title: "晚间电台", rec: "BV1Yi421a7zN", },
    { date: "2024-08-17 19:00+08:00", type: "watch", title: "白2使人快乐", rec: "BV1Vm42137zk", },
    { date: "2024-08-18 19:00+08:00", type: "game", title: "GAME TIME", rec: "BV1Cz421i7iR", },
  ] },

  { year: 2024, week: 32, bilibili_url: "962608913868390407", events: [
    { date: "2024-08-05 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-08-06 20:00+08:00", type: "chat", title: "谢谢大家的继续啦", rec: "BV1br421K7Y8", },
    { date: "2024-08-07 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-08-08 20:00+08:00", type: "sub", title: "看二创～", rec: "BV13x4y1479R", },
    { date: "2024-08-09 20:00+08:00", type: "game", title: "中国式网游（完结？", rec: "", },
    { date: "2024-08-10 18:00+08:00", type: "watch", title: "祖国人祖国魂", rec: "BV1Lr421K7q2", },
    { date: "2024-08-11 19:00+08:00", type: "game", title: "糖一下！", rec: "BV1KW42197sf", },
  ] },

  { year: 2024, week: 31, bilibili_url: "959926797241155605", events: [
    { date: "2024-07-29 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-07-30 20:00+08:00", type: "watch", title: "康康我的", rec: "BV1mS411w7ZS", },
    { date: "2024-07-31 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-08-01 20:00+08:00", type: "game", title: "中国式网游", rec: "BV1V142187k6", },
    { date: "2024-08-02 20:00+08:00", type: "watch", title: "看JO7漫画解说", rec: "BV1iS42197hH", },
    { date: "2024-08-03 19:00+08:00", type: "watch", title: "能看 JOJO了（泪", rec: "BV1iS4219783", },
    { date: "2024-08-04 20:00+08:00", type: "special", title: "花店神秘来客！", rec: "BV18H4y1c78Z", },
  ] },

  { year: 2024, week: 30, bilibili_url: "", events: [
    { date: "2024-07-22 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-07-23 20:00+08:00", type: "radio", title: "我来啦！！", rec: "BV1PM4m117JR", },
    { date: "2024-07-24 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-07-25 20:00+08:00", type: "watch", title: "生病少话（真的吗", rec: "BV1eE421w7DX", },
    { date: "2024-07-26 20:00+08:00", type: "game", title: "生病少话（真的吗", rec: "BV1iE421w7H5", },
    { date: "2024-07-27 19:00+08:00", type: "watch", title: "生病少话（真的吗", rec: "BV12y411e7i1", },
    { date: "2024-07-28 19:00+08:00", type: "game", title: "我来了", rec: "BV1pn4y1f7B1", },
  ] },

  { year: 2024, week: 29, bilibili_url: "954728782741110820", events: [
    { date: "2024-07-15 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-07-16 20:00+08:00", type: "game", title: "文字规则怪谈", rec: "BV1am421g784", },
    { date: "2024-07-17 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-07-18 20:00+08:00", type: "watch", title: "康康我的", rec: "BV1dm421g7fV", },
    { date: "2024-07-19 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV1GS42197Fu", },
    { date: "2024-07-20 19:00+08:00", type: "watch", title: "JOJO", rec: "", cancelled: true, reason: "https://t.bilibili.com/956207020304760884" },
    { date: "2024-07-21 19:00+08:00", type: "fitness", title: "锻炼时间", rec: "", cancelled: true, reason: "https://t.bilibili.com/956566809713049672" },
  ] },

  { year: 2024, week: 28, bilibili_url: "952123073379696664", events: [
    { date: "2024-07-08 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-07-09 20:00+08:00", type: "game", title: "戴夫之旅", rec: "BV1Dr421T7rp", },
    { date: "2024-07-10 20:00+08:00", type: "watch", title: "康康我的", rec: "BV11x4y1x7cc", },
    { date: "2024-07-11 12:00+08:00", type: "chat", title: "喝奶茶先聊一会", rec: "BV1n6421f7rr", },
    { date: "2024-07-12 20:00+08:00", type: "radio", title: "主舞台日后谈（电台）", rec: "BV19J4m1T7dZ", },
    { date: "2024-07-13 09:00+08:00", type: "special", title: "早安BW（游场）", rec: "BV1tT421k79x", },
    { date: "2024-07-14 13:00+08:00", type: "special", title: "午安BW（游场）", rec: "BV1Lw4m1Y7XF", },
  ] },

  { year: 2024, week: 27, bilibili_url: "949875967923322886", events: [
    { date: "2024-07-01 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-07-02 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-07-03 20:00+08:00", type: "watch", title: "看点什么好呢", rec: "BV12i421a7dD", },
    { date: "2024-07-04 20:00+08:00", type: "game", title: "挖坑不填不是好习惯", rec: "BV1bW421R7qZ", },
    { date: "2024-07-05 20:00+08:00", type: "radio", title: "电台一下", rec: "BV1M1421k7C3", },
    { date: "2024-07-06 19:00+08:00", type: "watch", title: "JOJO", rec: "", },
    { date: "2024-07-07 19:00+08:00", type: "fitness", title: "健身环", rec: "", cancelled: true },
  ] },

  { year: 2024, week: 26, bilibili_url: "946897399767367701", events: [
    { date: "2024-06-24 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-06-25 20:00+08:00", type: "watch", title: "看看我的！", rec: "BV18i421e7bN", },
    { date: "2024-06-26 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-06-27 20:00+08:00", type: "game", title: "岛？岛！", rec: "BV12E421N7d1", },
    { date: "2024-06-28 20:00+08:00", type: "sub", title: "棉", rec: "BV1En4y1X7uw", },
    { date: "2024-06-29 19:00+08:00", type: "sub", title: "花", rec: "BV1VT421Y727", },
    { date: "2024-06-30 19:00+08:00", type: "game", title: "糖", rec: "BV11M4m1m7p4", },
  ] },

  { year: 2024, week: 25, bilibili_url: "944659828968521735", events: [
    { date: "2024-06-17 20:00+08:00", type: "collab", title: "有鬼（？", rec: "BV1pS411A7iY", },
    { date: "2024-06-18 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-06-19 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-06-20 20:00+08:00", type: "game", title: "对马岛了吗", rec: "BV1yz421B7qo", },
    { date: "2024-06-21 20:00+08:00", type: "watch", title: "看看我的推荐", rec: "BV1wx4y187T3", },
    { date: "2024-06-22 19:00+08:00", type: "watch", title: "JOJOJOJO", rec: "BV1Z4421S72Q", },
    { date: "2024-06-23 19:00+08:00", type: "game", title: "好久没糖了，糖一下吧", rec: "BV1GS421o7RN", },
  ] },

  { year: 2024, week: 24, bilibili_url: "942090802869305361", events: [
    { date: "2024-06-10 20:00+08:00", type: "radio", title: "端午电台", rec: "BV1Fm421L7w2", },
    { date: "2024-06-11 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-06-12 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-06-13 20:00+08:00", type: "watch", title: "康康好看的", rec: "BV1KZ421g7Ma", },
    { date: "2024-06-14 20:00+08:00", type: "game", title: "女鬼桥续", rec: "BV1K4421Q7aN", },
    { date: "2024-06-15 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1Pw4m1e731", },
    { date: "2024-06-16 19:00+08:00", type: "game", title: "对马岛の奶绿", rec: "BV1CS421d7ui", },
  ] },

  { year: 2024, week: 23, bilibili_url: "939518662883147847", events: [
    { date: "2024-06-03 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-06-04 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-06-05 20:00+08:00", type: "game", title: "本所不可思议", rec: "BV1Gb421i7rC", },
    { date: "2024-06-06 20:00+08:00", type: "watch", title: "开个视频新坑", rec: "BV1PM4m167rM", },
    { date: "2024-06-07 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV1nT421e7a4", },
    { date: "2024-06-08 19:00+08:00", type: "watch", title: "JOJOJOJO", rec: "BV1o1421k739", },
    { date: "2024-06-09 19:00+08:00", type: "fitness", title: "健身环！", rec: "BV13Z421g7XZ", },
  ] },

  { year: 2024, week: 22, bilibili_url: "936553584961519651", events: [
    { date: "2024-05-27 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-05-28 20:00+08:00", type: "game", title: "本所七大不可思议", rec: "BV1rM4m167tn", },
    { date: "2024-05-29 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-05-30 20:00+08:00", type: "sub", title: "大家给我推荐视频~", rec: "BV1js421G7sv", },
    { date: "2024-05-31 20:00+08:00", type: "game", title: "PVZ杂交版", rec: "BV1HJ4m1G7q4", },
    { date: "2024-06-01 19:00+08:00", type: "watch", title: "啊啊啊还是有鬼！", rec: "BV1Ub421e7vD", },
    { date: "2024-06-02 19:00+08:00", type: "radio", title: "小知识电台", rec: "BV16D421g7eP", },
  ] },

  { year: 2024, week: 21, bilibili_url: "933543693395165289", events: [
    { date: "2024-05-20 20:00+08:00", type: "game", title: "女鬼啊啊啊啊", rec: "BV1hy411e7t1", },
    { date: "2024-05-21 20:00+08:00", type: "radio", title: "电台歌回！", rec: "BV1ty411e7Qw", },
    { date: "2024-05-22 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-05-23 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-05-24 20:00+08:00", type: "game", title: "潜水哥斯拉", rec: "BV1xm421T78v", },
    { date: "2024-05-25 19:00+08:00", type: "watch", title: "看会视频！", rec: "BV11y411a7b8", },
    { date: "2024-05-26 19:00+08:00", type: "fitness", title: "锻炼身体！", rec: "BV1ds421u72v", },
  ] },

  { year: 2024, week: 20, bilibili_url: "931360720409329685", events: [
    { date: "2024-05-13 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-05-14 20:00+08:00", type: "watch", title: "视频推荐填坑", rec: "BV1fy411Y7aT", },
    { date: "2024-05-15 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-05-16 20:00+08:00", type: "game", title: "愿望单都是恐怖游戏", rec: "BV1zZ42147Mt", },
    { date: "2024-05-17 20:00+08:00", type: "watch", title: "JOJOJOJO", rec: "BV1uM4m1y7nt", },
    { date: "2024-05-18 19:00+08:00", type: "game", title: "GAME TIME", rec: "BV1Em421K7HK", },
    { date: "2024-05-19 19:00+08:00", type: "fitness", title: "锻炼身体", rec: "BV1sy411e7Pp", },
  ] },

  { year: 2024, week: 19, bilibili_url: "929106146049916947", events: [
    { date: "2024-05-06 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-05-07 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-05-08 20:00+08:00", type: "radio", title: "电台一下", rec: "", },
    { date: "2024-05-09 20:00+08:00", type: "watch", title: "鹿鼎记（续）", rec: "", },
    { date: "2024-05-10 20:00+08:00", type: "game", title: "只蟹（壳逝二度）", rec: "BV1HJ4m1N7Sh", },
    { date: "2024-05-11 19:00+08:00", type: "sub", title: "梦境之花（续）", rec: "BV1jM4m1C7oh", },
    { date: "2024-05-12 19:00+08:00", type: "game", title: "GAME TIME", rec: "BV1h7421f7kn", },
  ] },

  { year: 2024, week: 18, bilibili_url: "926148137643409411", events: [
    { date: "2024-04-29 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-04-30 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-05-01 19:00+08:00", type: "game", title: "饿殍", rec: "BV1di42117UA", },
    { date: "2024-05-02 19:00+08:00", type: "watch", title: "来点开心的缓缓", rec: "BV1Fb421e7v2", },
    { date: "2024-05-03 19:00+08:00", type: "watch", title: "终于有JOJO了", rec: "BV17t421F7JR", },
    { date: "2024-05-04 19:00+08:00", type: "game", title: "我和你赌命", rec: "BV1BE421G7wz", },
    { date: "2024-05-05 19:00+08:00", type: "sub", title: "棉花糖！", rec: "BV1Tm411y7gK", },
  ] },

  { year: 2024, week: 17, bilibili_url: "923564744871247872", events: [
    { date: "2024-04-22 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-04-23 20:00+08:00", type: "watch", title: "大时代", rec: "BV18t421A7gA", },
    { date: "2024-04-24 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-04-25 20:00+08:00", type: "game", title: "新的卡比", rec: "BV1iD421J7mp", },
    { date: "2024-04-26 20:00+08:00", type: "radio", title: "电台时间", rec: "BV14p421Q7GH", },
    { date: "2024-04-27 19:00+08:00", type: "game", title: "GAME TIME", rec: "BV1cT421y76Q", },
    { date: "2024-04-28 19:00+08:00", type: "fitness", title: "健身环", rec: "BV1Kb421e7KA", },
  ] },

  { year: 2024, week: 16, bilibili_url: "920963931706490930", events: [
    { date: "2024-04-15 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-04-16 20:00+08:00", type: "watch", title: "MyGO!", rec: "BV14t421j7R2", },
    { date: "2024-04-17 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-04-18 20:00+08:00", type: "game", title: "我要开超市", rec: "BV1Hi42127vp", },
    { date: "2024-04-19 20:00+08:00", type: "sub", title: "大家的视频推荐~", rec: "BV1Et421j7AH", },
    { date: "2024-04-20 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1Di42127Hg", },
    { date: "2024-04-21 19:00+08:00", type: "game", title: "新的卡比", rec: "BV1iF4m1P7Ww", },
  ] },

  { year: 2024, week: 15, bilibili_url: "918373817330434054", events: [
    { date: "2024-04-08 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-04-09 20:00+08:00", type: "watch", title: "络新妇之谜（续）", rec: "BV1Xx421U7kJ", },
    { date: "2024-04-10 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-04-11 20:00+08:00", type: "game", title: "逆转裁判", rec: "BV12m42177Di", },
    { date: "2024-04-12 20:00+08:00", type: "radio", title: "电台一下", rec: "BV19z421C75R", },
    { date: "2024-04-13 19:00+08:00", type: "game", title: "速通流海龟汤", rec: "BV1mE421u73h", },
    { date: "2024-04-14 19:00+08:00", type: "watch", title: "开个视频新坑", rec: "BV1Mm421j79P", },
  ] },

  { year: 2024, week: 14, bilibili_url: "915775568302047238", events: [
    { date: "2024-04-01 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-04-02 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-04-03 20:00+08:00", type: "game", title: "逆转裁判！", rec: "BV1HZ421B7Zs", },
    { date: "2024-04-04 20:00+08:00", type: "special", title: "画画画头像！", rec: "BV1fM4m1R7V9", },
    { date: "2024-04-05 20:00+08:00", type: "watch", title: "西北老汉一动不动", rec: "BV13Z421i7ZD", },
    { date: "2024-04-06 19:00+08:00", type: "sub", title: "海~龟~汤~", rec: "BV1om411z76h", },
    { date: "2024-04-07 19:00+08:00", type: "game", title: "谁是新の卡比", rec: "BV1Kq421A7QU", },
  ] },

  { year: 2024, week: 13, bilibili_url: "913148272376283139", events: [
    { date: "2024-03-25 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-03-26 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-03-27 20:00+08:00", type: "game", title: "开！往宇宙尽头开！", rec: "BV1oM4m197ku", },
    { date: "2024-03-28 20:00+08:00", type: "radio", title: "聊聊电台", rec: "BV1mq421A7hd", },
    { date: "2024-03-29 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV1Cr42147Nw", },
    { date: "2024-03-30 19:00+08:00", type: "sub", title: "梦境之花（续）", rec: "BV17x4y1m7qU", },
    { date: "2024-03-31 19:00+08:00", type: "fitness", title: "运动小能手！", rec: "BV1Kz421f7hP", },
  ] },

  { year: 2024, week: 12, bilibili_url: "910569178860093476", events: [
    { date: "2024-03-18 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-03-19 20:00+08:00", type: "game", title: "继续龟", rec: "BV1bp421U7gx", },
    { date: "2024-03-20 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-03-21 20:00+08:00", type: "watch", title: "我流推荐回", rec: "BV121421Q7nZ", },
    { date: "2024-03-22 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV1aH4y1p7ho", },
    { date: "2024-03-23 19:00+08:00", type: "watch", title: "JOJO的奇妙冒险", rec: "BV19t421G7LN", },
    { date: "2024-03-24 19:00+08:00", type: "sub", title: "奶味棉花糖", rec: "BV1y1421Q7qM", },
  ] },

  { year: 2024, week: 11, bilibili_url: "907979944935555091", events: [
    { date: "2024-03-11 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-03-12 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-03-13 20:00+08:00", type: "game", title: "最后一次破案了！", rec: "BV1Uj421Z7JA", },
    { date: "2024-03-14 20:00+08:00", type: "watch", title: "better call 奶！", rec: "BV11H4y1s7Sq", },
    { date: "2024-03-15 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV1wm411R73t", },
    { date: "2024-03-16 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1LC411h7ui", },
    { date: "2024-03-17 19:00+08:00", type: "game", title: "我玩海龟汤！", rec: "BV1jH4y1s7ds", },
  ] },

  { year: 2024, week: 10, bilibili_url: "905753648652353621", events: [
    { date: "2024-03-04 20:00+08:00", type: "special", title: "生日会", rec: "BV1Lj421U7MZ", },
    { date: "2024-03-05 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-03-06 20:00+08:00", type: "chat", title: "谢礼物回", rec: "BV1nm411Z7P1", },
    { date: "2024-03-07 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-03-08 20:00+08:00", type: "watch", title: "好有品味的推荐", rec: "BV1AZ421h7AG", },
    { date: "2024-03-09 19:00+08:00", type: "game", title: "山河旅探！", rec: "BV1Bu4m1g72M", },
    { date: "2024-03-10 19:00+08:00", type: "radio", title: "怪谈电台", rec: "BV1kx4y1Q7UZ", },
  ] },

  { year: 2024, week: 9, bilibili_url: "902736537210322962", events: [
    { date: "2024-02-26 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-02-27 20:00+08:00", type: "game", title: "山河旅探", rec: "BV1YF4m1575P", },
    { date: "2024-02-28 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-02-29 20:00+08:00", type: "fitness", title: "健身环", rec: "BV1bw4m1f77c", },
    { date: "2024-03-01 20:00+08:00", type: "watch", title: "JOJO的奇妙冒险", rec: "BV1VJ4m1Y7ny", },
    { date: "2024-03-02 19:00+08:00", type: "watch", title: "Better call nine！", rec: "BV1xH4y1j7S9", },
    { date: "2024-03-03 20:00+08:00", type: "collab", title: "帕鲁复建", rec: "BV1FZ421a7BS", },
  ] },

  { year: 2024, week: 8, bilibili_url: "899855679309742084", events: [
    { date: "2024-02-19 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-02-20 20:00+08:00", type: "game", title: "山河旅探", rec: "BV1VZ42127FR", },
    { date: "2024-02-21 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-02-22 20:00+08:00", type: "watch", title: "索尔的奇妙冒险", rec: "BV192421F7bi", },
    { date: "2024-02-23 20:00+08:00", type: "game", title: "糖豆人～", rec: "BV1qz42197mP", },
    { date: "2024-02-24 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1ax421f7cw", },
    { date: "2024-02-25 19:00+08:00", type: "radio", title: "心理测试电台", rec: "BV11x421f7SH", },
  ] },

  { year: 2024, week: 7, bilibili_url: "895331760192094295", events: [
    { date: "2024-02-12 20:00+08:00", type: "sub", title: "粉丝歌回（终（大概", rec: "BV1aC411s7GM", },
    { date: "2024-02-13 20:00+08:00", type: "game", title: "玩玩新游戏", rec: "BV1cx4y1272m", },
    { date: "2024-02-14 20:00+08:00", type: "sing", title: "我的歌回", rec: "BV1US421K7F7", },
    { date: "2024-02-15 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-02-16 20:00+08:00", type: "sub", title: "粉丝视频推荐", rec: "BV1oH4y1h7W1", },
    { date: "2024-02-17 20:00+08:00", type: "game", title: "博！", rec: "BV1gA4m1V7Td", },
    { date: "2024-02-18 20:00+08:00", type: "rest", title: "", rec: "", },
  ] },

  { year: 2024, week: 6, bilibili_url: "895331760192094295", events: [
    { date: "2024-02-05 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-02-06 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-02-07 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-02-08 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-02-09 20:00+08:00", type: "special", title: "新年画新头像", rec: "BV1Ju4m1K7er", },
    { date: "2024-02-10 20:00+08:00", type: "watch", title: "过年必看西游记～", rec: "BV1VF4m177r4", },
    { date: "2024-02-11 20:00+08:00", type: "collab", title: "双人厨房", rec: "BV1SH4y1h7Bf", },
  ] },

  { year: 2024, week: 5, bilibili_url: "892396562357944321", events: [
    { date: "2024-01-29 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-01-30 20:00+08:00", type: "collab", title: "LLL的帕鲁生活", rec: "BV1oF4m1M7hY", },
    { date: "2024-01-31 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-02-01 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV1pt421H7QB", },
    { date: "2024-02-02 12:00+08:00", type: "chat", title: "白日梦闲聊", rec: "BV1Gx42197F4", },
    { date: "2024-02-03 12:00+08:00", type: "watch", title: "jojo的奇妙冒险", rec: "BV1jC411r79Z", },
    { date: "2024-02-04 19:00+08:00", type: "sub", title: "粉丝歌回（续）", rec: "BV1gx4y1f7KP", },
  ] },

  { year: 2024, week: 4, bilibili_url: "889692287708168195", events: [
    { date: "2024-01-22 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-01-23 20:00+08:00", type: "game", title: "先玩玩幻兽帕鲁", rec: "BV1P64y1w7C3", },
    { date: "2024-01-24 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-01-25", type: "radio", title: "不定时电台", rec: "BV14V411Q7yE", },
    { date: "2024-01-26 20:00+08:00", type: "watch", title: "看看风骚律师", rec: "BV1764y1w7xf", },
    { date: "2024-01-27 19:00+08:00", type: "sub", title: "粉丝歌会~", rec: "BV1Ai4y1p7ah", },
    { date: "2024-01-28 19:00+08:00", type: "sub", title: "海龟汤！！！", rec: "BV1Lk4y1f7U5", },
  ] },

  { year: 2024, week: 3, bilibili_url: "887570702725546005", events: [
    { date: "2024-01-15 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-01-16 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-01-17 20:00+08:00", type: "watch", title: "奶姑娘", rec: "BV1xQ4y1w7Sc", },
    { date: "2024-01-18 20:00+08:00", type: "game", title: "打电动，少话", rec: "BV19a4y1C7Wx", },
    { date: "2024-01-19 20:00+08:00", type: "watch", title: "JOJO第四部", rec: "BV1va4y1y7Zw", },
    { date: "2024-01-20 19:00+08:00", type: "fitness", title: "健身环", rec: "BV1D5411C7zm", },
    { date: "2024-01-21 19:00+08:00", type: "game", title: "糖豆人", rec: "BV1zN4y1n7ya", },
  ] },

  { year: 2024, week: 2, bilibili_url: "884573816268783616", events: [
    { date: "2024-01-08 20:00+08:00", type: "rest", title: "", rec: "BV1Ne411v7Hp", },
    { date: "2024-01-09 20:00+08:00", type: "watch", title: "我流视频推荐", rec: "", },
    { date: "2024-01-10 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-01-11 20:00+08:00", type: "game", title: "打电动，少话", rec: "BV1Jg4y1S7tc", },
    { date: "2024-01-12 20:00+08:00", type: "sub", title: "看看二创", rec: "BV1vQ4y157bm", },
    { date: "2024-01-13 19:00+08:00", type: "sub", title: "梦境之花", rec: "https://laplace.mov/web/index.html#!/item?id=13170&serverId=94ce735c826b4584ad48e501e538366d", fans_rec: true },
    { date: "2024-01-14 19:00+08:00", type: "game", title: "心理测试大挑战！", rec: "BV19a4y117nf", },
  ] },

  { year: 2024, week: 1, bilibili_url: "882003351383834660", events: [
    { date: "2024-01-01 20:00+08:00", type: "radio", title: "新年第一电台！", rec: "BV1G64y1E7Hi", },
    { date: "2024-01-02 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-01-03 20:00+08:00", type: "game", title: "打电动，少话", rec: "BV1bW4y1P7mL", },
    { date: "2024-01-04 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2024-01-05 20:00+08:00", type: "sub", title: "看看二创/棉花糖", rec: "", cancelled: true, reason: "https://t.bilibili.com/883119643446738962" },
    { date: "2024-01-06 19:00+08:00", type: "watch", title: "JOJO完结篇（大概？", rec: "BV18W4y1N7j8", },
    { date: "2024-01-07 19:00+08:00", type: "game", title: "打电动，话少", rec: "BV1Ck4y1X77K", },
  ] },

  { year: 2023, week: 52, bilibili_url: "879400893262331961", events: [
    { date: "2023-12-25 20:00+08:00", type: "special", title: "【圣诞新衣回】圣诞快乐！", rec: "BV1194y1F7dw", },
    { date: "2023-12-26 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-12-27 20:00+08:00", type: "chat", title: "【杂谈】谢谢大家的支持nya", rec: "BV13e411q7Kh", },
    { date: "2023-12-28 20:00+08:00", type: "chat", title: "谢礼物时间", rec: "BV1Ji4y167AE", },
    { date: "2023-12-29 20:00+08:00", type: "game", title: "打电动啦", rec: "BV1bN4y1x7nj", },
    { date: "2023-12-30 19:00+08:00", type: "watch", title: "我推荐视频回💢", rec: "BV1fT4y1p7gt", },
    { date: "2023-12-31 19:00+08:00", type: "game", title: "糖！豆！人！（不元）", rec: "BV1tC4y1i7ro", },
  ] },

  { year: 2023, week: 51, bilibili_url: "876799899693219874", events: [
    { date: "2023-12-18 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-12-19 20:00+08:00", type: "watch", title: "视频鉴赏会", rec: "https://laplace.mov/web/index.html#!/item?id=13055&serverId=94ce735c826b4584ad48e501e538366d", fans_rec: true },
    { date: "2023-12-20 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-12-21 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV1bg4y1C7LV", },
    { date: "2023-12-22 20:00+08:00", type: "watch", title: "JoJo的奇妙冒险", rec: "BV1j94y1w7dF", },
    { date: "2023-12-23 19:00+08:00", type: "fitness", title: "健身环", rec: "BV1Mg4y1y7dG", },
    { date: "2023-12-24 19:00+08:00", type: "radio", title: "腰酸背痛的电台(大概", rec: "BV1cj411p72B", },
  ] },

  { year: 2023, week: 50, bilibili_url: "", events: [
    { date: "2023-12-11 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-12-12 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-12-13 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-12-14 20:00+08:00", type: "watch", title: "绝命毒师完鸟！！！", rec: "BV1ng4y117Uf", },
    { date: "2023-12-15 20:00+08:00", type: "game", title: "改过自新！从头做人！", rec: "BV1Jc41127pz", },
    { date: "2023-12-16 19:00+08:00", type: "watch", title: "看会~", rec: "BV1T94y1A754", },
    { date: "2023-12-17 19:00+08:00", type: "game", title: "玩会~", rec: "BV1Ec411o7zz", },
  ] },

  { year: 2023, week: 49, bilibili_url: "871551067404369956", events: [
    { date: "2023-12-04 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-12-05 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-12-06 20:00+08:00", type: "watch", title: "JoJo的奇妙冒险", rec: "BV15Q4y1V7Kj", },
    { date: "2023-12-07 20:00+08:00", type: "game", title: "逃离橘子大作战", rec: "BV1wb4y1j7fX", },
    { date: "2023-12-08 20:00+08:00", type: "radio", title: "好久不见的闲聊电台", rec: "BV1UN4y1a7cw", },
    { date: "2023-12-09 19:00+08:00", type: "sub", title: "煮锅海龟汤", rec: "BV1oi4y1v7bZ", },
    { date: "2023-12-10 19:00+08:00", type: "game", title: "GAME TIME", rec: "BV1eu4y1u7Hs", },
  ] },

  { year: 2023, week: 48, bilibili_url: "868980117162950661", events: [
    { date: "2023-11-27 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-11-28 20:00+08:00", type: "game", title: "又在踩你那缝纫机", rec: "BV1oG411i7PV", },
    { date: "2023-11-29 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-11-30 20:00+08:00", type: "watch", title: "看恐怖片吧", rec: "BV19a4y1d7cG", },
    { date: "2023-12-01 20:00+08:00", type: "game", title: "60s再挑战", rec: "BV1pM411d7eC", },
    { date: "2023-12-02 19:00+08:00", type: "watch", title: "看片填坑", rec: "BV1Sc411Q76D", },
    { date: "2023-12-03 19:00+08:00", type: "game", title: "糖人吧还是", rec: "BV1uH4y1y7tJ", },
  ] },

  { year: 2023, week: 47, bilibili_url: "866417602235203602", events: [
    { date: "2023-11-20 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-11-21 20:00+08:00", type: "game", title: "牢里，真好", rec: "BV1av411c713", },
    { date: "2023-11-22 20:00+08:00", type: "watch", title: "毒师有毒", rec: "BV1Sc411B7CJ", },
    { date: "2023-11-23 20:00+08:00", type: "watch", title: "有毒毒师", rec: "BV1pM411f7EG", },
    { date: "2023-11-24 20:00+08:00", type: "game", title: "随机PVZ？", rec: "BV1xN411M7V5", },
    { date: "2023-11-25 19:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-11-26 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1pQ4y1t71D", },
  ] },

  { year: 2023, week: 46, bilibili_url: "864167503242199045", events: [
    { date: "2023-11-13 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-11-14 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-11-15 20:00+08:00", type: "radio", title: "梦游电台", rec: "BV1LG411X7ob", },
    { date: "2023-11-16 20:00+08:00", type: "sub", title: "视频推荐回", rec: "BV16N411u7WE", },
    { date: "2023-11-17 20:00+08:00", type: "game", title: "天台刷沥青", rec: "BV1Jv411c7hc", },
    { date: "2023-11-18 19:00+08:00", type: "fitness", title: "健！身！环！", rec: "BV1Vg4y1X72F", },
    { date: "2023-11-19 19:00+08:00", type: "watch", title: "有蚂蚁在爬", rec: "BV11a4y1U7GU", },
  ] },

   { year: 2023, week: 45, bilibili_url: "861564491053137960", events: [
     { date: "2023-11-06 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-11-07 20:00+08:00", type: "watch", title: "视频鉴赏会！", rec: "BV1fw411K7GR", },
     { date: "2023-11-08 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-11-09 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV1Vc411R73x", },
     { date: "2023-11-10 20:00+08:00", type: "sub", title: "提问棉花糖", rec: "BV1MC4y1E7ws", },
     { date: "2023-11-11 19:00+08:00", type: "fitness", title: "健身环", rec: "BV1ig4y197dT", },
     { date: "2023-11-12 19:00+08:00", type: "game", title: "糖豆人！", rec: "BV1au4y1N7g7", },
   ] },

   { year: 2023, week: 44, bilibili_url: "", events: [
     { date: "2023-10-30 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-31 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-11-01 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-11-02 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-11-03 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-11-04 19:00+08:00", type: "game", title: "堂堂归来！", rec: "BV1K94y1V7xZ", },
     { date: "2023-11-05 19:00+08:00", type: "game", title: "真不喜欢带娃的！", rec: "BV1tc41197ou", },
   ] },

   { year: 2023, week: 43, bilibili_url: "", events: [
     { date: "2023-10-23 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-24 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-25 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-26 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-27 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-28 19:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-29 19:00+08:00", type: "radio", title: "聊聊最近添的新物件~", rec: "https://laplace.mov/web/index.html#!/item?id=7870&serverId=94ce735c826b4584ad48e501e538366d", fans_rec: true },
   ] },

   { year: 2023, week: 42, bilibili_url: "", events: [
     { date: "2023-10-16 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-17 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-18 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-19 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-20 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-21 19:00+08:00", type: "radio", title: "电台几点档？", rec: "BV19M41197ZK", },
     { date: "2023-10-22 19:00+08:00", type: "rest", title: "", rec: "", },
   ] },

   { year: 2023, week: 41, bilibili_url: "", events: [
     { date: "2023-10-09 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-10 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-11 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-12 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-13 20:00+08:00", type: "radio", title: "电台八点档", rec: "BV17C4y1G7sW", },
     { date: "2023-10-14 19:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-10-15 19:00+08:00", type: "rest", title: "", rec: "", },
   ] },

   { year: 2023, week: 40, bilibili_url: "847855745719336992", events: [
     { date: "2023-10-02 20:00+08:00", type: "game", title: "再给我一分钟！", rec: "BV1o34y1G71P", },
     { date: "2023-10-03 20:00+08:00", type: "sub", title: "视频鉴赏会", rec: "BV1vN4y1o7dt", },
     { date: "2023-10-04 20:00+08:00", type: "game", title: "Sekiro!!!!!", rec: "", cancelled: true, reason: "https://t.bilibili.com/848551049398583299" },
     { date: "2023-10-05 20:00+08:00", type: "radio", title: "电台聊聊聊聊聊", rec: "BV1hh4y1672q", },
     { date: "2023-10-06 20:00+08:00", type: "watch", title: "JOJO奇妙冒险～", rec: "BV1TV411c7e5", },
     { date: "2023-10-07 19:00+08:00", type: "game", title: "Sekiro!!!!!", rec: "BV1YG411m7Dt", },
     { date: "2023-10-08 19:00+08:00", type: "rest", title: "", rec: "", },
   ] },

   { year: 2023, week: 39, bilibili_url: "845617109980413956", events: [
     { date: "2023-09-25 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-09-26 20:00+08:00", type: "game", title: "艾达王汪汪汪", rec: "BV1x34y1A7Z8", },
     { date: "2023-09-27 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-09-28 20:00+08:00", type: "watch", title: "天地争霸奶糖花", rec: "BV1Tj411h7q8", },
     { date: "2023-09-29 20:00+08:00", type: "sub", title: "炖海龟汤补补", rec: "BV1SN4y1Z7ks", },
     { date: "2023-09-30 19:00+08:00", type: "game", title: "GAME TIME", rec: "BV1X34y1G7bb", },
     { date: "2023-10-01 13:00+08:00", type: "special", title: "线下活动！", rec: "BV1x94y1h7yW", },
   ] },

   { year: 2023, week: 38, bilibili_url: "843017112898240553", events: [
     { date: "2023-09-18 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-09-19 20:00+08:00", type: "chat", title: "蟹蟹大家的礼物", rec: "BV1xu4y1z7Yz", },
     { date: "2023-09-20 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-09-21 20:00+08:00", type: "game", title: "打电动啦（拽口音", rec: "BV1xu411g7VC", },
     { date: "2023-09-22 19:00+08:00", type: "watch", title: "JOJO的奇妙冒险", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-09/20230922-1857%20-%20%E3%80%90%E5%A4%A7%E4%BC%9A%E5%91%98%E7%95%AA%E5%89%A7%E6%8E%A8%E8%8D%90%E3%80%91%E7%9C%8BJOJO%EF%BC%81%EF%BC%81%EF%BC%81.mp4", fans_rec: true },
     { date: "2023-09-23 19:00+08:00", type: "game", title: "P! V! Z!", rec: "BV1Dr4y1Z765", },
     { date: "2023-09-24 19:00+08:00", type: "fitness", title: "请给我健身环", rec: "BV1HF411m7UW", },
   ] },

   { year: 2023, week: 37, bilibili_url: "840426079623577641", events: [
     { date: "2023-09-11 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-09-12 20:00+08:00", type: "sub", title: "视频鉴赏投稿", rec: "BV13w411i7d2", },
     { date: "2023-09-13 20:00+08:00", type: "sub", title: "粉丝歌回（续二）", rec: "BV1DP41187aZ", },
     { date: "2023-09-14 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV17z4y157YR", },
     { date: "2023-09-15 20:00+08:00", type: "watch", title: "呔！泼猴！", rec: "BV14m4y1N7BV", },
     { date: "2023-09-16 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1wh4y1e72T", },
     { date: "2023-09-17 19:00+08:00", type: "special", title: "一周年歌回", rec: "BV1QH4y1U76Q", },
   ] },

   { year: 2023, week: 36, bilibili_url: "838190789423005715", events: [
     { date: "2023-09-04 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-09-05 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-09-06 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-09-07 20:00+08:00", type: "sub", title: "粉丝歌会续", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-09/20230907-2000%20-%20%E8%81%8A%E8%81%8A%E8%81%8A%E8%81%8A%E8%81%8A%E8%81%8A%E5%85%88%E5%95%A6%EF%BC%81.mp4", fans_rec: true, },
     { date: "2023-09-08 20:00+08:00", type: "watch", title: "奶绿的视频推荐！", rec: "BV14H4y1D76K", },
     { date: "2023-09-09 19:00+08:00", type: "game", title: "怀旧游戏回", rec: "BV1th4y1v7HE", },
     { date: "2023-09-10 19:00+08:00", type: "watch", title: "呜～看到鬼了", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-09/20230910-1902%20-%20%E6%9C%89%E9%AC%BC%E5%9C%A8%E5%B1%8F%E5%B9%95%E9%87%8C%EF%BC%81%EF%BC%81%EF%BC%88%E6%8D%82%E7%9C%BC.mp4", fans_rec: true, },
   ] },

   { year: 2023, week: 35, bilibili_url: "835202518923345929", events: [
     { date: "2023-08-28 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-08-29 20:00+08:00", type: "watch", title: "鉴赏视频", rec: "BV1rG411d7Z4", },
     { date: "2023-08-30 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-08-31 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV1tF411k7Pm" },
     { date: "2023-09-01 20:00+08:00", type: "radio", title: "厨房电台", rec: "BV1Xh4y127Tq", },
     { date: "2023-09-02 19:00+08:00", type: "sub", title: "天籁之声（流泪）", rec: "BV1Qj411y7JJ", },
     { date: "2023-09-03 19:00+08:00", type: "game", title: "糖！逗！人！", rec: "BV1SH4y1Q7an", },
   ] },

   { year: 2023, week: 34, bilibili_url: "832622793801596933", events: [
     { date: "2023-08-21 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-08-22 20:00+08:00", type: "sub", title: "七夕来点虐狗视频吧", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-08/20230822-2003%20-%20%E3%80%90%E7%9C%8B%E8%A7%86%E9%A2%91%E3%80%91%E5%A4%A7%E5%AE%B6%E5%93%81%E5%91%B3%E7%9C%9F%E5%A5%BD%EF%BC%88%E6%97%A0%E6%84%9F%E6%83%85.mp4", fans_rec: true, },
     { date: "2023-08-23 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-08-24 20:00+08:00", type: "game", title: "打游戏吗", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-08/20230824-1958%20-%20%E3%80%90%E6%B8%B8%E6%88%8F%E3%80%91%E6%91%87%E6%99%83%E7%9A%84%E9%85%92%E6%9D%AF~%EF%BC%88%E7%A0%B0.mp4", fans_rec: true, },
     { date: "2023-08-25 20:00+08:00", type: "game", title: "一般路过橄榄球僵尸", rec: "BV1VF411y742", },
     { date: "2023-08-26 19:00+08:00", type: "sub", title: "写作棉花糖读作……？", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-08/20230826-1900%20-%20%E6%A3%89%E8%8A%B1%E7%B3%96%E8%81%8A%E5%A4%A9%E6%8F%90%E9%97%AE%E6%97%B6%E9%97%B4%EF%BC%81%EF%BC%81.mp4", fans_rec: true, },
     { date: "2023-08-27 19:00+08:00", type: "game", title: "打游戏了 民那", rec: "BV1au4y1D7PV", },
   ] },

   { year: 2023, week: 33, bilibili_url: "830038258591203350", events: [
     { date: "2023-08-14 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-08-15 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-08-16 20:00+08:00", type: "game", title: "游戏时间到！", rec: "BV1Fu411J7FB", },
     { date: "2023-08-17 20:00+08:00", type: "sub", title: "视频推荐拜托了！", rec: "BV1XN411q7YU", },
     { date: "2023-08-18 20:00+08:00", type: "radio", title: "夜游电台", rec: "BV1vu411J7MH", },
     { date: "2023-08-19 19:00+08:00", type: "special", title: "泳池派对", rec: "BV1SX4y1W7B6", },
     { date: "2023-08-20 19:00+08:00", type: "fitness", title: "请给我健身环", rec: "BV1tp4y1K7xb", },
   ] },

   { year: 2023, week: 32, bilibili_url: "827435332304633895", events: [
     { date: "2023-08-07 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-08-08 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-08-09 20:00+08:00", type: "collab", title: "和莉莉斯的双人成行", rec: "BV1JN41187dU", },
     { date: "2023-08-10 20:00+08:00", type: "game", title: "请给我糖豆人", rec: "BV1Lu411n7G6", },
     { date: "2023-08-11 20:00+08:00", type: "sub", title: "海龟汤", rec: "BV1KP41147cJ", },
     { date: "2023-08-12 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1Wz4y1g7aM", },
     { date: "2023-08-13 19:00+08:00", type: "watch", title: "成龙历险记", rec: "BV1nF411Z7Ry", },
   ] },

   { year: 2023, week: 31, bilibili_url: "824853082015793238", events: [
     { date: "2023-07-31 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-08-01 20:00+08:00", type: "watch", title: "NGN之窥探", rec: "BV14p4y1V7V4", },
     { date: "2023-08-02 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-08-03 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV1Bj411r7XY", },
     { date: "2023-08-04 20:00+08:00", type: "sub", title: "看二创", rec: "BV1Pj411r7kQ", },
     { date: "2023-08-05 19:00+08:00", type: "watch", title: "龙叔到哪了", rec: "BV1dj411r7DD", },
     { date: "2023-08-06 19:00+08:00", type: "game", title: "GAME TIME", rec: "BV1Ah4y1k7hC", },
   ] },

   { year: 2023, week: 30, bilibili_url: "822225893713772601", events: [
     { date: "2023-07-24 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-07-25 20:00+08:00", type: "watch", title: "奶绿的视频推荐", rec: "BV1s8411U773", },
     { date: "2023-07-26 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-07-27 20:00+08:00", type: "radio", title: "晚间电台", rec: "BV1Wu4y127mp", },
     { date: "2023-07-28 20:00+08:00", type: "game", title: "下海见克总！", rec: "BV1w841127xS", },
     { date: "2023-07-29 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1KM4y1H7jD", },
     { date: "2023-07-30 19:00+08:00", type: "game", title: "幽灵鬼绿", rec: "BV1n8411279z", },
   ] },

   { year: 2023, week: 29, bilibili_url: "819983907661283385", events: [
     { date: "2023-07-17 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-07-18 20:00+08:00", type: "rest", title: "", rec: "", },
     { date: "2023-07-19 20:00+08:00", type: "radio", title: "夜间电台", rec: "BV1Vm4y1L7ZZ", },
     { date: "2023-07-20 20:00+08:00", type: "watch", title: "龙叔我来了", rec: "BV1Xk4y157zT", },
     { date: "2023-07-21 20:00+08:00", type: "sub", title: "棉花糖 - BW 参会日", rec: "BV1Ju411V74R", },
     { date: "2023-07-22 13:00+08:00", type: "special", title: "逛逛 BW 展", rec: "BV1wM4y1x7vc", },
     { date: "2023-07-23 19:00+08:00", type: "game", title: "奶桑，潜水去！", rec: "BV1Kp4y157BB", },
   ] },

  { year: 2023, week: 28, bilibili_url: "817043113467969605", events: [
    { date: "2023-07-10 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-07-11 20:00+08:00", type: "watch", title: "看看视频", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-07/20230711-2001%20-%20%E6%9D%A5%E7%9C%8B%E8%A7%86%E9%A2%91%EF%BC%81%EF%BC%81%EF%BC%81%EF%BC%81.mp4", fans_rec: true, },
    { date: "2023-07-12 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-07-13 20:00+08:00", type: "game", title: "幽灵诡计", rec: "BV1e94y1B7He", },
    { date: "2023-07-14 20:00+08:00", type: "watch", title: "成龙历险记（转视频鉴赏）", rec: "BV1Ph4y1f7fn", },
    { date: "2023-07-15 19:00+08:00", type: "game", title: "审判之奶绿", rec: "BV1mx4y1o7GE", },
    { date: "2023-07-16 12:00+08:00", type: "radio", title: "午觉电台TIME", rec: "BV1Gh4y1f78D", },
  ] },

  { year: 2023, week: 27, bilibili_url: "814444856081383493", events: [
    { date: "2023-07-03 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-07-04 20:00+08:00", type: "game", title: "生化三完结了吗", rec: "BV1cu411j7oh", },
    { date: "2023-07-05 20:00+08:00", type: "fitness", title: "健身环", rec: "BV1Bh411A7xM", },
    { date: "2023-07-06 20:00+08:00", type: "watch", title: "刷刷阿b", rec: "BV13s4y1c74H", },
    { date: "2023-07-07 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-07-08 19:00+08:00", type: "sing", title: "没想到吧是歌回", rec: "BV1tm4y1n7Cg", },
    { date: "2023-07-09 19:00+08:00", type: "sub", title: "邮箱棉花糖", rec: "BV1sM4y1j7tT", },
  ] },

  { year: 2023, week: 26, bilibili_url: "811850180175331396", events: [
    { date: "2023-06-26 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-06-27 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-06-28 20:00+08:00", type: "game", title: "生化危机3", rec: "BV1Xz4y1J7Dn", },
    { date: "2023-06-29 20:00+08:00", type: "watch", title: "视频推荐回", rec: "BV1Fu411b7Bz", },
    { date: "2023-06-30 20:00+08:00", type: "game", title: "糖豆人", rec: "BV1eg4y1A74k", },
    { date: "2023-07-01 19:00+08:00", type: "sub", title: "续上周梦境之花", rec: "BV1Uk4y1N7TA", },
    { date: "2023-07-02 19:00+08:00", type: "watch", title: "岁月史书", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-07/20230702-1903%20-%20%E3%80%90%E7%95%AA%E5%89%A7%E3%80%91%E5%B2%81%E6%9C%88%E5%B8%88%E5%8F%94%EF%BC%81%EF%BC%81%EF%BC%81%EF%BC%81%EF%BC%81%EF%BC%81_(1).mp4", fans_rec: true, },
  ] },

  { year: 2023, week: 25, bilibili_url: "809247988354383894", events: [
    { date: "2023-06-19 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-06-20 20:00+08:00", type: "game", title: "奶绿审判者", rec: "BV1Sh4y1u7a8", },
    { date: "2023-06-21 20:00+08:00", type: "watch", title: "刷B！", rec: "BV1Nm4y1e7fb", },
    { date: "2023-06-22 20:00+08:00", type: "game", title: "NO 爱丽丝 BUT 吉尔", rec: "BV1ds4y1k7ae", },
    { date: "2023-06-23 12:00+08:00", type: "sub", title: "煲海龟汤了", rec: "BV1ga4y1A777", },
    { date: "2023-06-24 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV12W4y1D7FT", },
    { date: "2023-06-25 19:00+08:00", type: "rest", title: "", rec: "", },
  ] },

  { year: 2023, week: 24, bilibili_url: "806642313546694690", events: [
    { date: "2023-06-12 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-06-13 20:00+08:00", type: "game", title: "审判长奶绿", rec: "BV1so4y17723", },
    { date: "2023-06-14 20:00+08:00", type: "watch", title: "视频推荐回", rec: "BV17s4y1y7uS", },
    { date: "2023-06-15 20:00+08:00", type: "fitness", title: "健身环", rec: "BV1iN41167F2", },
    { date: "2023-06-16 20:00+08:00", type: "watch", title: "老爹来了", rec: "BV15o4y1E7eA", },
    { date: "2023-06-17 19:00+08:00", type: "game", title: "P! V! Z!", rec: "BV1zh4y137Yj", },
    { date: "2023-06-18 19:00+08:00", type: "chat", title: "六播，躺着电台了", rec: "BV1Xm4y1Y7rz", },
  ] },

  { year: 2023, week: 23, bilibili_url: "804038841568591876", events: [
    { date: "2023-06-05 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-06-06 23:00+08:00", type: "chat", title: "午夜电台", rec: "BV1h8411Z7ds", },
    { date: "2023-06-07 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-06-08 20:00+08:00", type: "game", title: "审判的奶绿", rec: "BV1WM4y1Y7o5", },
    { date: "2023-06-09 20:00+08:00", type: "watch", title: "乌鸦坐飞机！", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-06/20230609-2000%20-%20%E5%80%98%E4%BD%BF%E6%88%91%E4%BD%BF%E5%87%BA%E4%B9%8C%E9%B8%A6%E5%9D%90%E9%A3%9E%E6%9C%BA%EF%BC%8C%E4%BD%A0%E8%AF%A5%E5%A6%82%E4%BD%95%E5%BA%94%E5%AF%B9%E2%80%9B%EF%BC%9F_(1).mp4", fans_rec: true, },
    { date: "2023-06-10 19:00+08:00", type: "sub", title: "梦境之花", rec: "", cancelled: true, reason: 'https://t.bilibili.com/805526150332809217' },
    { date: "2023-06-11 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1Ku4y1o7Fn", },
  ] },

  { year: 2023, week: 22, bilibili_url: "801472186534592549", events: [
    { date: "2023-05-29 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-05-30 20:00+08:00", type: "watch", title: "翻翻邮箱的视频推荐", rec: "BV1No4y137FM", },
    { date: "2023-05-31 20:00+08:00", type: "game", title: "审判の奶绿", rec: "BV1um4y1t7hh", },
    { date: "2023-06-01 19:00+08:00", type: "chat", title: "六一快乐", rec: "BV1L14y1D7Tc", },
    { date: "2023-06-02 20:00+08:00", type: "sub", title: "翻翻邮箱里的歌回", rec: "BV1Ec411V7Q4", },
    { date: "2023-06-03 19:00+08:00", type: "game", title: "好久不糖了", rec: "BV1QM4y1e79J", },
    { date: "2023-06-04 19:00+08:00", type: "rest", title: "", rec: "", },
  ] },

  { year: 2023, week: 21, bilibili_url: "798865622407577602", events: [
    { date: "2023-05-22 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-05-23 20:00+08:00", type: "game", title: "填坑之古剑三", rec: "BV1ps4y1q7XW", },
    { date: "2023-05-24 20:00+08:00", type: "watch", title: "推荐点好康的", rec: "BV1Xh4y1o7ip", },
    { date: "2023-05-25 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-05-26 20:00+08:00", type: "watch", title: "观赏夺命鲨鱼头", rec: "BV13s4y1T7Kz", },
    { date: "2023-05-27 19:00+08:00", type: "sub", title: "鉴赏型歌会", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-05/20230527-1901%20-%20%E3%80%90%E9%89%B4%E8%B5%8F%E5%9E%8B%E6%AD%8C%E5%9B%9E%E3%80%91%E8%BF%99%E9%83%BD%E5%94%B1%E7%9A%84%E6%98%AF%E4%B8%AA%E5%95%A5%E2%80%9B%EF%BC%9F%EF%BC%81.mp4", fans_rec: true, },
    { date: "2023-05-28 19:00+08:00", type: "game", title: "填坑之塞一下", rec: "BV15L411q7HT", },
  ] },

  { year: 2023, week: 20, bilibili_url: "796256421194760215", events: [
    { date: "2023-05-15 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-05-16 20:00+08:00", type: "game", title: "塞尔达哒哒哒", rec: "BV1XM4y1i7tt", },
    { date: "2023-05-17 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-05-18 20:00+08:00", type: "watch", title: "陪你度过漫长季节", rec: "BV1dc411w7iG", },
    { date: "2023-05-19 20:00+08:00", type: "game", title: "今天女儿要长大", rec: "BV1Rk4y1L7Jo", },
    { date: "2023-05-20 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1fu411x79e", },
    { date: "2023-05-21 19:00+08:00", type: "game", title: "为什么追我", rec: "BV1hh4y1x73q", },
  ] },

  { year: 2023, week: 19, bilibili_url: "794060241198121048", events: [
    { date: "2023-05-08 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-05-09 20:00+08:00", type: "radio", title: "晚间电台", rec: "BV1MT41187hY", },
    { date: "2023-05-10 20:00+08:00", type: "watch", title: "安静观赏视频回", rec: "BV17T411t7Jq", },
    { date: "2023-05-11 20:00+08:00", type: "game", title: "想玩古剑三了", rec: "BV1Tu411t7ac", },
    { date: "2023-05-12 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-05-13 19:00+08:00", type: "sub", title: "来人，上海龟汤", rec: "BV1Ho4y157hL", },
    { date: "2023-05-14 19:00+08:00", type: "game", title: "我女儿长大了", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-05/20230514-1858%20-%20%E3%80%90%E6%B5%B7%E9%BE%9F%E6%B1%A4%E3%80%91nth%E6%99%BA%E5%8A%9B%E6%A3%80%E6%B5%8B%E9%AB%98%E8%BE%BE10.mp4", fans_rec: true, },
  ] },

  { year: 2023, week: 18, bilibili_url: "791107494088802336", events: [
    { date: "2023-05-01 20:00+08:00", type: "game", title: "女儿不要被拱了！", rec: "BV13g4y1j7ir", },
    { date: "2023-05-02 20:00+08:00", type: "watch", title: "人类观察记录", rec: "BV1dh4y1E78j", },
    { date: "2023-05-03 20:00+08:00", type: "rest", title: "外出", rec: "", },
    { date: "2023-05-04 10:00+08:00", type: "radio", title: "早班电台", rec: "BV1Vg4y1j7tR", },
    { date: "2023-05-05 20:00+08:00", type: "game", title: "年轻十岁的里昂酱", rec: "BV17h4y1J7y7", },
    { date: "2023-05-06 19:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-05-07 19:00+08:00", type: "sub", title: "粉丝海龟汤不得不品", rec: "", cancelled: true, reason: "https://t.bilibili.com/792893096724529170" },
  ] },

  { year: 2023, week: 17, bilibili_url: "788471685531566132", events: [
    { date: "2023-04-24 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-04-25 20:00+08:00", type: "watch", title: "和大家一起看看", rec: "BV1aa4y1V7zE", },
    { date: "2023-04-26 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-04-27 20:00+08:00", type: "game", title: "养女儿不易", rec: "BV1Go4y1t7X5", },
    { date: "2023-04-28 20:00+08:00", type: "game", title: "暴雨！", rec: "BV1zX4y1m7Xh", },
    { date: "2023-04-29 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1rg4y1L78B", },
    { date: "2023-04-30 19:00+08:00", type: "sing", title: "假日老歌～", rec: "BV1nc411T7wj", },
  ] },

  { year: 2023, week: 16, bilibili_url: "785872409990266883", events: [
    { date: "2023-04-17 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-04-18 20:00+08:00", type: "game", title: "这不是艾什莉吗", rec: "BV1bs4y1d7iY", },
    { date: "2023-04-19 20:00+08:00", type: "game", title: "还是看看里昂吧", rec: "BV1cv4y1E7dV", },
    { date: "2023-04-20 20:00+08:00", type: "watch", title: "看片？怀旧！", rec: "", },
    { date: "2023-04-21 20:00+08:00", type: "fitness", title: "好久不见的健身环", rec: "BV1La4y1V7s6", },
    { date: "2023-04-22 19:00+08:00", type: "sub", title: "棉花糖好吃！", rec: "BV1bm4y1y71C", },
    { date: "2023-04-23 20:00+08:00", type: "game", title: "生化危机", rec: "BV1i14y1f7ha", },
  ] },

  { year: 2023, week: 15, bilibili_url: "783653659975090225", events: [
    { date: "2023-04-10 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-04-11 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-04-12 17:00+08:00", type: "radio", title: "夜间电台", rec: "BV1ya4y1N7DH", },
    { date: "2023-04-13 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV1Ho4y187Cj", },
    { date: "2023-04-14 20:00+08:00", type: "watch", title: "蜻蜓队长前来觐见", rec: "BV1yT411H7Y5", },
    { date: "2023-04-15 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV19V4y1Z7o8", },
    { date: "2023-04-16 19:00+08:00", type: "sub", title: "二创可以，逆天不行", rec: "BV11s4y1P7BJ", },
  ] },

  { year: 2023, week: 14, bilibili_url: "780701196377653272", events: [
    { date: "2023-04-03 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-04-04 20:00+08:00", type: "game", title: "开船", rec: "BV1mg4y1g7aL", },
    { date: "2023-04-05 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-04-06 20:00+08:00", type: "watch", title: "看看小视频", rec: "BV1QX4y1k7Mj", },
    { date: "2023-04-07", type: "radio", title: "温馨电台", rec: "", cancelled: true },
    { date: "2023-04-08 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1Bs4y1N79u", },
    { date: "2023-04-09 19:00+08:00", type: "game", title: "GAME TIME", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-04/20230409-1910%20-%20%E3%80%90%E6%B8%B8%E6%88%8F%E3%80%91%E7%81%AB%E5%8A%9B%E4%B8%8D%E8%B6%B3%E6%98%AF%E6%81%90%E6%83%A7%E7%9A%84%E6%9D%A5%E6%BA%90.mp4", },
  ] },

  { year: 2023, week: 13, bilibili_url: "778449220471357495", events: [
    { date: "2023-03-27 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-03-28 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-03-29 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-03-30 20:00+08:00", type: "chat", title: "我肥来了！（杂谈）", rec: "BV11L411S75z", },
    { date: "2023-03-31 20:00+08:00", type: "game", title: "GAME TIME", rec: "BV1ML411D7fb", },
    { date: "2023-04-01 19:00+08:00", type: "collab", title: "别死好吗", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-04/20230401-1858%20-%20%E3%80%904.1%E6%84%9A%E4%BA%BA%E8%8A%82%E3%80%91%E5%A5%B6%E7%BB%BF%E5%88%AB%E8%B5%B0%EF%BC%81%EF%BC%81%EF%BC%81.mp4", fans_rec: true, },
    { date: "2023-04-02 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1Y84y1M7pN", },
  ] },

  { year: 2023, week: 12, bilibili_url: "775496039585021955", events: [
    { date: "2023-03-20 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-03-21 20:00+08:00", type: "watch", title: "一起看电影", rec: "BV17k4y1b7ts", },
    { date: "2023-03-22 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-03-23 20:00+08:00", type: "watch", title: "可能有突击电台", rec: "BV1324y177Wp", },
    { date: "2023-03-24 20:00+08:00", type: "game", title: "𝑮𝒂𝒎𝒆 𝑻𝒊𝒎𝒆", rec: "BV1QX4y1d7QW", },
    { date: "2023-03-25 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV12v4y1G7zN", },
    { date: "2023-03-26 19:00+08:00", type: "game", title: "上吧 𝒔𝒆𝒌𝒊𝒓𝒐", rec: "BV1S24y177b1", },
  ] },

  { year: 2023, week: 11, bilibili_url: "772875594127900692", events: [
    { date: "2023-03-13 20:00+08:00", type: "sub", title: "梦境之花", rec: "BV1jM4y1r7KA", },
    { date: "2023-03-14 20:00+08:00", type: "watch", title: "学习——白色情人节", rec: "BV1wx4y1K7UZ", },
    { date: "2023-03-15 20:00+08:00", type: "game", title: "养家糊口😭day*n", rec: "BV16X4y1f7Xp", },
    { date: "2023-03-16 20:00+08:00", type: "game", title: "打牌试试", rec: "BV18o4y1z76B", },
    { date: "2023-03-17 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-03-18 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1QM4y1z7Vi", },
    { date: "2023-03-19 19:00+08:00", type: "radio", title: "晚间电台", rec: "BV1yY4y1X7Ex", },
  ] },

  { year: 2023, week: 10, bilibili_url: "770301693280649289", events: [
    { date: "2023-03-06 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-03-07 20:00+08:00", type: "sub", title: "感恩奶糖中心 续", rec: "BV1xx4y1T7tk", },
    { date: "2023-03-08 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-03-09 20:00+08:00", type: "game", title: "𝑮𝒂𝒎𝒆 𝑻𝒊𝒎𝒆", rec: "BV1aP411f7bK", },
    { date: "2023-03-10 20:00+08:00", type: "game", title: "试试森之子林", rec: "BV1R24y1g7Qj", },
    { date: "2023-03-11 19:00+08:00", type: "sub", title: "梦境之花", rec: "", cancelled: true },
    { date: "2023-03-12 19:00+08:00", type: "game", title: "糖豆人技术退化测试", rec: "BV1gX4y1f7UM", },
  ] },

  { year: 2023, week: 9, bilibili_url: "767672726580101203", events: [
    { date: "2023-02-27 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-28 20:00+08:00", type: "sub", title: "没念到的不要丢 箱底捞捞奶糖花", rec: "BV1fY411r736", },
    { date: "2023-03-01 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-03-02 20:00+08:00", type: "game", title: "𝑮𝒂𝒎𝒆 𝑻𝒊𝒎𝒆", rec: "BV1424y137xt", },
    { date: "2023-03-03 20:00+08:00", type: "radio", title: "睡前分享电台", rec: "BV1v84y1K7c4", },
    { date: "2023-03-04 19:00+08:00", type: "special", title: "一个大日子", rec: "BV1wv4y1a7SU", },
    { date: "2023-03-05 19:00+08:00", type: "sub", title: "感恩中心 优秀奶糖花表彰大会", rec: "BV1iY41167Gn", },
  ] },

  { year: 2023, week: 8, bilibili_url: "764753171032571955", events: [
    { date: "2023-02-20 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-21 20:00+08:00", type: "game", title: "潜水员奶绿", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-02/20230221-1954%20-%20%E6%BD%9C%E6%B0%B4%E5%91%98%E5%A5%B6%E5%94%90%E6%B0%8F%EF%BC%81.mp4", fans_rec: true, },
    { date: "2023-02-22 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-23 20:00+08:00", type: "game", title: "艾迪芬奇的记忆", rec: "BV1YY411k7yd", },
    { date: "2023-02-24 20:00+08:00", type: "watch", title: "观影惊魂", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-02/20230224-1955%20-%20%E7%9C%8B%E6%88%91%E7%9C%8B%E8%87%AA%E5%B7%B1%E5%88%87%E7%89%87%E3%80%902%E3%80%91.mp4", fans_rec: true, },
    { date: "2023-02-25 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1hb411X7wq", },
    { date: "2023-02-26 19:00+08:00", type: "sing", title: "和大家一起唱歌", rec: "BV1MM411j7rU", },
  ] },

  { year: 2023, week: 7, bilibili_url: "762870055505494036", events: [
    { date: "2023-02-13 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-14 20:00+08:00", type: "chat", title: "围观小情侣", rec: "BV16T411S7FT", },
    { date: "2023-02-15 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-16 20:00+08:00", type: "game", title: "魔法少女", rec: "BV1tD4y1w7u6", },
    { date: "2023-02-17 20:00+08:00", type: "game", title: "潜水员奶桑", rec: "BV1pT411U71o", },
    { date: "2023-02-18 19:00+08:00", type: "sub", title: "试试棉花糖", rec: "BV1FM411H757", },
    { date: "2023-02-19 19:00+08:00", type: "fitness", title: "健来", rec: "BV1AY411Y71o", },
  ] },

  { year: 2023, week: 6, bilibili_url: "", events: [
    { date: "2023-02-06 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-07 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-08 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-09 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-10 19:00+08:00", type: "chat", title: "播播", rec: "BV1NM411e7A4", },
    { date: "2023-02-11 19:00+08:00", type: "game", title: "游戏", rec: "BV1XG4y1N7Qa", },
    { date: "2023-02-12 19:00+08:00", type: "game", title: "游戏", rec: "BV1XD4y1P7T8", },
  ] },

  { year: 2023, week: 5, bilibili_url: "755443984034168832", events: [
    { date: "2023-01-30 20:00+08:00", type: "sing", title: "新春歌会贰", rec: "BV1Gx4y1E7Aj", },
    { date: "2023-01-31 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-01 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-02 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-03 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-04 19:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-02-05 13:00+08:00", type: "radio", title: "元宵节电台", rec: "BV1SD4y1N7Mj", },
  ] },

  { year: 2023, week: 4, bilibili_url: "755443984034168832", events: [
    { date: "2023-01-23 19:00+08:00", type: "sing", title: "奶绿新春歌会", rec: "BV1FY41197rs", },
    { date: "2023-01-24 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-01-25 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-01-26 20:00+08:00", type: "watch", title: "来点B友爱看", rec: "BV1S841137Ux", },
    { date: "2023-01-27 20:00+08:00", type: "game", title: "新春糖豆人", rec: "BV1rD4y1E7r4", },
    { date: "2023-01-28 19:00+08:00", type: "game", title: "奶绿潜水员", rec: "BV1TM4y197Kx", },
    { date: "2023-01-29 19:00+08:00", type: "sub", title: "新春梦境之花", rec: "BV1H8411G7Fz", },
  ] },

  { year: 2023, week: 3, bilibili_url: "752471918210187281", events: [
    { date: "2023-01-16 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-01-17 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-01-18 20:00+08:00", type: "watch", title: "来点海绵宝宝", rec: "BV1L84y187NT", },
    { date: "2023-01-19 20:00+08:00", type: "game", title: "复健打游戏", rec: "BV1hs4y1t7yz", },
    { date: "2023-01-20 20:00+08:00", type: "sub", title: "看看你的过年小视频", rec: "BV1RG4y1F7LK", },
    { date: "2023-01-21 22:00+08:00", type: "radio", title: "除夕晚间电台", rec: "BV1QY4y1d7Hf", },
    { date: "2023-01-22 20:00+08:00", type: "fitness", title: "春节舞力全开", rec: "BV11T411Z7N7", },
  ] },

  { year: 2023, week: 2, bilibili_url: "749520021548433441", events: [
    { date: "2023-01-09 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-01-10 20:00+08:00", type: "game", title: "复健打游戏", rec: "BV13W4y137M8", },
    { date: "2023-01-11 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-01-12 20:00+08:00", type: "watch", title: "整蛊你和我", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-01/20230112-2004%20-%20%E6%95%B4%E8%9B%8A%E4%B8%93%E5%AE%B6%EF%BC%81.mp4", fans_rec: true, },
    { date: "2023-01-13 20:00+08:00", type: "game", title: "复健打老游戏", rec: "BV1L24y1h7eb", },
    { date: "2023-01-14 19:00+08:00", type: "sub", title: "梦境之花", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-01/20230114-1928%20-%20%E3%80%90%E6%8A%95%E7%A8%BF%E3%80%91%E5%99%A9%E6%A2%A6%E6%9D%A5%E4%B8%B4%E6%97%B6%EF%BC%81.mp4", fans_rec: true },
    { date: "2023-01-15 12:00+08:00", type: "sub", title: "看二创", rec: "BV1QK411r7AD", },
  ] },

  { year: 2023, week: 1, events: [
    { date: "2023-01-02 20:00+08:00", type: "watch", title: "早早早", rec: "BV1DG4y1m7KU", },
    { date: "2023-01-03 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-01-04 20:00+08:00", type: "watch", title: "咳咳咳快好了day1", rec: "BV1xd4y1E7hF", },
    { date: "2023-01-05 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2023-01-06 20:00+08:00", type: "watch", title: "来了来了！！周五好！", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2023-01/20230106-1956%20-%20%E6%9D%A5%E4%BA%86%E6%9D%A5%E4%BA%86%EF%BC%81%EF%BC%81%E5%91%A8%E4%BA%94%E5%A5%BD%EF%BC%81.mp4", fans_rec: true },
    { date: "2023-01-07 19:00+08:00", type: "game", title: "试试阿阿阿尔宙斯！", rec: "BV1sx4y1G7EZ", },
    { date: "2023-01-08 19:00+08:00", type: "watch", title: "哈！", rec: "BV1mR4y117pn", },
  ] },

  { year: 2022, week: 53, events: [
    { date: "2022-12-26 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-27 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-28 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-29 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-30 13:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-31 20:00+08:00", type: "chat", title: "就播一会！！", rec: "BV1QR4y1U7E7", },
    { date: "2023-01-01 19:00+08:00", type: "rest", title: "", rec: "", },
  ] },

  { year: 2022, week: 52, bilibili_url: "742087447498719253", events: [
    { date: "2022-12-19 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-20 20:00+08:00", type: "game", title: "428", rec: "BV1xe4y1L7mC", },
    { date: "2022-12-21 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-22 20:00+08:00", type: "game", title: "阿阿宙斯", rec: "BV1C84y1s7PJ", },
    { date: "2022-12-23 13:00+08:00", type: "chat", title: "突突突突突", rec: "BV1XW4y1N7ev", },
    { date: "2022-12-24 19:00+08:00", type: "chat", title: "平安夜要平安", rec: "BV1SG4y1J7Am", },
    { date: "2022-12-25 19:00+08:00", type: "sub", title: "二创", rec: "", cancelled: true, reason: "身体原因取消：https://t.bilibili.com/743552941865041971" },
  ] },

  { year: 2022, week: 51, bilibili_url: "739472323515514962", events: [
    { date: "2022-12-12 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-13 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-14 20:00+08:00", type: "watch", title: "看看三体", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2022-12/20221214-2018%20-%20%E4%BD%8E%E8%B0%83%E9%9D%A2%E5%A3%81.mp4", fans_rec: true, },
    { date: "2022-12-15 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-16 20:00+08:00", type: "game", title: "有鬼大侠饶命", rec: "", cancelled: true, reason: "身体原因取消：https://t.bilibili.com/740233984420610119" },
    { date: "2022-12-17 19:00+08:00", type: "game", title: "试试以前的宝", rec: "BV1M84y147qF", },
    { date: "2022-12-18 19:00+08:00", type: "game", title: "生命在于跳舞🕺", rec: "BV1De4y1K7K5", },
  ] },

  { year: 2022, week: 50, bilibili_url: "736911019749670928", events: [
    { date: "2022-12-05 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-06 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-07 20:00+08:00", type: "radio", title: "电台", rec: "BV1VP4y1Q7GP", },
    { date: "2022-12-08 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-09 20:00+08:00", type: "game", title: "来宝宝！", rec: "BV1nM411z7sV", },
    { date: "2022-12-10 19:00+08:00", type: "chat", title: "画伯的艺术创想", rec: "BV1y8411V7Vd", },
    { date: "2022-12-11 19:00+08:00", type: "sub", title: "梦境之花！", rec: "BV1544y1U77k", },
  ] },

  { year: 2022, week: 49, bilibili_url: "733887032062902274", events: [
    { date: "2022-11-28 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-11-29 20:00+08:00", type: "game", title: "宝可梦闪光作战", rec: "BV1jG411u7RG", },
    { date: "2022-11-30 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-12-01 20:00+08:00", type: "watch", title: "欧雷瓦刚大木哒", rec: "BV1ng411H7Gw", },
    { date: "2022-12-02 20:00+08:00", type: "sing", title: "大家一起唱歌", rec: "BV1xP4y197HZ", },
    { date: "2022-12-03 19:00+08:00", type: "game", title: "世界游戏大全", rec: "BV1V841157Za", },
    { date: "2022-12-04 19:00+08:00", type: "game", title: "唐逗人", rec: "BV1i84y167ks", },
  ] },

  { year: 2022, week: 48, bilibili_url: "731207573751988229", events: [
    { date: "2022-11-21 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-11-22 20:00+08:00", type: "game", title: "宝可梦奶绿", rec: "BV1NP4y1R7wv", },
    { date: "2022-11-23 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-11-24 20:00+08:00", type: "chat", title: "花店休憩时光", rec: "BV1bG4y1573s", },
    { date: "2022-11-25 20:00+08:00", type: "game", title: "打工破案后续", rec: "BV11P4y1R75F", },
    { date: "2022-11-26 19:00+08:00", type: "sub", title: "夜晚的花说梦话", rec: "BV14G4y1d7qm", },
    { date: "2022-11-27 19:00+08:00", type: "sing", title: "一起唱歌", rec: "BV1VM411k7fh", },
  ] },

  { year: 2022, week: 47, bilibili_url: "728424795719335953", events: [
    { date: "2022-11-14 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-11-15 20:00+08:00", type: "game", title: "涉谷大作战", rec: "BV1B24y1y7qm", },
    { date: "2022-11-16 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-11-17 20:00+08:00", type: "watch", title: "使徒来袭", rec: "BV1JK411Z7Jk", },
    { date: "2022-11-18 20:00+08:00", type: "game", title: "大作战白热化", rec: "BV1xG4y147wr", },
    { date: "2022-11-19 19:00+08:00", type: "sub", title: "梦境哔哔哔", rec: "BV1mM411C7C7", },
    { date: "2022-11-20 19:00+08:00", type: "game", title: "童年小游戏", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2022-11/20221120-1856%20-%20%E5%B0%8F%E6%97%B6%E5%80%99%E7%AB%9F%E7%84%B6%E7%8E%A9%E8%BF%87%E8%BF%99%E4%B8%AA%EF%BC%81.mp4", fans_rec: true, },
  ] },

  { year: 2022, week: 46, bilibili_url: "726112071794556960", events: [
    { date: "2022-11-07 20:00+08:00", type: "chat", title: "哈！活！", rec: "BV1iP4y127Cn", },
    { date: "2022-11-08 20:00+08:00", type: "game", title: "游戏", rec: "BV1ed4y1r7Jn", },
    { date: "2022-11-09 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-11-10 20:00+08:00", type: "chat", title: "主题杂谈", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2022-11/20221110-1955%20-%20%E3%80%90%E6%9D%82%E8%B0%88%E3%80%91%E4%B9%B0%E4%B8%9C%E8%A5%BF%E8%A6%81%E8%BF%BD%E6%B1%82%E6%80%A7%E4%BB%B7%E6%AF%94~.mp4", fans_rec: true, },
    { date: "2022-11-11 21:00+08:00", type: "collab", title: "🌟联动🌟", rec: "BV1VG4y1o7NY", },
    { date: "2022-11-12 19:00+08:00", type: "sub", title: "看看二创", rec: "BV14d4y1k7WW", },
    { date: "2022-11-13 19:00+08:00", type: "sing", title: "唱歌", rec: "BV1St4y1P7as", },
  ] },

  { year: 2022, week: 45, bilibili_url: "723182113833091079", events: [
    { date: "2022-10-31 20:00+08:00", type: "chat", title: "万圣节海龟汤", rec: "BV1CV4y1g7QS", },
    { date: "2022-11-01 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-11-02 20:00+08:00", type: "chat", title: "花店杂谈时光", rec: "BV1AW4y177sZ", },
    { date: "2022-11-03 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-11-04 20:00+08:00", type: "game", title: "童年小游戏", rec: "BV1KG4y187o3", },
    { date: "2022-11-05 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1Bg411B7FW", },
    { date: "2022-11-06 19:00+08:00", type: "sing", title: "歌", rec: "", cancelled: true, reason: "个人原因，时间调整为下周" },
  ] },

  { year: 2022, week: 44, bilibili_url: "720578423045488648", events: [
    { date: "2022-10-24 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-10-25 20:00+08:00", type: "watch", title: "视频鉴赏回", rec: "BV1Bd4y1y7KR", },
    { date: "2022-10-26 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-10-27 20:00+08:00", type: "radio", title: "花店晚间电台", rec: "BV11e4y127oG", },
    { date: "2022-10-28 20:00+08:00", type: "collab", title: "外出作客", rec: "BV16R4y1Q7k8", fans_rec: true },
    { date: "2022-10-29 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1V14y1L7Lf", },
    { date: "2022-10-30 19:00+08:00", type: "game", title: "唐逗人大作战", rec: "BV1ut4y1M7bR", },
  ] },

  { year: 2022, week: 43, bilibili_url: "716599380672512000", events: [
    { date: "2022-10-17 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-10-18 20:00+08:00", type: "chat", title: "休憩杂谈", rec: "BV1rt4y1M7ES", },
    { date: "2022-10-19 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-10-20 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-10-21 20:00+08:00", type: "game", title: "恐怖游戏", rec: "BV1Cg41187GX", },
    { date: "2022-10-22 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1a8411e7zw", },
    { date: "2022-10-23 19:00+08:00", type: "fitness", title: "健身环", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2022-10/20221023-1907%20-%20%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF%E7%9A%84%E7%9B%B4%E6%92%AD%E9%97%B4.mp4", fans_rec: true, },
  ] },

  { year: 2022, week: 42, bilibili_url: "716599380672512000", events: [
    { date: "2022-10-10 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-10-11 20:00+08:00", type: "chat", title: "⚠大家注意降温！", rec: "BV1Qg411Y7tZ", },
    { date: "2022-10-12 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-10-13 20:00+08:00", type: "game", title: "【游戏】我免费了！！！", rec: "BV1GW4y1J7eK", },
    { date: "2022-10-14 20:00+08:00", type: "chat", title: "装扮发售", rec: "BV1AN4y1w7Rr", },
    { date: "2022-10-15 19:00+08:00", type: "sub", title: "二创鉴赏（改为梦境之花）", rec: "BV1Kt4y1F74S", },
    { date: "2022-10-16 19:00+08:00", type: "sub", title: "梦境之花", rec: "", cancelled: true },
  ] },

  { year: 2022, week: 41, bilibili_url: "712494856508801060", events: [
    { date: "2022-10-03 20:00+08:00", type: "chat", title: "花店休憩杂谈", rec: "BV1se4y1J7b8", },
    { date: "2022-10-04 20:00+08:00", type: "sing", title: "合唱歌回", rec: "BV1hG4y1W7XX", },
    { date: "2022-10-05 20:00+08:00", type: "game", title: "唐逗人", rec: "", cancelled: true },
    { date: "2022-10-06 20:00+08:00", type: "game", title: "唐逗人（睡）", rec: "BV1Ld4y1i7Rn", },
    { date: "2022-10-07 20:00+08:00", type: "rest", title: "眠", rec: "", },
    { date: "2022-10-08 19:00+08:00", type: "sub", title: "梦境之花", rec: "BV1Qe4y1U7Jp", },
    { date: "2022-10-09 19:00+08:00", type: "game", title: "游戏时光", rec: "BV1MV4y1L7zc", },
  ] },

  { year: 2022, week: 40, bilibili_url: "709083999641796740", events: [
    { date: "2022-09-26 20:00+08:00", type: "chat", title: "随心畅谈", rec: "BV1aN4y1K7px", },
    { date: "2022-09-27 20:00+08:00", type: "rest", title: "困", rec: "", },
    { date: "2022-09-28 20:00+08:00", type: "game", title: "夜之城一日游", rec: "BV12P411n7q6", },
    { date: "2022-09-29 20:00+08:00", type: "rest", title: "困", rec: "", },
    { date: "2022-09-30 20:00+08:00", type: "fitness", title: "强身健体健身环", rec: "BV1yV4y1N7Yv", },
    { date: "2022-10-01 19:00+08:00", type: "sub", title: "梦境之花主题杂谈", rec: "BV1NV4y1K7vL", },
    { date: "2022-10-02 19:00+08:00", type: "game", title: "底特律便乘人", rec: "BV1dB4y1L78J", },
  ] },

  { year: 2022, week: 39, bilibili_url: "", events: [
    { date: "2022-09-19 19:00+08:00", type: "chat", title: "哈！！来辣！", rec: "BV13W4y1q7gm", },
    { date: "2022-09-20 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-09-21 20:00+08:00", type: "game", title: "先聊天！再游戏！", rec: "BV1RD4y1i7he", },
    { date: "2022-09-22 20:00+08:00", type: "rest", title: "", rec: "", },
    // { date: "2022-09-23 20:00+08:00", type: "video-collab" "title: "【申放送】第1期特别篇-最强工具人的诞生", rec: "BV1iG4y1s75s", },
    { date: "2022-09-23 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-09-24 19:00+08:00", type: "sub", title: "花店营业试运行中……", rec: "BV13V4y1T7h2", },
    { date: "2022-09-25 19:00+08:00", type: "watch", title: "和店长一起度过周末！", rec: "https://rec.laplace.live/%E6%98%8E%E5%89%8D%E5%A5%B6%E7%BB%BF/2022-09/20220925-1857%20-%20%E5%92%8C%E5%BA%97%E9%95%BF%E4%B8%80%E8%B5%B7%E5%BA%A6%E8%BF%87%E5%91%A8%E6%9C%AB%EF%BC%81.mp4", fans_rec: true, },
  ] },

  { year: 2022, week: 38, bilibili_url: "", events: [
    { date: "2022-09-12 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-09-13 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-09-14 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-09-15 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-09-16 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-09-17 19:00+08:00", type: "special", title: "第第第一次见面！请多关照！", rec: "BV1ke4y1k7TJ", },
    { date: "2022-09-18 19:00+08:00", type: "rest", title: "", rec: "", },
  ] },

  { year: 2022, week: 36, bilibili_url: "", events: [
    { date: "2022-08-22 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-08-23 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-08-24 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-08-25 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-08-26 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-08-27 19:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-08-28 19:00+08:00", type: "game", title: "我也要开学了！！！", rec: "BV11t4y1E7Ze", },
  ] },

  { year: 2022, week: 33, bilibili_url: "", events: [
    { date: "2022-08-01 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-08-02 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-08-03 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-08-04 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-08-05 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-08-06 19:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-08-07 19:00+08:00", type: "game", title: "大表哥我来啦！！！", rec: "BV12N4y157yj", },
  ] },

  { year: 2022, week: 31, bilibili_url: "", events: [
    { date: "2022-07-18 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-07-19 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-07-20 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-07-21 20:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-07-22 19:05+08:00", type: "video", title: "『最长的电影』我们的开始，是很长的电影~", rec: "BV1rG411n7qp", },
    { date: "2022-07-23 19:00+08:00", type: "rest", title: "", rec: "", },
    { date: "2022-07-24 21:00+08:00", type: "game", title: "我 是 猫（确信", rec: "BV1ma411U7FM", },
  ] },
];
