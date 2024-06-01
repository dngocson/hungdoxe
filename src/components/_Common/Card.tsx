import { cn } from "../../utils/cn";
import { calculateSalePercentage, formatCurrency } from "../../utils/helperFn";

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  image: string;
  name: string;
  status: string;
  className?: string;
  price: string | number;
  saleOffPrice?: number;
}
const Card = ({
  id,
  className,
  status,
  image,
  price,
  name,
  saleOffPrice,
  ...props
}: ICard) => {
  let saleOff: number | undefined = undefined;
  if (typeof price === "number" && typeof saleOffPrice === "number")
    saleOff = calculateSalePercentage(price, saleOffPrice);
  return (
    <div
      {...props}
      className={cn(
        "relative flex cursor-pointer flex-col gap-2 border border-base-300 p-2",
        className,
      )}
    >
      {saleOff && (
        <span className="absolute right-2 top-2 flex items-center justify-center bg-error p-1 text-sm text-base-100">
          {saleOff}%
        </span>
      )}
      <img src={image} alt={name} />
      <p className="mb-auto min-h-[48px]">{name}</p>
      <p className="text-info">{status}</p>
      {typeof price === "number" ? (
        <div className="flex items-center justify-between">
          <span className="text-error">{formatCurrency(price)}</span>
          {saleOffPrice && (
            <span className="text-sm line-through">
              {formatCurrency(saleOffPrice)}
            </span>
          )}
        </div>
      ) : (
        <span className="text-error">{price}</span>
      )}
    </div>
  );
};

export default Card;
