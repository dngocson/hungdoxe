import { cn } from "../../utils/cn";
import { HTMLAttributes, ReactNode } from "react";

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const Container = ({ className, children, ...props }: IContainer) => {
  return (
    <div
      {...props}
      className={cn("container mx-auto flex flex-col", className)}
    >
      {children}
    </div>
  );
};

export default Container;
