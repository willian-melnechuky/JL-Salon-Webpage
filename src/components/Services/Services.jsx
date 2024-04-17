import Card from './Card/Card.jsx'
import image_1 from '../../assets/gallery/image_1.jpg'
import beard_img from '../../assets/Beard.jpg'
import male_cut from '../../assets/male_cut.jpg'
import hair_colour from '../../assets/Hair_colour.jpg'
import './Services.css'
export default function Services() {

    return(
        <article className="our-product">
            <h3 className="our-product__h2">Our Services</h3>
            <div className="our-product__list">
                <Card service="Women's haircuts" desc='' price='$35' img_path={image_1}/>
                <Card service="Hair Colouring" desc='Price unique per individual' price='' img_path={hair_colour}/>
                <Card service="Men's haircuts" desc='' price='$25' img_path={male_cut}/>
                <Card service="Beard trims" desc='' price='$10' img_path={beard_img}/>
            
            </div>
        </article>
    );
}