import PriceFormatter from "./PriceFormatter";

interface PriceViewProps {
  price: number | undefined;
  discount: number | undefined;
  className: string;
}

const PriceView = ({ price, discount }: PriceViewProps) => {
  return (
    <div className="flex items-center gap-2">
      <PriceFormatter amount={price} className="text-shop_dark_blue" />
      {price && discount && (
        <PriceFormatter
          amount={price + (discount * price) / 100}
          className="line-through font-normal text-shop_light_text"
        />
      )}
    </div>
  );
};

export default PriceView;
