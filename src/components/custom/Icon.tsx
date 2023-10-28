import { cn } from "@/lib/utils";

type propsType = {
  d?: string;
  className?: string;
};

const Icon = ({
  className,
  d = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59",
}: propsType) => {
  return (
    <svg
      className={cn("w-6 h-6 opacity-[0.8]", className)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={d} />
    </svg>
  );
};

export default Icon;
