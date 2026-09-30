type UnitShape =
  | "architecture-studio"
  | "creative"
  | "urban-lab"
  | "development"
  | "foundation"
  | "ventures";

const shapes: UnitShape[] = [
  "architecture-studio",
  "creative",
  "urban-lab",
  "development",
  "foundation",
  "ventures",
];

function Unit({ shape, color }: { shape: UnitShape; color: string }) {
  switch (shape) {
    case "architecture-studio":
      return (
        <>
          <rect x="1.5" y="1.5" width="21" height="21" fill="none" stroke={color} strokeWidth="3" />
          <rect x="9" y="9" width="6" height="6" fill={color} />
        </>
      );
    case "creative":
      return <circle cx="12" cy="12" r="10.5" fill={color} />;
    case "urban-lab":
      return <path d="M12 1.5 L22.5 22.5 H1.5 Z" fill={color} />;
    case "development":
      return (
        <>
          <rect x="1.5" y="1.5" width="21" height="21" fill="none" stroke={color} strokeWidth="3" />
          <path d="M4.5 19.5 L19.5 4.5 V19.5 Z" fill={color} />
        </>
      );
    case "foundation":
      return (
        <>
          <rect x="1.5" y="1.5" width="21" height="21" fill={color} />
          <rect x="8" y="8" width="8" height="8" fill="#F8F5F0" />
        </>
      );
    case "ventures":
      return <path d="M1.5 22.5 V1.5 A21 21 0 0 1 22.5 22.5 Z" fill={color} />;
  }
}

export default function Motif({
  entity,
  color,
  unitSize = 20,
  gap = 5,
  className,
}: {
  entity?: UnitShape;
  color?: string;
  unitSize?: number;
  gap?: number;
  className?: string;
}) {
  const palette: Record<UnitShape, string> = {
    "architecture-studio": "#2E9B52",
    creative: "#079A9A",
    "urban-lab": "#F4C20D",
    development: "#D83B45",
    foundation: "#1769AA",
    ventures: "#F47A22",
  };

  const list = entity ? [entity] : shapes;
  const cols = entity ? 1 : 2;
  const rows = Math.ceil(list.length / cols);
  const w = cols * unitSize + (cols - 1) * gap;
  const h = rows * unitSize + (rows - 1) * gap;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      className={className}
      role="img"
      aria-label={entity ? "Entity motif" : "Musabi Incorporated parent motif"}
    >
      {list.map((shape, i) => {
        const x = (i % cols) * (unitSize + gap);
        const y = Math.floor(i / cols) * (unitSize + gap);
        const c = color ?? palette[shape];
        return (
          <g key={shape} transform={`translate(${x} ${y})`}>
            <Unit shape={shape} color={c} />
          </g>
        );
      })}
    </svg>
  );
}
