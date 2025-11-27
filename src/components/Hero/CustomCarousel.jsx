import Carousel from 'react-bootstrap/Carousel';
import './CustomCarousel.css';

// Import images
import Sample1 from '../../assets/img/sample2.jpeg';
// import Sample2 from '../../assets/img/Sample2.png';
// import Sample3 from '../../assets/img/Sample3.png';

// Add  slides 
const slides = [
  {
    id: 1,
    title: "A New Future",
    message: "Turning Data into Decisions. Insights into Impact",
    // cta: "Join Us",
    bg: Sample1
  },
  // {
  //   id: 2,
  //   title: "For Every Citizen",
  //   message: "Equality, empowerment, and opportunity for all.",
  //   cta: "Learn More",
  //   bg: Sample2
  // },
  // {
  //   id: 3,
  //   title: "Forward Together",
  //   message: "A strong nation starts with strong people.",
  //   cta: "Get Involved",
  //   bg: Sample3
  // }
];

function CustomCarousel() {
  return (
    <Carousel fade className="custom-carousel" interval={3000} data-aos="fade-up">
      
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          
          {/* Background Image */}
          <img
            className="d-block w-100 carousel-bg"
            src={slide.bg}
            alt={slide.title}
          />
          
          {/* Text Content */}
          <Carousel.Caption>
            <h1>{slide.title}</h1>
            <p>{slide.message}</p>
            {/* <button className="carousel-cta">{slide.cta}</button> */}
          </Carousel.Caption>

        </Carousel.Item>
      ))}

    </Carousel>
  );
}

export default CustomCarousel;
