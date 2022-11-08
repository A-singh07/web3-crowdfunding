import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import styles from './customCarousel.module.css';


const CustomCarousel = ({ Component, data, baseUrl, autoplay }) => {

  const [deviceType, setDeviceType] = useState('mobile');
  // < 600 = mobile   -> 1 slides
  // > 600 & < 900 = tablet-small  -> 1.5 slides
  // > 900 & < 1200 = tablet-big  -> 2 slides
  // > 1200 = desktop  -> 3 slides
  // If changing above config, check css media query as well.

  const deviceTypeFunc = () => {
    typeof window !== "undefined" &&
      window.innerWidth > 1200 ? setDeviceType('desktop')
      : (window.innerWidth <= 1200 && window.innerWidth > 900) ? setDeviceType('tablet-big')
        : (window.innerWidth <= 900 && window.innerWidth > 600) ? setDeviceType('tablet-small')
          : setDeviceType('mobile');
  }

  useEffect(() => {
    // Set device type on reload
    deviceTypeFunc();

    // Set device type on window resize
    window.addEventListener('resize', () => {
      deviceTypeFunc();
    })
  }, [])


  return (
    <Swiper
      slidesPerView={
        deviceType === 'desktop' ? 3
          : deviceType === 'tablet-big' ? 2
            : deviceType === 'tablet-small' ? 1.5
              : 1
      }
      spaceBetween={60}
      modules={[Pagination, Autoplay]}
      autoplay={autoplay && {
        delay: 3000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true,
        bulletActiveClass: `${styles.dotActive}`
      }}
      className={styles.carouselContainer}
    >
      {
        data.map((item, i) =>
          <SwiperSlide key={i} className={styles.slideContainer}>
            <Component data={item} baseUrl={baseUrl} />
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}

export default CustomCarousel
