import './Hero.css';
import image_1 from '../../assets/gallery/image_1.jpg';
//import GallerySlideshow from '../GallerySlideshow/GallerySlideshow.jsx';

export default function Hero() {
  
    return (
      <article className='hero'>
        <section className='description'>
          <h4>Refresh your elegance</h4>
          <p>Where beauty meets relaxation</p>
        </section>
        <img className='hero__img' src={image_1} alt="" />
        {/* <GallerySlideshow/> */}
      </article>
    );
  }