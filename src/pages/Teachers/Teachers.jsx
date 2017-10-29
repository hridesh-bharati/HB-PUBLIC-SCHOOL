import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Teachers() {
  const teachers = [
    {
      name: "Riya Sharma",
      subject: "English Literature",
      image: "/img/teachers/teacher1.jpg",
      desc: "Dedicated to improving communication and language skills through creativity and critical thinking.",
    },
    {
      name: "Amit Verma",
      subject: "Mathematics",
      image: "/img/teachers/teacher2.jpg",
      desc: "Passionate about making numbers fun and problem-solving exciting for every student.",
    },
    {
      name: "Neha Gupta",
      subject: "Science",
      image: "/img/teachers/teacher3.jpg",
      desc: "Encourages curiosity through experiments and real-world scientific exploration.",
    },
    {
      name: "Rajesh Kumar",
      subject: "Computer Science",
      image: "/img/teachers/teacher4.jpg",
      desc: "Teaches the power of coding, AI, and digital safety in a tech-driven world.",
    },
    {
      name: "Pooja Singh",
      subject: "Art & Craft",
      image: "/img/teachers/teacher5.jpg",
      desc: "Fosters creativity and artistic expression through colors, craft, and imagination.",
    },
    {
      name: "Vikram Patel",
      subject: "Physical Education",
      image: "/img/teachers/teacher6.jpg",
      desc: "Believes in fitness, teamwork, and the joy of sports for a balanced lifestyle.",
    },
  ];

  const features = [
    {
      icon: "bi bi-mortarboard-fill",
      title: "Highly Qualified Educators",
      desc: "Our teachers are trained professionals with degrees from reputed universities.",
    },
    {
      icon: "bi bi-heart-fill",
      title: "Mentorship & Guidance",
      desc: "Each teacher mentors students beyond academics to ensure personal growth and confidence.",
    },
    {
      icon: "bi bi-lightbulb-fill",
      title: "Innovative Teaching",
      desc: "Interactive lessons with smart boards, experiments, and project-based learning.",
    },
    {
      icon: "bi bi-award-fill",
      title: "Award-Winning Faculty",
      desc: "Recognized for excellence in teaching and contributions to education at district level.",
    },
    {
      icon: "bi bi-people-fill",
      title: "Parent-Teacher Meetings",
      desc: "Regular discussions with parents to track progress and plan improvements.",
    },
    {
      icon: "bi bi-book-half",
      title: "Student-Centered Approach",
      desc: "We believe every child learns differently and adapt lessons for each learner.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* 🔹 Teachers Slider Section */}
      <section className="py-5 bg-light" id="teachers">
        <div className="container text-center" data-aos="fade-up">
          <h2 className="fw-bold text-primary mb-3">Our Dedicated Teachers</h2>
          <p className="text-muted mb-4">
            Meet the pillars of HB Public School — passionate educators shaping the leaders of tomorrow.
          </p>

          <Slider {...settings}>
            {teachers.map((teacher, i) => (
              <div key={i} className="p-3">
                <div
                  className="card border-0 shadow-sm h-100 text-center"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <div className="position-relative">
                    <img
                      src={teacher.image}
                      className="card-img-top rounded-top"
                      alt={teacher.name}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.6))",
                        borderRadius: "12px 12px 0 0",
                      }}
                    ></div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{teacher.name}</h5>
                    <p className="text-primary fw-semibold">{teacher.subject}</p>
                    <p className="text-muted small">{teacher.desc}</p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="#" className="text-primary">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#" className="text-info">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#" className="text-danger">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* 🔹 Teacher Features Section */}
      <section
        className="py-5 bg-white"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)",
        }}
      >
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold text-primary">Teacher Excellence & Features</h2>
            <p className="text-muted">
              Our faculty goes beyond textbooks — they inspire, innovate, and motivate every learner.
            </p>
          </div>

          <div className="row g-4">
            {features.map((item, index) => (
              <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4">
                  <div className="mb-3">
                    <i
                      className={`${item.icon} text-primary fs-1`}
                      style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.1))" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
