import { useEffect, useRef, useState } from 'react'

/* Where the films and prints were made, as one drawing. A dot-matrix
   map cropped to the band of the world actually crossed — 130°W to
   152°E, 16°S to 62°N — which is what keeps it under 300px tall. The
   land is a separate SVG (6,652 dots sampled from Natural Earth
   coastlines at 1.25°, 18 KB gzipped) drawn in as an <image>, so the
   page carries only the routes and labels inline.

   The route draws itself when the map arrives, home first, in the
   order the trips were taken as one loop: home → Japan → Thailand →
   Bali → Singapore → Mexico City → home. Each stop pulses once as the
   line reaches it. All coordinates are equirectangular, 5px per degree
   from the crop's top-left. */

/* The trip in the order it was taken. The four Japanese cities sit
   within 25 units of each other at this scale, so their legs are a
   quarter-second each — the pace is what tells you they were four
   stops in one country rather than one dot. */
const legs = [
  /* Tracy → Tokyo */ { d: 'M42.9 121.3Q695.6 -160.7 1348.3 131.6', t: '2.0s', delay: '0.2s' },
  /* Tokyo → Osaka */ { d: 'M1348.3 131.6Q1337.9 123.4 1327.5 136.5', t: '0.25s', delay: '2.2s' },
  /* Osaka → Kyoto */ { d: 'M1327.5 136.5Q1328.2 134.7 1328.8 134.9', t: '0.2s', delay: '2.45s' },
  /* Kyoto → Narita */ { d: 'M1328.8 134.9Q1340.2 121.5 1351.6 131.1', t: '0.25s', delay: '2.65s' },
  /* Narita → Bangkok */ { d: 'M1351.6 131.1Q1252.1 136.1 1152.5 241.2', t: '0.9s', delay: '3.0s' },
  /* Bangkok → Bali */ { d: 'M1152.5 241.2Q1189.3 267.7 1226.1 353.2', t: '0.6s', delay: '3.9s' },
  /* Bali → Singapore */ { d: 'M1226.1 353.2Q1197.6 311.6 1169.1 303.2', t: '0.5s', delay: '4.5s' },
  /* Singapore → Mexico City */ { d: 'M1169.1 303.2Q661.7 33.9 154.3 212.8', t: '2.0s', delay: '5.1s' },
  /* Mexico City → Tracy */ { d: 'M154.3 212.8Q98.6 135.3 42.9 121.3', t: '0.7s', delay: '7.1s' },
]

/* Rings mark arriving somewhere new. The three cities inside Japan get
   a dot but no ring — four pulses inside 25 units is a smudge, not a
   signal. */
const stops = [
  { x: 1348.3, y: 131.6, r: 3.2, ring: '2.2s' },
  { x: 1327.5, y: 136.5, r: 2.3 },
  { x: 1328.8, y: 134.9, r: 2.3 },
  { x: 1351.6, y: 131.1, r: 2.3 },
  { x: 1152.5, y: 241.2, r: 3.2, ring: '3.9s' },
  { x: 1226.1, y: 353.2, r: 3.2, ring: '4.5s' },
  { x: 1169.1, y: 303.2, r: 3.2, ring: '5.0s' },
  { x: 154.3, y: 212.8, r: 3.2, ring: '7.1s' },
]

export default function RouteMap() {
  const ref = useRef<HTMLElement>(null)
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <figure ref={ref} className={`route-map${drawn ? ' is-drawn' : ''}`}>
      <svg
        viewBox="0 -44 1410 440"
        role="img"
        aria-label="Route map: from Tracy, California to Japan, Thailand, Bali, Singapore and Mexico City, and home"
      >
        <image href="/images/route-dots.svg" x="0" y="0" width="1410" height="390" />

        {legs.map((leg) => (
          <path
            key={leg.d}
            className="route-map-leg"
            pathLength={1}
            d={leg.d}
            style={{ '--t': leg.t, '--d': leg.delay } as React.CSSProperties}
          />
        ))}

        {/* Home — hollow, so it reads as the origin rather than a stop.
            The loop closes here, so its ring fires last. */}
        <circle className="route-map-ring" cx="42.9" cy="121.3" r="9" style={{ '--d': '7.8s' } as React.CSSProperties} />
        <circle className="route-map-home" cx="42.9" cy="121.3" r="4.2" />
        <text className="route-map-label route-map-label-keep" x="56" y="116">Tracy · Home</text>
        <text className="route-map-year" x="56" y="130">Yosemite, two degrees east</text>
        <circle className="route-map-stop" cx="64.2" cy="146.4" r="2.4" />
        <text className="route-map-label" x="72" y="150">San Diego · now</text>

        {stops.map((s) => (
          <g key={`${s.x}-${s.y}`}>
            {s.ring && (
              <circle
                className="route-map-ring"
                cx={s.x}
                cy={s.y}
                r="9"
                style={{ '--d': s.ring } as React.CSSProperties}
              />
            )}
            <circle className="route-map-stop" cx={s.x} cy={s.y} r={s.r} />
          </g>
        ))}

        {/* The four Japanese stops are one cluster on the page, so the
            country takes the label and the cities run underneath it. */}
        <text className="route-map-label route-map-label-keep" x="1405" y="188" textAnchor="end">Japan</text>
        <text className="route-map-year" x="1405" y="203" textAnchor="end">Tokyo · Osaka · Kyoto · Narita · 2025</text>
        <text className="route-map-label route-map-label-keep" x="1078" y="236" textAnchor="end">Bangkok</text>
        <text className="route-map-year" x="1078" y="250" textAnchor="end">2025</text>
        <text className="route-map-label" x="1238" y="358">Bali</text>
        <text className="route-map-label" x="1140" y="322" textAnchor="end">Singapore</text>
        <text className="route-map-label" x="164" y="224">Mexico City</text>
        <text className="route-map-year" x="164" y="238">2024</text>
      </svg>
    </figure>
  )
}
