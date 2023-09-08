import { Components, addComponent } from "@/lib";

const Features = () => {
  return (
    <div className="mt-12">
      <Components.Text variant="overline">My tech stack</Components.Text>
      <div className="flex space-x-4 mt-2 justify-center lg:justify-start">
        <Components.Image src="/js.svg" alt="JavaScript" title="JavaScript" />
        <Components.Image src="/react.svg" alt="React.js" title="React.js" />
        <Components.Image src="/next.svg" alt="Next.js" title="Next.js" />
        <Components.Image
          src="/tailwind.svg"
          alt="Tailwind css"
          title="Tailwind css"
        />
        <Components.Image src="/prisma.svg" alt="Prisma" title="Prisma" />
        <Components.Image src="/graphql.svg" alt="Graph QL" title="Graph QL" />
      </div>
    </div>
  );
};

addComponent("Features", Features);
