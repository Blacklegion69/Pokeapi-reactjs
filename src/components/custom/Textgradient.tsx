import React from "react";
import { cn } from "@/lib/utils";

type propsType = {
  children?: React.ReactNode;
  className?: string;
};

const Textgradient = ({ children, className }: propsType) => {
  return <div className={cn("grad", className)}>{children}</div>;
};

export default Textgradient;
