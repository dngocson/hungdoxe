import React from "react";
import { cn } from "../../utils/cn";
interface IPageBreaker extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}
const PageBreaker = ({ label, className, ...props }: IPageBreaker) => {
  return (
    <div
      {...props}
      className={cn(
        "w-full rounded-md bg-error py-2 text-center text-base-100",
        className,
      )}
    >
      {label}
    </div>
  );
};

export default PageBreaker;
