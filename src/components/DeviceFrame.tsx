import Image from "next/image";

/**
 * A precise iPhone frame around an app screenshot (1206×2622 source).
 * Dark rail, rounded screen, Dynamic Island, coral-tinted drop shadow.
 * CSS-only, no image assets beyond the screenshot.
 */
export function DeviceFrame({
  src,
  alt,
  priority = false,
  width = 280,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  width?: number;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`} style={{ width }}>
      <div
        className="relative rounded-[2.7rem] p-[3px]"
        style={{
          background:
            "linear-gradient(150deg, color-mix(in srgb, var(--ink) 60%, transparent), color-mix(in srgb, var(--board) 85%, black))",
          boxShadow:
            "0 2px 2px rgba(0,0,0,0.20), 0 44px 90px -30px color-mix(in srgb, var(--coral) 55%, transparent)",
        }}
      >
        <div className="relative overflow-hidden rounded-[2.45rem] bg-paper ring-1 ring-black/25">
          <Image
            src={src}
            alt={alt}
            width={1206}
            height={2622}
            priority={priority}
            sizes="(max-width: 768px) 70vw, 320px"
            className="block h-auto w-full"
          />
          {/* Dynamic Island */}
          <div className="pointer-events-none absolute left-1/2 top-[1.4%] h-[3.0%] w-[33%] -translate-x-1/2 rounded-full bg-black/95" />
          {/* Subtle screen glare */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 38%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * A pair of device frames — one light, one dark — that cross-fade with the
 * site theme so the hero always shows the app in the visitor's current mode.
 * Both images are rendered; CSS `.dark` toggles which is visible.
 */
export function ThemedDeviceFrame({
  light,
  dark,
  alt,
  width = 280,
  priority = false,
  className = "",
}: {
  light: string;
  dark: string;
  alt: string;
  width?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="block dark:hidden">
        <DeviceFrame src={light} alt={alt} width={width} priority={priority} />
      </div>
      <div className="hidden dark:block">
        <DeviceFrame src={dark} alt={alt} width={width} priority={priority} />
      </div>
    </div>
  );
}
