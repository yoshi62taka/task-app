import { ElementType, ComponentPropsWithoutRef } from "react";

export type BaseButtonProps<T extends ElementType> = {
  as?: T;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<T>;