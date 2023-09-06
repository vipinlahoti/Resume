import { Components } from "@/lib";

export default function Home() {
  return (
    <Components.Hero
      title="I'm Vipin Lahoti"
      description="UI developer specializing in React.js, passionate about creating engaging and user-friendly web interfaces."
      image="/2.jpeg"
    >
      <Components.Features />
      <Components.Download />
    </Components.Hero>
  );
}
