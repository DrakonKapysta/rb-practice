import { cn } from "@heroui/theme";

export interface IFailedLoadProps extends React.ComponentProps<"div"> {
  message: string;
  back?: React.ReactNode;
}

export const FailedLoad = ({
  message,
  back,
  className,
  ...props
}: IFailedLoadProps) => {
  return (
    <div className={cn("text-center py-8", className)} {...props}>
      <p className="text-danger text-inherit">{message}</p>
      {back}
    </div>
  );
};
