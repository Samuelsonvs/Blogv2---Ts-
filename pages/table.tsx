import React from "react";
import Image, { ImageLoaderProps } from "next/image";

export default function table(): JSX.Element {
  return (
    <div>
      <Image
        loader={() => "https://randomuser.me/api/portraits/men/1.jpg"}
        src={"me.png"}
        alt="picture prof"
        width={100}
        height={100}
      />
    </div>
  );
}
