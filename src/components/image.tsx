import Image from "next/image";
import { addComponent } from "@/lib";

export interface ImageCompProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: number;
  src: string;
  title: string;
}

const ImageComp = ({ size = 40, src, title }: ImageCompProps) => {
  return (
    <Image
      width={size}
      height={size}
      loading="lazy"
      src={src}
      alt={title}
      title={title}
    />
  );
};

addComponent("Image", ImageComp);
