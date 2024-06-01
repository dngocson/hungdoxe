export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};

export const calculateSalePercentage = (
  initialPrice: number,
  salePrice: number,
) => {
  const salePercentage = Math.ceil((1 - salePrice / initialPrice) * 100);
  return salePercentage;
};
