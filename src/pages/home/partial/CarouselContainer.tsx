import { Link } from "react-router-dom";
import Carousel from "../../../components/_Common/Carousel";
import { brandCarousel, linkCarousel } from "../../../constants/mockData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CarouselContainer = () => {
  return (
    <div className="mt-8 flex flex-col gap-8">
      <Carousel
        setting={{
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 1500,
        }}
        generateKey={(item) => item}
        items={brandCarousel.brand}
        customArrowClassname="hidden"
      >
        {(item) => (
          <div className="ml-[-5px] flex items-center justify-center px-[5px]">
            <img className="border border-primary px-[1px]" src={item} />
          </div>
        )}
      </Carousel>

      <Carousel
        generateKey={(item) => item.id + ""}
        customArrowContainerClassname={"w-[105%]"}
        customArrowClassname={
          "p-1 rounded-full bg-error text-white font-bold text-xl text-center"
        }
        leftArrowIcon={<IoIosArrowBack />}
        rightArrowIcon={<IoIosArrowForward />}
        items={linkCarousel.link}
      >
        {(item) => (
          <div className="ml-[-5px] px-[5px]">
            <Link
              className="block w-full border border-primary p-2.5 "
              to={item.path}
            >
              {item.label}
            </Link>
          </div>
        )}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
