type P = { size?: number };
const base = (size: number) => ({ width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true });

export const ArrowRight = ({ size = 16 }: P) => <svg {...base(size)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const ArrowUpRight = ({ size = 12 }: P) => <svg {...base(size)}><path d="M7 17 17 7M8 7h9v9" /></svg>;
export const External = ({ size = 15 }: P) => <svg {...base(size)}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>;
export const ThumbsUp = ({ size = 16 }: P) => <svg {...base(size)}><path d="M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3Zm0 0 4-7a2.5 2.5 0 0 1 2.5 2.5V9h5.2a2 2 0 0 1 2 2.3l-1.3 8A2 2 0 0 1 17.4 21H7" /></svg>;
export const Comment = ({ size = 16 }: P) => <svg {...base(size)}><path d="M4 5h16v11H9l-5 4V5Z" /></svg>;
export const LinkedIn = ({ size = 20 }: P) => <svg {...base(size)}><path d="M4 9v11M4 4.5v.5M9 20v-6.5a3.5 3.5 0 0 1 7 0V20M9 9v11M16 20v-6.5a3.5 3.5 0 0 1 4 0V20" /></svg>;
export const Mail = ({ size = 20 }: P) => <svg {...base(size)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
export const MapPin = ({ size = 18 }: P) => <svg {...base(size)}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>;
export const Phone = ({ size = 18 }: P) => <svg {...base(size)}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>;
export const Clock = ({ size = 13 }: P) => <svg {...base(size)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
export const QuoteMark = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
    <path d="M10 8a4 4 0 1 0-4 4c0 3-1.5 5-4 6M22 8a4 4 0 1 0-4 4c0 3-1.5 5-4 6" />
  </svg>
);
export const ArrowLeft = ({ size = 14 }: P) => <svg {...base(size)}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>;
