"use client";
import Slider from "react-slick";
import Image from "next/image";

export type ImageData = {
  src: string;
  alt: string;
};

export const Carousel: React.FC<{ images: ImageData[] }> = ({ images }) => {
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
