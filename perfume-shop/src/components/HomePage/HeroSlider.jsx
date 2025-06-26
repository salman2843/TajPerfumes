import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { img: '/images/banner1.jpg', title: 'Luxury Scents', subtitle: 'Up to 50% Off' },
  { img: '/images/banner2.jpg', title: 'Fresh Arrivals', subtitle: 'Just Dropped Today' },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="relative h-[300px] md:h-[500px]">
          <img src={slide.img} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
            <p className="text-lg md:text-2xl mt-2">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
