import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Swiper.scss"
import 'swiper/css';
import 'swiper/css/navigation';



import { Autoplay, Navigation } from 'swiper/modules';

const Swipe = () => {
  return (
    <div className='swi'>

<Swiper navigation={true} modules={[ Autoplay,Navigation]} className="mySwiper" autoplay={{delay:2500}}>
        <SwiperSlide className='swi1'>

            <p>Royal Wine</p>
            <h1>GRAPE WINE</h1>


        </SwiperSlide>
        <SwiperSlide className='swi2'>

       <p>WELCOME</p>
       <h1>WINES FOR <br />EVERYONE</h1>



        </SwiperSlide>
       
      </Swiper>



    </div>
  )
}

export default Swipe 