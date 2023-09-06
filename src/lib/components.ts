import React from "react";

type ComponentsProps = {
  [key: string]: React.ComponentType<any>;
};

// Components
export const Components: ComponentsProps = {};

// Register Component
export const addComponent = (
  name: string,
  component: React.ComponentType<any>,
): void => {
  Components[name] = component;
};
