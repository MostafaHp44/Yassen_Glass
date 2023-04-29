import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Work.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import pic1 from './PicWork/1.jpg'
import pic2 from './PicWork/2.jpg'
import pic3 from './PicWork/3.jpg'
import pic4 from './PicWork/4.jpg'
import pic5 from './PicWork/5.jpg'
import pic6 from './PicWork/6.jpg'
import pic7 from './PicWork/7.jpg'
import pic8 from './PicWork/8.jpg'
import pic9 from './PicWork/9.jpg'
import pic10 from './PicWork/10.jpg'
import pic11 from './PicWork/11.jpg'
import pic12 from './PicWork/12.jpg'
import pic13 from './PicWork/13.jpg'
import pic14 from './PicWork/14.jpg'
import pic15 from './PicWork/15.jpg'
import pic16 from './PicWork/16.jpg'
import pic17 from './PicWork/17.jpg'
import pic18 from './PicWork/18.jpg'
import pic19 from './PicWork/19.jpg'
import pic20 from './PicWork/20.jpg'
import pic21 from './PicWork/21.jpg'
import pic22 from './PicWork/22.jpg'
import pic23 from './PicWork/23.jpg'
import pic24 from './PicWork/24.jpg'
import pic25 from './PicWork/25.jpg'
import pic26 from './PicWork/26.jpg'
import pic27 from './PicWork/27.jpg'

const Work=()=>{
  return (
    <React.Fragment>
         <div className="MainWork" name="MainWork">
      <h1 className="heading">اعمالنا</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide style={{width:"auto"}}>
          <img src={pic1} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img  src={pic2} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic3} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic4} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic5}  alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic6} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic7} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic8} alt="slide_image" />
        </SwiperSlide> 

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic9} alt="slide_image" />
        </SwiperSlide>

         <SwiperSlide style={{width:"auto"}}>
          <img src={pic10} alt="slide_image" />
        </SwiperSlide>

         <SwiperSlide style={{width:"auto"}}>
          <img src={pic11} alt="slide_image" />
        </SwiperSlide>

         <SwiperSlide style={{width:"auto"}}>
          <img src={pic12} alt="slide_image" />
        </SwiperSlide>

         <SwiperSlide style={{width:"auto"}}>
          <img src={pic13} alt="slide_image" />
        </SwiperSlide>

         <SwiperSlide style={{width:"auto"}}>
          <img src={pic14} alt="slide_image" />
        </SwiperSlide>

         <SwiperSlide style={{width:"auto"}}>
          <img src={pic15} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic16} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic17} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic18} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic19} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic20} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic21} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic22} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic23} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic24} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic25} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic26} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide style={{width:"auto"}}>
          <img src={pic27} alt="slide_image" />
        </SwiperSlide>


        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    </React.Fragment>
   
  );
}

export default Work;