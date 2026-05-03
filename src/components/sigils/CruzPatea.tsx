import type { SVGProps } from "react";

export function CruzPatea(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 4 L20 12 L28 12 L22 16 L28 20 L20 20 L16 28 L12 20 L4 20 L10 16 L4 12 L12 12 Z" />
    </svg>
  );
}
