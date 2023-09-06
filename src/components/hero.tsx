import Image from "next/image";
import { Components, addComponent } from "@/lib";

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  overline?: string;
  title: string;
  description: string;
  column?: number;
  image?: string;
  children?: React.ReactNode;
}

const Hero = ({
  className,
  title,
  description,
  image,
  children,
  ...props
}: HeroProps) => (
  <Components.Row
    spacing="top-small bottom-small"
    column={2}
    className="min-h-screen lg:items-center"
    {...props}
  >
    {image && (
      <div className="overflow-hidden m-auto mb-0 lg:m-0 relative rounded-full lg:rounded-lg w-60 h-60 lg:h-full lg:w-full">
        <Image
          fill
          loading="lazy"
          style={{ objectFit: "cover" }}
          src={image}
          alt="Vipin Lahoti"
        />
      </div>
    )}
    <div className="lg:ml-auto lg:w-5/6 text-center lg:text-left">
      <div className="mb-6">
        {title && <Components.Text variant="h1">{title}</Components.Text>}
        {description && (
          <Components.Text variant="lead">{description}</Components.Text>
        )}
      </div>
      {children}
    </div>
  </Components.Row>
);

addComponent("Hero", Hero);
