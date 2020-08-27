import { getImage } from "utils";

type Props = {
  src: string;
  className?: string;
  alt?: string;
};

export const Image = ({ src, className, alt }: Props) => {
  const image = getImage(src);
  return (
    <div className={className}>
      <img className="block w-full" src={image.placeholder} />
      <img className="block -mt-full" srcSet={image.srcSet} src={image.src} alt={alt || ""} loading="lazy" />
    </div>
  );
};
