import { addComponent } from "@/lib";

const Download = () => {
  return (
    <div className="mt-8">
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-lg px-8"
      >
        Download My Resume
      </a>
    </div>
  );
};

addComponent("Download", Download);
