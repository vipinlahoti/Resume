import { Components } from "@/lib";

export default function Home() {
  return (
    <Components.Hero
      title="I'm Vipin Lahoti"
      description="Frontend developer specializing in React.js, passionate about creating engaging and user-friendly web interfaces."
      image="/2.jpeg"
    >
      <Components.Features />
      <Components.Profiles />
      <Components.Download />
      <Components.Text variant="muted">
        Write an email to{" "}
        <a
          href="mailto:hi@vipinlahoti.com"
          className="text-primary underline-offset-4 underline"
        >
          hi@vipinlahoti.com
        </a>
      </Components.Text>
    </Components.Hero>
  );
}
