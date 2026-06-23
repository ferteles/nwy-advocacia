import svgPaths from "../../../imports/svg-ttosx3q9hh";

interface LogoProps {
  color?: string;
  className?: string;
}

export function Logo({ color = "#33363B", className = "" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 99 61" fill="none">
      <g clipPath="url(#logoClip)">
        <g>
          <path d={svgPaths.p20d3ee80} fill={color} />
          <path d={svgPaths.p1f763f00} fill={color} />
          <path d={svgPaths.p1bfcac00} fill={color} />
          <path d={svgPaths.pe80f900} fill={color} />
          <path d={svgPaths.p23583a00} fill={color} />
          <path d={svgPaths.p2df23480} fill={color} />
          <g>
            <path d={svgPaths.p16c29c00} fill={color} />
            <path d={svgPaths.pde9d880} fill={color} />
          </g>
        </g>
        <path d={svgPaths.p32dc8b00} fill={color} />
        <path d={svgPaths.p1334c400} fill={color} />
        <g>
          <path d={svgPaths.p34c0a400} fill={color} />
          <path d={svgPaths.p16ca0600} fill={color} />
          <path d={svgPaths.p2e29b200} fill={color} />
          <path d={svgPaths.p1458bd80} fill={color} />
          <path d={svgPaths.p304f1f40} fill={color} />
          <path d={svgPaths.p7a28a00} fill={color} />
          <path d={svgPaths.pbe70800} fill={color} />
          <path d={svgPaths.p4add570} fill={color} />
          <path d={svgPaths.p21727000} fill={color} />
        </g>
      </g>
      <defs>
        <clipPath id="logoClip">
          <rect width="99" height="61" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
