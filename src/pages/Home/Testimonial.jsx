import React from "react";
import Slider from "react-slick";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Riya Sharma",
      role: "Student",
      image: "/img/testimonial/t1.jpg",
      rating: 5,
      text: "The teachers here are amazing! They helped me learn faster and made studying fun.",
      color: "linear-gradient(135deg, #ff6b6b, #c44569)", // red-maroon
    },
    {
      name: "Aman Verma",
      role: "Parent",
      image: "/img/testimonial/t2.jpg",
      rating: 4,
      text: "Great institute with well-trained staff. My daughter improved a lot in just 3 months.",
      color: "linear-gradient(135deg, #ffb142, #ff793f)", // orange
    },
    {
      name: "Neha Gupta",
      role: "Designer",
      image: "/img/testimonial/t3.jpg",
      rating: 5,
      text: "Loved the professional environment and the focus on practical learning. Highly recommend!",
      color: "linear-gradient(135deg, #34ace0, #227093)", // blue
    },
    {
      name: "Rohit Singh",
      role: "Student",
      image: "/img/testimonial/t4.jpg",
      rating: 5,
      text: "Best place to learn computer skills. Friendly staff and great facilities!",
      color: "linear-gradient(135deg, #33d9b2, #218c74)", // green
    },
    {
      name: "Sakshi Patel",
      role: "Graduate",
      image: "/img/testimonial/t5.jpg",
      rating: 4,
      text: "This institute gave me confidence to start freelancing. Loved the mentorship!",
      color: "linear-gradient(135deg, #706fd3, #474787)", // violet
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2800,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonials-section py-5" data-aos="zoom-in-up">
      <div className="container text-center">
        <h2 className="fw-bold mb-3 text-primary">What Our Students Say</h2>
        <p className="text-muted mb-5">
          Real experiences from learners and parents who grew with us.
        </p>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-3">
              <div
                className="testimonial-card text-white shadow-lg"
                style={{ background: t.color }}
              >
                <div className="testimonial-header">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="testimonial-img mb-3"
                  />
                  <div>
                    <h5 className="mb-0 fw-bold">{t.name}</h5>
                    <p className="small opacity-75">{t.role}</p>
                  </div>
                </div>
                <p className="testimonial-text">“{t.text}”</p>
                <div className="testimonial-rating">
                  {"★".repeat(t.rating)}
                  {"☆".repeat(5 - t.rating)}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style>{`
        .testimonials-section {
          background: #f8f9fa;
        }

        .testimonial-card {
          border-radius: 16px;
          padding: 2rem;
          color: white;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.4s ease;
          transform: scale(0.98);
        }

        .testimonial-card:hover {
          transform: scale(1.03);
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 15px;
          text-align: left;
        }

        .testimonial-img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(255, 255, 255, 0.8);
        }

        .testimonial-text {
          font-size: 0.95rem;
          font-style: italic;
          margin-top: 1rem;
          text-align: left;
          color: rgba(255, 255, 255, 0.9);
        }

        .testimonial-rating {
          color: #ffdf00;
          margin-top: 1rem;
          font-size: 1.2rem;
          text-align: left;
        }

        /* Slick dots */
        .slick-dots {
          display: flex !important;
          justify-content: center;
          margin-top: 2rem;
          list-style: none;
        }

        .slick-dots li {
          width: 12px;
          height: 12px;
          margin: 0 6px;
          border-radius: 50%;
          background: #bbb;
          transition: all 0.3s ease;
        }

        .slick-dots li.slick-active {
          background: #0d6efd;
          transform: scale(1.3);
          box-shadow: 0 0 8px rgba(13, 110, 253, 0.4);
        }

        @media (max-width: 768px) {
          .testimonial-card {
            min-height: 320px;
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
