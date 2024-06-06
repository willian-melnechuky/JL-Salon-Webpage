import './Hero.css';
// import '../Button/Button.css'
//import GallerySlideshow from '../GallerySlideshow/GallerySlideshow.jsx';
//import Button from '../Button/Button.jsx'
// import hero_video from '../../assets/Hero_Video.mp4'
// import image1 from '../../assets/Salon_Image.jpg'
// import image2 from '../../assets/female_cut.jpg'
// import image3 from '../../assets/male_cut.jpg'

export default function Hero() {
    // Array of images to cycle through
    // const images = [{image1}, {image2}, {image3}];
    // function changeBackground() {
    //   const heroSection = document.getElementById('hero_');
    //   let index = 0;
    
    //   setInterval(() => {
    //     heroSection.style.backgroundImage = `url(${images[index]})`;
    //     index = (index + 1) % images.length; // Loop back to the first image
    //     console.log('ran')
    //   }, 5000); // Change image every 1000 milliseconds (1 second)
    // }
    

    return (
      <>
      <article className='hero' id='hero'>
        {/* <video autoplay loop muted playsInline className='back-video'>
            <source src={hero_video} type='video/mp4'/>6
        </video> */}
        <div className='hero__descr'>
          <h4 className='noMargin grow'>Refresh your elegance</h4>
        </div>
        <div className='hero__descr'>
          <p className='grow noMargin'>Book now by sending a message on:</p>
          <div className='buttons'>
            <p className='grow__button noMargin'><a  className='links' href="https://www.whatsapp.com/catalog/19053200764/?app_absent=0">WhatApp</a></p>
            <p className='grow__button noMargin'><a  className='links' href="https://www.instagram.com/janesclair_rib/">Instagram</a></p>
            <p className='grow__button noMargin'><a className='links' href ='tel:9053200764'>Phone</a></p>
          </div>
          {/* <Button/> */}
        </div>
        {/* <GallerySlideshow/> */}
      </article>
      

    </>
    );
  }