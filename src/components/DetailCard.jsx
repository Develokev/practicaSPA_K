

export const DetailCard = ({id, name, description, brand, src, price, rating}) => {


  return (
    <>
        <div className="product-card">
            <figure className="product-image">
                <img src={src} alt={name} />
            </figure>

            <div className="product-info">
            <h2 className="product-name">{name}</h2>
            <p className="product-description">{description}</p>
            <p className="product-brand">{brand}</p>
            <p className="product-price">{price}</p>

            <div className="product-rating">{rating}</div>
            </div>
        </div>
    </>
  );
}

