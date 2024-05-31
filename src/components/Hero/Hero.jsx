import './Hero.css';
// import '../Button/Button.css'
//import GallerySlideshow from '../GallerySlideshow/GallerySlideshow.jsx';
//import Button from '../Button/Button.jsx'
// import hero_video from '../../assets/Hero_Video.mp4'

export default function Hero() {
  
    return (
      <>
      <article className='hero'>
        {/* <video autoplay loop muted playsInline className='back-video'>
            <source src={hero_video} type='video/mp4'/>
        </video> */}
        <div className='hero__descr'>
          <h4 className='noMargin grow'>Refresh your elegance</h4>
          <p className='grow'>Unlock your inner brilliance</p>
          {/* <Button/> */}
        </div>
        {/* <GallerySlideshow/> */}
      </article>
      

    </>
    );
  }