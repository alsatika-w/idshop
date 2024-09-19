import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const CarouselSlide = () => {
  const images = [
    { src: image1, alt: "picture 1" },
    { src: image2, alt: "picture 2" },
    { src: image3, alt: "picture 3" },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-6xl items-center h-120 w-11/12 mt-5 sm:mt-10 object-cover rounded-lg overflow-hidden">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          autoPlay={true}
          interval={3000}
          className="relative"
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-auto">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cintain w-[400px] lg:h-[380px]"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSlide;
