const Product = (props) => {
    const { image, title, price, rating, description } = props;

    console.log("Props", props);

return (
    <section className="Detail">
        <article className="Detail_thumbnail">
            <img src={image} alt={title} />
        </article>
        <article className="Detail_info">
            <div className="Detail_info_header">
             <h2>{title}</h2>
            </div>
            <div className="Detail_info">
                <span className="Detail_info_price">{price}
                </span>
                <span className="Detail_info_rating">Rating:{rating.rate}</span>
            </div>
            <p className="Detail_info_description">{description}</p>
        </article>
    </section>
)
}

export default Product;