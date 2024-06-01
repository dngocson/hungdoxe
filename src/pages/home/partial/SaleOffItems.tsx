import Card from "../../../components/_Common/Card";
import { mockCardItems } from "../../../constants/mockData";

const SaleOffItems = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {mockCardItems.map((item) => (
        <Card
          key={item.id}
          id={item.id + ""}
          saleOffPrice={item.saleOffPrice}
          name={item.name}
          status={item.status}
          price={item.price}
          image={item.image}
          className={item.className}
        />
      ))}
    </div>
  );
};

export default SaleOffItems;
