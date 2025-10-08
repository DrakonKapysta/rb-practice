import { cn } from "@heroui/theme";
import { IFailedLoadProps } from "./failed-load.interface";

export const FailedLoad = ({
  message,
  back,
  className,
  ...props
}: IFailedLoadProps) => {
  return (
    <div className={cn("text-center text-danger py-8", className)} {...props}>
      <p className="text-inherit">{message}</p>
      {back}
    </div>
  );
};
