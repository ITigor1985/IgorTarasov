const ProductsListItem = ({
  product,
  setActiveCard,
  index,
  currencie,
  activStyleCard,
  modalOpen,
}) => {
  return (
    <>
      <li
        onClick={event => modalOpen(product.id, product.gallery[0], event)}
        className="card"
        onMouseOver={() => setActiveCard(index)}
        onMouseOut={() => setActiveCard(null)}
        style={{ display: 'inline-block' }}
        value={index}
      >
        <img
          src={product.gallery[0]}
          alt={product.name}
          width="356"
          height="358"
        />
        <p>{product.name}</p>
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
        <p className={activStyleCard(index)}>cart</p>
      </li>
    </>
  );
};

export default ProductsListItem;
