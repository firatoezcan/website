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
      <div style={{ paddingTop: (image.height / image.width) * 100 + "%" }} />
      <img className="absolute inset-0" srcSet={image.srcSet} src={image.src} alt={alt || ""} loading="lazy" />
    </div>
  );
};
