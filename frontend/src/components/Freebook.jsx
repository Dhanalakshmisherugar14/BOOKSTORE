import React from "react";
//import list from "../..'/public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards.jsx";
import axios from "axios";

function Freebook() {
  const [book, setBook] = React.useState([]);
  React.useEffect(() => {
    const getBook = async () => {
      try {
        await axios.get("/api/book").then((res) => {
          const filterData = res.data.filter((data) => data.price === 0);
          setBook(filterData);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-3xl pb-2">Top Selling Books</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            aperiam labore veniam illo fuga et ipsa laborum neque, perspiciatis
            odit sint eligendi velit nihil earum sunt beatae. Molestiae, eveniet
            nulla?
          </p>
        </div>

        <div className="slider-container gap-5 py-6">
          <Slider {...settings}>
            {book.map((item) => (
              <div key={item.id}>
                <Cards item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
