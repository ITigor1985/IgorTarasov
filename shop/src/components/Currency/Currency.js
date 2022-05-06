import { CurrencyValue } from './Currency.styled';

const Currency = ({ product, currencie, eventType }) => {
  return (
    <p>
      {product.prices
        .filter(price => price.currency.label === currencie)
        .map(cost => (
          <CurrencyValue eventType={eventType} key={cost.currency.label}>
            {cost.currency.symbol}
            {cost.amount}
          </CurrencyValue>
        ))}
    </p>
  );
};

export default Currency;
