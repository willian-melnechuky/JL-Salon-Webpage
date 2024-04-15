import './GallerySlideshow.css'

import image_1 from '../../assets/gallery/image_1.jpg';
import image_2 from '../../assets/gallery/image_2.jpg';

export default function GallerySlideshow () {
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByclassNameName("mySlides");
    let dots = document.getElementsByclassNameName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].classNameName = dots[i].classNameName.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classNameName += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  } 
  

  return (
        <section>
          {/* <!-- Container for the image gallery --> */}
          <div className="container">

            {/* <!-- Full-width images with number text --> */}
            <div className="mySlides">
              <div className="numbertext">1 / 6</div>
                <img src={image_1} ></img>
            </div>

            <div className="mySlides">
              <div className="numbertext">2 / 6</div>
                <img src={image_2}></img>
            </div>

            {/* <!-- Next and previous buttons --> */}
            <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a className="next" onclick="plusSlides(1)">&#10095;</a>

            {/* <!-- Image text --> */}
            <div className="caption-container">
              <p id="caption">tets</p>
            </div>

            {/* <!-- Thumbnail images --> */}
            <div className="row">
              <div className="column">
                <img className="demo cursor" src={image_1} style="width=100%" onclick="currentSlide(1)" alt="The Woods"></img>
              </div>
              </div>
              <div className="column">
                <img className="demo cursor" src={image_2} style="width=100%" onclick="currentSlide(2)" alt="Cinque Terre"></img>
              </div>
          </div>
        </section>
    );
}
