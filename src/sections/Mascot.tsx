/**
 * The brand mark come alive: the check-in-square logo as a small advisor who
 * stamps each requirement CUMPLE. Motion is driven by Matrix; this only draws.
 * Rig: `.mascot-arm` pivots at the shoulder (92 80), `.mascot-body` squashes
 * from the feet, `.mascot-pupils` shift to look around, `.mascot-ink` flashes on impact.
 */
export function Mascot() {
  return (
    <svg className="mascot" viewBox="0 0 140 130" aria-hidden="true">
      <ellipse className="mascot-shadow" cx="60" cy="127" rx="34" ry="3" />

      <g className="mascot-ink">
        <path d="M97 124h-7M131 124h7M103 112l-4-5M125 112l4-5" />
      </g>

      <g className="mascot-legs">
        <path d="M44 110v13M74 110v13" />
        <ellipse cx="41" cy="125" rx="7" ry="3.5" />
        <ellipse cx="77" cy="125" rx="7" ry="3.5" />
      </g>

      <g className="mascot-body">
        <path className="mascot-arm-rest" d="M24 80c-9 4-13 11-12 18" />
        <circle className="mascot-hand" cx="12" cy="99" r="4" />

        <rect className="mascot-torso" x="24" y="40" width="70" height="72" rx="15" />
        <circle className="mascot-cheek" cx="35" cy="84" r="5" />
        <circle className="mascot-cheek" cx="83" cy="84" r="5" />

        <g className="mascot-eyes">
          <path className="mascot-brow" d="M40 56q4.5-4.5 9 0M69 56q4.5-4.5 9 0" />
          <g className="mascot-lids">
            <ellipse className="mascot-eye" cx="45" cy="66" rx="5" ry="6.5" />
            <ellipse className="mascot-eye" cx="73" cy="66" rx="5" ry="6.5" />
          </g>
          <g className="mascot-pupils">
            <circle cx="46.5" cy="64" r="1.8" />
            <circle cx="74.5" cy="64" r="1.8" />
          </g>
        </g>

        <path className="mascot-smile" d="M42 86l10 9 22-20" />
      </g>

      <g className="mascot-arm">
        <path className="mascot-arm-line" d="M92 80c9 6 15 13 18 21" />
        <rect className="mascot-stamp-neck" x="111" y="103" width="6" height="12" rx="1.5" />
        <circle className="mascot-stamp-knob" cx="114" cy="101" r="6" />
        <rect className="mascot-stamp-base" x="101" y="114" width="26" height="9" rx="2" />
        <circle className="mascot-hand" cx="110" cy="103" r="4" />
      </g>
    </svg>
  )
}
