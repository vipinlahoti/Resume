import { Components, addComponent } from "@/lib";

const Profiles = () => {
  return (
    <div className="mt-10">
      <div className="flex space-x-4 mt-2 justify-center lg:justify-start">
        <a
          href="https://github.com/vipinlahoti"
          target="_blank"
          rel="noreferrer"
        >
          <Components.Image
            size={30}
            src="/github.svg"
            alt="Github"
            title="Github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/vipinlahoti"
          target="_blank"
          rel="noreferrer"
        >
          <Components.Image
            size={30}
            src="/linkedin.svg"
            alt="LinkedIn"
            title="LinkedIn"
          />
        </a>
        <a
          href="https://medium.com/@vipinlahoti"
          target="_blank"
          rel="noreferrer"
        >
          <Components.Image
            size={30}
            src="/medium.svg"
            alt="Medium"
            title="Medium"
          />
        </a>
        <a
          href="https://www.instagram.com/the.supercoder"
          target="_blank"
          rel="noreferrer"
        >
          <Components.Image
            size={30}
            src="/instagram.svg"
            alt="Instagram"
            title="Instagram"
          />
        </a>
      </div>
    </div>
  );
};

addComponent("Profiles", Profiles);
