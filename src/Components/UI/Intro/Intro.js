import React from "react";
import './Intro.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
const Intro = () => {
    return (
    <React.Fragment>
        <div className="MainIntro" data-aos="fade-up">
            
            <div className="MainText-Intro">

                <div className="Text-Intro">

                <span>قالو عن الزُجاجِ</span>

                </div>

                <div className="Text-1">
                <span> يُطيعُ العَوالي رُكِّبَت كُلَّ لَهذَمِ  وَمَن يَعصِ أَطرافَ الزُجاجِ ينلنهُ</span> <div className="Author"><span>زهير بن ابي سلمي</span>
              </div>
                </div>

                <div className="Text-2">
                <span>فَبَانَتْ وَفي الصّدْرِ صَدْعٌ لهَا،كَصَدْعِ الزّجَاجَة ِ ما يَلْتَئِمْ</span> <div className="Author"><span>الاعشي</span></div>

                </div>
                
            </div>
           
        </div>
    </React.Fragment>
    );
}
 
export default Intro;