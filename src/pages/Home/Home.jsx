import React from "react";
import Slider from "./Slider.jsx";
import About from "../About/About.jsx";
import Counter from "../About/Counter.jsx";
import Testimonials from "./Testimonial.jsx";
import Events from "./Events.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import Gallery from "../Gallery/Gallery.jsx";
export default function Home() {
  const features = [
    {
      icon: "🎓",
      title: "Scholarship Facility",
      desc: "Rewarding excellence through merit-based scholarships for bright students.",
    },
    {
      icon: "💻",
      title: "Smart Classrooms",
      desc: "Modern learning spaces equipped with interactive digital boards and multimedia content.",
    },
    {
      icon: "📘",
      title: "E-Learning Portal",
      desc: "24x7 access to course materials, assignments, and recorded lectures for better flexibility.",
    },
    {
      icon: "🌍",
      title: "Global Certification",
      desc: "Gain globally recognized certificates and enhance your international academic exposure.",
    },
    {
      icon: "🤝",
      title: "Expert Mentorship",
      desc: "Guidance from experienced teachers who inspire, motivate, and help students achieve success.",
    },
    {
      icon: "🎯",
      title: "Career Guidance",
      desc: "Personalized counseling sessions to guide students toward the right academic and career paths.",
    },
  ];

  return (
    <div>
      <Slider />

      {/* ===== Features Section ===== */}
      <section className="features-section text-center py-5">
        <div className="container">
          <h2 className="fw-bold text-maroon mb-2">Our Key Features</h2>
          <p className="text-secondary mb-5">
            Designed to provide excellence in education, innovation, and holistic development.
          </p>

          <div className="row g-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="feature-card p-4 h-100">
                  <div className="feature-icon mb-3 mx-auto">{item.icon}</div>
                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Counter />
      <Testimonials />
      <Events />
      <Gallery />
      <Contact />
      <Footer />

      {/* ==== Custom Styles ==== */}
      <style>{`
        .features-section {
          background: linear-gradient(180deg, #fff 0%, #f9f9f9 100%);
          position: relative;
          overflow: hidden;
        }

        .feature-card {
          background: #fff;
          border-radius: 16px;
          transition: all 0.35s ease;
          box-shadow: 0 3px 10px rgba(0,0,0,0.05);
          cursor: pointer;
          position: relative;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ffdf7e 0%, #ffc107 100%);
          border-radius: 16px;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .feature-card:hover::before {
          opacity: 0.15;
        }

        .feature-card:hover {
          transform: translateY(-8px) rotateX(2deg) rotateY(2deg);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.12);
        }

        .feature-icon {
          font-size: 2.8rem;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffcc00, #ff8800);
          color: #7b1113;
          box-shadow: 0 0 15px rgba(255, 200, 0, 0.4);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1);
          box-shadow: 0 0 25px rgba(255, 200, 0, 0.7);
        }

        .text-maroon {
          color: #7b1113 !important;
        }

        @media (max-width: 767px) {
          .feature-icon {
            font-size: 2.3rem;
            width: 70px;
            height: 70px;
          }
        }
      `}</style>
    </div>
  );
}
