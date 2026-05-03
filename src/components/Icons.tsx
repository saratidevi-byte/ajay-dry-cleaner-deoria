import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.6,
  stroke: "currentColor",
};

export const Phone = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293a.75.75 0 01-.96.21 12.035 12.035 0 01-5.06-5.06.75.75 0 01.21-.96l1.293-.97c.362-.271.527-.733.417-1.173L8.123 3.102C8 2.601 7.55 2.25 7.033 2.25H5.25A2.25 2.25 0 003 4.5v2.25" />
  </svg>
);

export const WhatsApp = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" {...p}>
    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.83 3.41 4.823 4.34.515.244 2.118.99 2.726.99.547 0 1.225-.215 1.554-.717.272-.402.272-.717.272-1.176 0-.487-.16-.78-.587-.917-.474-.158-1.066-.358-1.498-.301zM16.115 0C7.526 0 .5 7.026.5 15.615c0 2.94.83 5.79 2.43 8.273L.5 32l8.34-2.487c2.4 1.474 5.18 2.288 7.97 2.288 8.59 0 15.615-7.026 15.615-15.615C32.43 7.598 25.404 0 16.115 0zm0 28.43c-2.487 0-4.93-.673-7.067-1.93l-.516-.302-5.18 1.546 1.547-5.05-.33-.515c-1.39-2.215-2.088-4.745-2.088-7.36 0-7.512 6.122-13.633 13.634-13.633 7.51 0 13.633 6.121 13.633 13.633 0 7.51-6.122 13.633-13.633 13.633z" />
  </svg>
);

export const Instagram = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.804.249 2.227.413.56.218.96.479 1.38.899.42.42.681.82.899 1.38.164.423.36 1.058.413 2.227.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.804-.413 2.227-.218.56-.479.96-.899 1.38-.42.42-.82.681-1.38.899-.423.164-1.058.36-2.227.413-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.804-.249-2.227-.413a3.717 3.717 0 01-1.38-.899 3.717 3.717 0 01-.899-1.38c-.164-.423-.36-1.058-.413-2.227C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.249-1.804.413-2.227.218-.56.479-.96.899-1.38.42-.42.82-.681 1.38-.899.423-.164 1.058-.36 2.227-.413C8.416 2.212 8.8 2.2 12 2.2M12 0C8.741 0 8.332.014 7.052.072 5.775.13 4.902.333 4.14.63a5.917 5.917 0 00-2.14 1.393A5.917 5.917 0 00.63 4.14C.333 4.902.131 5.775.072 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.058 1.277.261 2.15.558 2.913a5.917 5.917 0 001.393 2.14 5.917 5.917 0 002.14 1.393c.762.297 1.635.5 2.913.558C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.15-.261 2.913-.558a5.917 5.917 0 002.14-1.393 5.917 5.917 0 001.393-2.14c.297-.762.5-1.635.558-2.913C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.058-1.277-.261-2.15-.558-2.913a5.917 5.917 0 00-1.393-2.14A5.917 5.917 0 0019.86.63C19.098.333 18.225.131 16.948.072 15.668.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 1018.162 12 6.162 6.162 0 0012 5.838zm0 10.162A4 4 0 1116 12a4 4 0 01-4 4zm6.406-11.845a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
  </svg>
);

export const MapPin = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.336 24 12 19.897 4.664 24 6 15.27 0 9.423l8.332-1.268z" />
  </svg>
);

export const Truck = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375c-.621 0-1.125-.504-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);

export const Sparkles = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

export const Bolt = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 5.591-3.824 10.29-9 11.622-5.176-1.332-9-6.03-9-11.622V5.25l9-3 9 3V12z" />
  </svg>
);

export const Tag = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);

export const Heart = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export const Users = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const Quote = (p: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M9.13 8.13c0-2.74 2.21-4.95 4.95-4.95V0C9.27 0 5.18 4.09 5.18 9.13V18h7.95V9.13H9.13zm9.95 0c0-2.74 2.21-4.95 4.95-4.95V0c-4.81 0-8.9 4.09-8.9 9.13V18h7.95V9.13h-3.95z" />
  </svg>
);

// Service icons
export const ShirtIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 4l-5 3 2 4 3-2v13h12V9l3 2 2-4-5-3-3 2a3 3 0 01-6 0L8 4z" />
  </svg>
);

export const PantIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12l-1 8-1 10h-4l-1-9-1 9H6L5 11 6 3z" />
  </svg>
);

export const CoatIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 3l4 3 4-3 5 4-2 5-3-1v10H6V11l-3 1-2-5 5-4z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v15" />
  </svg>
);

export const SareeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 4c4 2 10 2 14 0v6c0 6-3 11-7 11s-7-5-7-11V4z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 8c4 2 10 2 14 0M9 14h6" />
  </svg>
);

export const BlanketIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18v12H3zM3 10h18M3 14h18M7 6v12M17 6v12" />
  </svg>
);

export const ShoeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 17c0 2 1 3 3 3h13c2 0 4-1 4-3v-1c0-1-1-2-2-2l-5-1-3-3-2-4-4 1c-2 1-4 3-4 6v4z" />
  </svg>
);

export const SuitIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4l3 3 3-3 4 3v15h-4l-1-8h-4l-1 8H5V7l4-3z" />
  </svg>
);

export const LehengaIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 3h4l1 5 6 13H3l6-13 1-5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6M7 14h10" />
  </svg>
);

export const Diamond = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12l4 6-10 12L2 9l4-6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 9h20M9 3l3 6 3-6M12 9l-3 6M12 9l3 6" />
  </svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
  </svg>
);

export const Settings = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const Globe = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9 9 0 013 12c0-1.47.353-2.856.978-4.082" />
  </svg>
);

export const Minus = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

export const Plus = (p: IconProps) => (
  <svg {...base} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);
