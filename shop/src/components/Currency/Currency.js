import { CurrencyValue } from './Currency.styled';

const Currency = ({ product, currencie }) => {
  return (
    <p>
      {product.prices
        .filter(price => price.currency.label === currencie)
        .map(cost => (
          <CurrencyValue key={cost.currency.label}>
            {cost.currency.symbol}
            {cost.amount}
          </CurrencyValue>
        ))}
    </p>
  );
};

export default Currency;
