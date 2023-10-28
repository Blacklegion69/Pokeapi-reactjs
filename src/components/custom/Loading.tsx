import { cn } from "@/lib/utils";

type propsType = {
  className?: string;
};

const Loading = ({ className }: propsType) => {
  return (
    <div
      className={cn(
        "p-6 rounded-full border-2 border-slate-300 border-l-slate-900 animate-spin",
        className,
      )}
    >
      <div
        className={cn(
          "p-5 rounded-full border-2 border-slate-300 border-l-slate-900 animate-spin",
          className,
        )}
      >
        <div
          className={cn(
            "p-4 rounded-full border-2 border-slate-300 border-l-slate-900 animate-spin",
            className,
          )}
        >
          <div
            className={cn(
              "p-3 rounded-full border-2 border-slate-300 border-l-slate-900 animate-spin",
              className,
            )}
          >
            <div
              className={cn(
                "p-2 rounded-full border-2 border-slate-300 border-l-slate-900 animate-spin",
                className,
              )}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
