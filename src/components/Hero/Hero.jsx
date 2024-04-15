import './Hero.css';
import '../GallerySlideshow/GallerySlideshow.jsx'
//import GallerySlideshow from '../GallerySlideshow/GallerySlideshow.jsx';

export default function Hero() {
  
    return (
      <article className='hero'>
        <section className='description'>
          <h4>Refresh your elegance</h4>
          <p>Where beauty meets relaxation</p>
        </section>
        {/* <GallerySlideshow/> */}
      </article>
    );
  }