"use client";

import { useEffect, useRef, useState, PropsWithChildren } from "react";
import * as THREE from "three";
import { max } from "three/tsl";
import CLOUDS from "vanta/dist/vanta.clouds.min";

interface VantaOptions {
  color?: number;
  backgroundColor?: number;
  [key: string]: any;
}

export default function VantaBackground({
  children,
  options,
}: PropsWithChildren<{ options?: VantaOptions }>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && ref.current) {
      setVantaEffect(
        CLOUDS({
          el: ref.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          ...(options || {}),
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, options]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {children}
    </div>
  );
}
