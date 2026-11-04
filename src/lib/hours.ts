// Service times in Melbourne local time. They match the "Hours of Operation"
// block in src/components/sections/Reservations.tsx: change both together.
// Days: 0 = Sunday ... 6 = Saturday. Times are minutes after midnight.
interface Service {
  name: string
  days: number[]
  start: number
  end: number
}

const SERVICES: Service[] = [
  { name: 'Lunch', days: [3, 4, 5], start: 11 * 60 + 30, end: 14 * 60 + 30 },
  { name: 'Dinner', days: [2, 3, 4, 5, 6], start: 17 * 60 + 30, end: 23 * 60 },
  { name: 'Brunch', days: [0], start: 10 * 60, end: 15 * 60 },
]

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const SHORT_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function melbourneNow(now: Date): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Melbourne',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(now)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  return {
    day: SHORT_DAYS.indexOf(get('weekday')),
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
  }
}

function formatTime(minutes: number): string {
  const h24 = Math.floor(minutes / 60)
  const mm = String(minutes % 60).padStart(2, '0')
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12
  return `${h12}:${mm}${h24 < 12 ? 'am' : 'pm'}`
}

export function ovenStatus(now: Date): string {
  const { day, minutes } = melbourneNow(now)

  const current = SERVICES.find((s) => s.days.includes(day) && minutes >= s.start && minutes < s.end)
  if (current) {
    return `The oven is lit. ${current.name} runs until ${formatTime(current.end)}.`
  }

  for (let offset = 0; offset <= 7; offset++) {
    const d = (day + offset) % 7
    const next = SERVICES.filter((s) => s.days.includes(d) && (offset > 0 || s.start > minutes)).sort(
      (a, b) => a.start - b.start,
    )[0]
    if (next) {
      const when = offset === 0 ? 'today' : offset === 1 ? 'tomorrow' : DAY_NAMES[d]
      return `The oven is resting. ${next.name} starts at ${formatTime(next.start)} ${when}.`
    }
  }
  return ''
}
