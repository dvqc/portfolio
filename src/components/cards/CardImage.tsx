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
    <div className=" min-w-60 h-52 rounded-xl">
      {isLoading && <div className="bg-slate-200 animate-pulse"></div>}
      {isError ? (
        <img
          src={"/images/placeholder.png"}
          alt="fallback image"
          className="object-cover"
        />
      ) : (
        <img
          className="w-full h-full object-cover"
          alt={alt}
          src={src ?? ""}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setIsError(true);
          }}
        />
      )}
    </div>
  );
};

export default CardImage;
