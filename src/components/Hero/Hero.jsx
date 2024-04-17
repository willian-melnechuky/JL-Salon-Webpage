import './Hero.css';
// import '../Button/Button.css'
//import GallerySlideshow from '../GallerySlideshow/GallerySlideshow.jsx';
//import Button from '../Button/Button.jsx'

export default function Hero() {
  
    return (
      <>
      <article className='hero'>
        
        <div className='hero__descr'>
          <h4 className='noMargin grow'>Refresh your elegance</h4>
          <p className='grow'>Unlock your inner brilliance</p>
          <div className='button_container '>
            <button className="button_container--default-button">
              <a className="button_container--default-anchor" href="./pages/menu.html">Shop Now</a>
            </button>
          </div>
        </div>
        {/* <GallerySlideshow/> */}
      </article>
      

    </>
    );
  }