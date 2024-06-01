import React from "react";
import { cn } from "../../../utils/cn";
import { Link } from "react-router-dom";
import Carousel from "../../../components/_Common/Carousel";
import Card from "../../../components/_Common/Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CardItem {
  id: string;
  image: string;
  name: string;
  status: string;
  className?: string;
  price: string | number;
  saleOffPrice?: number;
}
interface ISection extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  itemsLabels: { id: string; label: string; path: string }[];
  className?: string;
  items: CardItem[];
}
const Section = ({
  label,
  itemsLabels,
  className,
  items,
  ...props
}: ISection) => {
  return (
    <div {...props} className="mt-8 flex flex-col gap-8">
      <div className={cn("flex", className)}>
        <div className="grid grid-cols-[1fr_4fr] items-center">
          <h2 className="text-xl font-bold uppercase text-error">{label}</h2>
          <div className="flex flex-wrap justify-end gap-2 gap-y-4">
            {itemsLabels.map((itemLabel) => (
              <Link
                id={itemLabel.id}
                className="mx-2 cursor-pointer rounded-full border border-secondary p-2 text-xs text-info transition-all duration-200 hover:border-error"
                key={itemLabel.id}
                to={itemLabel.path}
              >
                {itemLabel.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Carousel
        setting={{ slidesToShow: 4, swipeToSlide: true, slidesToScroll: 1 }}
        generateKey={(item) => item.id + ""}
        customArrowContainerClassname={"w-[102%]"}
        customArrowClassname={
          "p-1 rounded-full text-3xl bg-neutral border shadow-[5px_5px_5px_rgba(0,0,0,0.5)] hover:bg-transparent hover:shadow-none"
        }
        leftArrowIcon={<IoIosArrowBack />}
        rightArrowIcon={<IoIosArrowForward />}
        items={items}
      >
        {(item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            status={item.status}
            className={item.className}
            price={item.price}
            saleOffPrice={item.saleOffPrice}
          />
        )}
      </Carousel>
    </div>
  );
};

export default Section;
