type IconProps = {
  className?: string
}

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
    </svg>
  )
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5v4.75l3.25 2" />
    </svg>
  )
}

export function IconWhatsapp({ className }: IconProps) {
  return (
    <svg {...base} className={className} strokeWidth={1.5}>
      <path d="M6.2 17.8 4.75 21.5l3.86-1.4A8.7 8.7 0 0 0 12.6 21c4.75 0 8.6-3.75 8.6-8.4S17.35 4.2 12.6 4.2 4 7.95 4 12.6c0 1.65.48 3.19 1.31 4.5Z" />
      <path d="M9.3 9.6c.2-.5.4-.5.6-.5h.4c.15 0 .35 0 .5.4.2.5.65 1.65.7 1.78.05.13.09.28 0 .45-.09.17-.13.28-.26.43-.13.15-.28.34-.4.46-.13.13-.27.27-.12.53.15.26.68 1.15 1.47 1.87 1.01.92 1.86 1.2 2.13 1.34.27.13.43.11.59-.07.16-.18.68-.8.86-1.07.18-.27.36-.23.6-.14.25.09 1.57.75 1.84.88.27.13.45.2.51.31.07.11.07.63-.15 1.24-.22.6-1.28 1.18-1.77 1.22-.47.05-1.06.07-1.72-.11-.4-.11-.91-.29-1.57-.57-2.76-1.19-4.56-3.98-4.7-4.17-.14-.19-1.12-1.49-1.12-2.84 0-1.35.7-2.01.95-2.28Z" />
    </svg>
  )
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.3 4.5h2.9l1.4 3.9-1.9 1.6a11.7 11.7 0 0 0 5.4 5.4l1.6-1.9 3.9 1.4v2.9c0 .9-.75 1.6-1.65 1.53C10.9 18.85 5.15 13.1 4.77 5.15A1.5 1.5 0 0 1 6.3 4.5Z" />
    </svg>
  )
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4.5 6.8 7.5 6 7.5-6" />
    </svg>
  )
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s6.5-6.02 6.5-11A6.5 6.5 0 0 0 5.5 10c0 4.98 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </svg>
  )
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconChevronLeft({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M15 6 9 12l6 6" />
    </svg>
  )
}

export function IconChevronRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}

export function IconExternal({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 14v4.5a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 18.5V6.5A1.5 1.5 0 0 1 6.5 5H11" />
    </svg>
  )
}
