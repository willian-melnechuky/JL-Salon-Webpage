import './Card.css'
export default function Card ({service,desc,price,img_path}) {
    return(
        <div className="our-product__card">
                <img className="our-product__card--img" src={img_path} alt={service}/>
                <div className="our-product__card--description">
                    <div className="our-product__card--description--left">
                        <h5 className="our-product__card--description--h5">{service}</h5>
                        <h6 className="our-product__card--description--h6">{desc}</h6>
                    </div>
                    <p className="our-product__card--description--right">{price}</p>
                </div>
        </div>
    );
}