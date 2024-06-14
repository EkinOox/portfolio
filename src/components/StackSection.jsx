// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// import required modules
import { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';

const SliderSwiper = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                // effect={'coverflow'}
                grabCursor={true}
                lazy={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination,Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img loading="lazy" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img loading="lazy" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img loading="lazy" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img loading="lazy" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"/>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img loading="lazy" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"/>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/express/express-original.svg"/>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/csharp/csharp-original.svg"/>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/php/php-original.svg"/>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/docker/docker-plain-wordmark.svg"/>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SliderSwiper;
