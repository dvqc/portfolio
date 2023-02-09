import { useState } from "react";
// import placeholder from "@assets/images/placeholder.png";

const CardImage = ({
  src,
  alt = "A card component image probably related to a project or a blog",
}: {
  src?: string | null;
  alt?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <>
      {isLoading && (
        <div className="min-w-60 max-w-xs h-48 rounded-xl object-fit bg-slate-200 animate-pulse inline-block"></div>
      )}
      {isError ? (
        <img
          src={"/images/placeholder.png"}
          alt="fallback image"
          className="object-cover min-w-60 h-48 rounded-xl object-fit"
        />
      ) : (
        <img
          className="min-w-60  h-48 rounded-xl object-fit"
          alt={alt}
          src={src ?? ""}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setIsError(true);
          }}
        />
      )}
    </>
  );
};

export default CardImage;
