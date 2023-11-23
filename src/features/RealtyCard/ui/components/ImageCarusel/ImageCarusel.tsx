import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import cls from './ImageCarusel.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { Heart } from 'lucide-react';

interface Image {
  id: number;
  image: string;
}

export interface ImageCaruselProps {
  isLiked: boolean;
  images: Image[];
}

const ImageCarusel = (props: ImageCaruselProps) => {
  const { isLiked, images } = props;

  const pagination = {
    clickable: true,
  };

  const autoplay = {
    delay: 2000,
    disableOnInteraction: false,
  };

  return (
    <div className={cls.ImageCarusel}>
      <Swiper
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        className={cls.mySwiper}
        parallax
        autoplay={autoplay}>
        {images.map((image, index) => (
          <SwiperSlide key={index} className={cls.slide}>
            <img src={image.image} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarusel;
