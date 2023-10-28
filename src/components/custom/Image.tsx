import stiker from "../../assets/stiker.gif";
import { cn } from "@/lib/utils";
import { useState } from "react";
// import { Skeleton } from "@/components/ui/skeleton";
import Loading from "@/components/custom/Loading";

type propsType = {
  src?: string;
  className?: string;
};
const Image = ({ className, src = stiker }: propsType) => {
  const [loaded, isLoaded] = useState(false);

  const setLoaded = () => {
    isLoaded(true);
  };

  const handleError = () => {
    console.log(`we have an error while loading ${src}`);
  };

  // {loaded ? "" : <Skeleton className="w-full absolute h-full" />}
  return (
    <div className={cn("w-12 h-12 relative overflow-hidden", className)}>
      {loaded ? "" : <Loading className="w-full absolute h-full" />}
      <img
        className={cn("w-12 h-12 z-30 absolute", className)}
        onLoad={setLoaded}
        onError={handleError}
        loading="lazy"
        src={src}
        alt={src}
        // style={{ opacity: loaded ? "100%" : "0" }}
      />
    </div>
  );
};

export default Image;
