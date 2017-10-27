import React from "react";

export default function About() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left image */}
          <div className="col-lg-6 position-relative">
            <div className="about-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=60"
                alt="About Us"
                className="img-fluid rounded-4 shadow-lg about-img"
              />
              <div className="about-badge">
                <i className="bi bi-award-fill me-2"></i>10+ Years of Excellence
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="col-lg-6">
            <h6 className="text-uppercase fw-bold text-primary mb-2">
              About Our Institute
            </h6>
            <h2 className="fw-bold mb-3 lh-sm">
              Empowering Students with <span className="text-gradient">Future-Ready Skills</span>
            </h2>
            <p className="text-muted mb-4">
              We are a modern learning platform that helps students gain real-world
              skills through interactive courses, expert mentorship, and hands-on
              projects. Our mission is to make education accessible, engaging, and
              effective for everyone.
            </p>

            <div className="feature-list">
              <div className="d-flex align-items-start mb-3">
                <div className="icon-box bg-primary-subtle text-primary">
                  <i className="bi bi-mortarboard"></i>
                </div>
                <div>
                  <h6 className="fw-semibold mb-1">Skilled Instructors</h6>
                  <p className="text-muted mb-0">
                    Learn from top educators with years of industry experience.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <div className="icon-box bg-success-subtle text-success">
                  <i className="bi bi-laptop"></i>
                </div>
                <div>
                  <h6 className="fw-semibold mb-1">Interactive Learning</h6>
                  <p className="text-muted mb-0">
                    Hands-on exercises, quizzes, and projects for deeper learning.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="icon-box bg-warning-subtle text-warning">
                  <i className="bi bi-globe2"></i>
                </div>
                <div>
                  <h6 className="fw-semibold mb-1">Global Recognition</h6>
                  <p className="text-muted mb-0">
                    Earn globally recognized certificates after course completion.
                  </p>
                </div>
              </div>
            </div>

            <button className="btn btn-primary rounded-pill px-4 py-2 mt-4 shadow-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .about-section {
          background: linear-gradient(180deg, #f9fafb 0%, #fff 100%);
        }
        .about-img-wrapper {
          position: relative;
        }
        .about-img {
          transition: transform 0.4s ease;
        }
        .about-img:hover {
          transform: scale(1.03);
        }
        .about-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: #0d6efd;
          color: #fff;
          padding: 8px 14px;
          border-radius: 30px;
          font-size: 0.9rem;
          box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
        }
        .icon-box {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-right: 15px;
        }
        .text-gradient {
          background: linear-gradient(45deg, #0d6efd, #6610f2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
