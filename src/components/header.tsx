import { Components, addComponent } from "@/lib";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

const Header = () => {
  const iconClass =
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-muted hover:text-muted-foreground h-10 w-10 p-2 cursor-pointer";
  return (
    <header className="fixed py-4 w-full z-10 top-0 backdrop-blur-sm">
      <Components.Row>
        <div className="flex justify-between items-center">
          <div className="space-x-8"></div>
          <div>
            <div className={iconClass}>
              <Sun className="h-4 w-4" />
            </div>
            <div className={iconClass}>
              <Moon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Components.Row>
    </header>
  );
};

addComponent("Header", Header);
