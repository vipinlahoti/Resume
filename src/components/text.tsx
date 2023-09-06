import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn, addComponent } from "@/lib";

const textVariants = cva("block scroll-m-20", {
  variants: {
    variant: {
      p: "font-light leading-7 [&:not(:first-child)]:mt-6",
      h1: "mb-4 text-4xl md:text-4xl font-extrabold tracking-tight xl:text-7xl",
      h2: "mb-6 text-6xl font-semibold",
      h3: "mb-4 text-5xl font-semibold",
      h4: "mb-4 text-4xl font-semibold",
      h5: "mb-2 text-2xl font-medium",
      h6: "mb-2 text-xl font-medium",
      overline: "text-sm font-extrabold uppercase leading-loose tracking-wider",
      lead: "text-xl text-muted-foreground",
      muted: "text-sm text-muted-foreground",
      small: "text-sm",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TextProps
>(({ className, variant, ...props }, ref) => {
  const Comp =
    variant === "overline" || variant === "lead" || variant === "muted"
      ? "span"
      : variant ?? "p";

  return (
    <Comp
      className={cn(textVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});

Text.displayName = "Text";
addComponent("Text", Text);
