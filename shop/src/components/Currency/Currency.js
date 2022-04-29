const Currency = ({ product, currencie }) => {
  return (
    <p>
      {product.prices
        .filter(price => price.currency.label === currencie)
        .map(cost => (
          <span key={cost.currency.label}>
            {cost.amount}
            {cost.currency.symbol}
          </span>
        ))}
    </p>
  );
};

export default Currency;
