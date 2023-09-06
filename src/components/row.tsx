import * as React from "react";
import { addComponent, cn } from "@/lib";

const Row = ({ spacing = "", column = 1, className = "", ...props }) => {
  let topSpacing = "";
  let bottomSpacing = "";
  let rowColumn = "";

  if (spacing) {
    const setSpacing = spacing.split(" ");
    setSpacing.forEach((space) => {
      switch (space) {
        case "top-xlarge":
          topSpacing = "pt-48";
          break;
        case "top-large":
          topSpacing = "pt-32";
          break;
        case "top-medium":
          topSpacing = "pt-16";
          break;
        case "top-small":
          topSpacing = "pt-8";
          break;
        case "bottom-xlarge":
          bottomSpacing = "pb-48";
          break;
        case "bottom-large":
          bottomSpacing = "pb-32";
          break;
        case "bottom-medium":
          bottomSpacing = "pb-16";
          break;
        case "bottom-small":
          bottomSpacing = "pb-8";
          break;
        default:
          topSpacing = "";
          bottomSpacing = "";
      }
    });
  }

  if (column) {
    switch (column) {
      case 1:
        rowColumn = "grid-cols-1";
        break;
      case 2:
        rowColumn = "grid-cols-1 lg:grid-cols-2";
        break;
      case 3:
        rowColumn = "grid-cols-1 lg:grid-cols-3";
        break;
      case 4:
        rowColumn = "grid-cols-1 lg:grid-cols-4";
        break;
      default:
        rowColumn = "grid-cols-1";
    }
  }

  return (
    <div
      className={cn(
        `container mx-auto px-6 grid gap-8 ${rowColumn} ${topSpacing} ${bottomSpacing} ${className}`,
      )}
      {...props}
    />
  );
};

addComponent("Row", Row);
