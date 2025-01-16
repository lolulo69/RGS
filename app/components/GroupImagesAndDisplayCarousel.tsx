"use client";
import parse, { Element } from "html-react-parser";
import Slider from "react-slick";
import Image from "next/image";

type ImageData = {
  src: string;
  alt: string;
};

export const detectImageGroups = (htmlContent: string): React.ReactNode => {
  const parsedContent = parse(htmlContent, {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.tagName === "figure" &&
        domNode.attribs.class?.includes("wp-block-gallery")
      ) {
        const images = Array.from(domNode.children)
          .filter(
            (child) => child instanceof Element && child.tagName === "figure",
          )
          .map((figure) => {
            const img = (figure as Element).children.find(
              (child) => child instanceof Element && child.tagName === "img",
            ) as Element | undefined;
            return img
              ? {
                  src: img.attribs.src,
                  alt: img.attribs.alt || "",
                }
              : null;
          })
          .filter((image): image is ImageData => image !== null);

        return <Carousel images={images} />;
      }
      return domNode;
    },
  });

  return parsedContent;
};

const Carousel: React.FC<{ images: ImageData[] }> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings} className="mx-auto my-2 flex w-full max-w-3xl">
      {images.map((image, index) => (
        <div
          key={index}
          className="flex h-96 items-center justify-center" // Ensures vertical centering
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={400}
            className="max-h-full w-full object-contain"
          />
        </div>
      ))}
    </Slider>
  );
};
