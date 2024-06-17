import { ReactNode, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import { Fragment } from "react/jsx-runtime";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { cn } from "../../utils/cn";
interface ICarouselSettings {
  [key: string]: number | boolean | string;
}

interface ICarousel<T> {
  generateKey: (item: T) => string;
  items: T[];
  setting?: ICarouselSettings;
  className?: string;
  customArrowClassname?: string;
  customArrowContainerClassname?: string;
  leftArrowIcon?: ReactNode;
  rightArrowIcon?: ReactNode;
  children: (item: T) => ReactNode;
}
const Carousel = <T,>({
  items = [],
  setting,
  generateKey,
  customArrowClassname,
  customArrowContainerClassname,
  leftArrowIcon,
  rightArrowIcon,
  children,
  className,
}: ICarousel<T>) => {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    autoplay: false,
    centerPadding: "0px",
    centerMode: true,
    arrows: false,
    slidesToShow: 5,
    adaptiveHeight: true,
    slidesToScroll: 1,
    cssEase: "linear",
    ...setting,
  };
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "absolute bottom-1/2 left-1/2 right-1/2 z-[9999] flex w-[105%] -translate-x-1/2 translate-y-1/2 transform justify-between",
          customArrowContainerClassname,
        )}
      >
        <button
          className={cn("text-lg text-red-500", customArrowClassname)}
          onClick={() => next()}
        >
          {leftArrowIcon || <FaArrowAltCircleLeft />}
        </button>
        <button
          className={cn("text-lg text-red-500", customArrowClassname)}
          onClick={() => previous()}
        >
          {rightArrowIcon || <FaArrowAltCircleRight />}
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {items.map((item) => (
          <Fragment key={generateKey(item)}>{children(item)}</Fragment>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
