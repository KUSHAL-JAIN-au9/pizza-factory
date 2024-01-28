import React, { useRef } from "react";
import PizzaCard from "../components/PizzaCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../components/heading";
import { useSelector } from "react-redux";

import { Carousel } from "flowbite-react";

const PizzaStatus = ({ label, orders }) => {
  const slider = useRef(null);
  //   const orders = useSelector((state) => state.orders);

  var settings = {
    dots: true,
    infinite: false,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    ...(window.innerWidth > 640 ? { slidesToShow: 3 } : { slidesToShow: 1 }),
  };
  var settings2 = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div
      id="pizza-status"
      className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16"
    >
      <div className=" ml-4 flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <Heading title={label} />
      </div>

      <div className="w-full mt-5 h-[500px] ">
        {orders.length > 0 ? (
          <Slider ref={slider} {...settings}>
            {orders.map((pizza) => (
              <PizzaCard key={pizza.id} {...pizza} />
            ))}
          </Slider>
        ) : (
          <div className="w-full h-full grid place-items-center">
            <h1>Orders are not available</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default PizzaStatus;
