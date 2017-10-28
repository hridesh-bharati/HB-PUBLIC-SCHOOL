import React from "react";

const Footer = () => {
    return (
        <footer
            className="text-light pt-5 position-relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(135deg, #0f172a 0%, #1e3a8a 35%, #0ea5e9 100%)",
            }}
        >
            <div className="container position-relative">
                <div className="row gy-5">
                    {/* Left Column */}
                    <div className="col-md-4 text-center text-md-start">
                        <h2
                            className="fw-bold text-uppercase mb-3"
                            style={{
                                letterSpacing: "1px",
                                textShadow: "0 3px 6px rgba(0,0,0,0.2)",
                            }}
                        >
                            HB PUBLIC SCHOOL
                        </h2>
                        <p
                            className="lead fw-medium mt-3"
                        >
                            🌟 Igniting curiosity, creativity, and confidence in every student.
                            We believe education is not just learning facts — but **building dreams**!
                        </p>
                    </div>

                    {/* Middle Column */}
                    <div className="col-md-4 text-center text-md-start">
                        <h4
                            className="fw-semibold text-uppercase mb-3 border-bottom pb-2 border-light"
                            style={{ letterSpacing: "0.5px" }}
                        >
                            🔗 Quick Links
                        </h4>
                        <ul className="list-unstyled fs-6">
                            {[
                                { text: "🏫 Home", link: "/" },
                                { text: "📘 About Us", link: "/about" },
                                { text: "🎉 Events", link: "/events" },
                                { text: "📩 Enquiry", link: "/enquiry" },
                            ].map((item, i) => (
                                <li key={i} className="mb-3">
                                    <a href={item.link} className="footer-link">
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-4 text-center text-md-start">
                        <h4
                            className="fw-semibold text-uppercase mb-3 border-bottom pb-2 border-light"
                            style={{ letterSpacing: "0.5px" }}
                        >
                            📞 Contact Us
                        </h4>
                        <ul className="list-unstyled fs-6 mb-3">
                            <li className="mb-2">
                                <i className="bi bi-geo-alt-fill me-2"></i> Patna, Bihar, India
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-telephone-fill me-2"></i> +91 98765 43210
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-envelope-fill me-2"></i>{" "}
                                hb.school@gmail.com
                            </li>
                        </ul>

                        <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                            {[
                                { icon: "facebook", color: "#3b5998" },
                                { icon: "instagram", color: "#e4405f" },
                                { icon: "twitter", color: "#1da1f2" },
                                { icon: "youtube", color: "#ff0000" },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="social-btn"
                                    style={{ "--color": s.color }}
                                    title={s.icon.charAt(0).toUpperCase() + s.icon.slice(1)}
                                >
                                    <i className={`bi bi-${s.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-light opacity-25 mt-5" />

                {/* Bottom Bar */}
                <div
                    className="text-center pb-3 fs-6 fw-semibold"
                    style={{ opacity: 0.95, letterSpacing: "0.5px" }}
                >
                    © {new Date().getFullYear()} <strong>HB PUBLIC SCHOOL</strong> — All
                    Rights Reserved 🌈
                </div>
            </div>

            {/* Decorative floating shapes */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background:
                        "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15), transparent 60%)",
                    pointerEvents: "none",
                }}
            ></div>

            <style>{`
        footer {
          font-family: 'Poppins', sans-serif;
        }

        .footer-link {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #fff8dc;
          transform: translateX(6px) scale(1.05);
          text-shadow: 0 0 10px rgba(255,255,255,0.7);
        }

        .social-btn {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          color: #fff;
          font-size: 1.3rem;
          transition: all 0.35s ease;
          backdrop-filter: blur(8px);
        }

        .social-btn:hover {
          background: var(--color);
          color: #fff;
          transform: translateY(-6px) scale(1.1);
          box-shadow: 0 6px 20px var(--color);
        }

        @media (max-width: 768px) {
          footer h2, footer h4 {
            text-align: center;
          }
          footer p, footer ul, footer .d-flex {
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
