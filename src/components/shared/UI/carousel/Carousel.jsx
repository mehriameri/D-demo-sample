import React, { useRef } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
// import comm from './Carousel.css';

const Carousel = ({ slidPerView, children }) => {
    const nextRef = useRef();
    const prevRef = useRef();
    return (
        <Swiper 
            modules={[Navigation]}
            navigation={{
                nextEl: nextRef.current,
                prevEl: prevRef.current
            }}
            onInit={swiper => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
          
            breakpoints={
                {
                    1280: {
                        slidesPerView:6.1
                    },
                    1024: {
                        slidesPerView:5.5
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    375: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1.5,
                    }
                }
            }
            spaceBetween={2}
            speed={100}
            // loop
            effect
        >
            {children}
        </Swiper>
    )
}

export default Carousel;