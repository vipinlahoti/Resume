import Image from "next/image";
import { Components, addComponent } from "@/lib";

const Features = () => {
  return (
    <div className="mt-12">
      <Components.Text variant="overline">Stacks on board</Components.Text>
      <div className="flex space-x-4 mt-2 justify-center lg:justify-start">
        <Image
          width={40}
          height={40}
          loading="lazy"
          src="/react.svg"
          alt="React.js"
          title="React.js"
        />
        <Image
          width={40}
          height={40}
          loading="lazy"
          src="/next.svg"
          alt="Next.js"
          title="Next.js"
        />
        <Image
          width={40}
          height={40}
          loading="lazy"
          src="/tailwind.svg"
          alt="Tailwind css"
          title="Tailwind css"
        />
        <Image
          width={40}
          height={40}
          loading="lazy"
          src="/prisma.svg"
          alt="Prisma"
          title="Prisma"
        />
        <Image
          width={40}
          height={40}
          loading="lazy"
          src="/graphql.svg"
          alt="Graph QL"
          title="Graph QL"
        />
      </div>
    </div>
  );
};

addComponent("Features", Features);
