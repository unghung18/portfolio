import React from "react";
import './Testimonials.scss'
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import IMG1 from '../../assets/avatar1.jpg'
import IMG2 from '../../assets/avatar2.jpg'
import IMG3 from '../../assets/avatar3.jpg'
import IMG4 from '../../assets/avatar4.jpg'

function Testimonials() {
    const dataTestimonials = [
        {
            image: IMG1,
            name: 'Kelly',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        {
            image: IMG2,
            name: 'Kelly',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        {
            image: IMG3,
            name: 'Kelly',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        }
        ,
        {
            image: IMG4,
            name: 'Kelly',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        }
    ]
    return (
        <section className="testimonials">
            <h2>Testimonials</h2>
            <h5>Reviews From Clients</h5>

            <Swiper className="container testimonials__container"
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={{ delay: 2000 }}
                pagination={{ clickable: true }}
            >
                {dataTestimonials.map((item, index) => (
                    <SwiperSlide className="testimonial" key={index}>
                        <div className="client__avatar">
                            <img src={item.image} alt="" />
                        </div>
                        <h5 className="client__name">{item.name}</h5>
                        <small className="client__review">{item.review}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Testimonials;