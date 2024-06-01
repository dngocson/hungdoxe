import { Link } from "react-router-dom";
import Carousel from "../../../components/_Common/Carousel";
import { brandCarousel, linkCarousel } from "../../../constants/mockData";

const CarouselContainer = () => {
  return (
    <div className="mt-8 flex flex-col gap-8">
      <Carousel
        setting={{ swipeToSlide: true, slidesToScroll: 1 }}
        generateKey={(item) => item}
        items={brandCarousel.brand}
      >
        {(item) => (
          <div className="flex items-center justify-center">
            <img className="border border-primary" src={item} />
          </div>
        )}
      </Carousel>

      <Carousel
        setting={{ swipeToSlide: true, slidesToScroll: 1 }}
        generateKey={(item) => item.id + ""}
        items={linkCarousel.link}
      >
        {(item) => (
          <Link
            className="block w-full border border-primary p-2.5 "
            to={item.path}
          >
            {item.label}
          </Link>
        )}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
