import Card from './Card/Card.jsx'
import female_cut from '../../assets/female_cut.jpg'
import nails from '../../assets/nails.jpg'
import male_cut from '../../assets/male_cut_1.jpg'
import hair_colour from '../../assets/highlight.jpg'
import './Services.css'
export default function Services() {

    return(
        <article className="our-product" id ="services">
            <h3 className="our-product__h2">Our Services</h3>
            <div className="our-product__list">
                <Card service="Female haircut" desc='Shampoo, haircut and basic hair drying. 10$ plus for hairstyle' price='$45' img_path={female_cut}/>
                <Card service="Highlights" desc='Ask for more information' price='' img_path={hair_colour}/>
                <Card service="Male haircut" desc='Shampoo and haircut. 10$ plus for beard trims' price='$25' img_path={male_cut}/>
                <Card service="Nails" desc='Ask for more information' price='' img_path={nails}/>
            
            </div>
        </article>
    );
}