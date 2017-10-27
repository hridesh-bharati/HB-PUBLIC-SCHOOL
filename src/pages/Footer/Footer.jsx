import React from "react";

const Footer = () => {
    return (
        <footer
            className="text-light pt-5"
            style={{
                background: "linear-gradient(135deg, #6e6bffff 0%, #04b9d9ff 50%, #5b17b5ff 100%)",
            }}
        >
            <div className="container">
                <div className="row gy-4">
                    {/* Left Column */}
                    <div className="col-md-4">
                        <h3 className="fw-bold text-uppercase">HB PUBLIC School</h3>
                        <p className="mt-3 small" style={{ opacity: 0.95, lineHeight: "1.6" }}>
                            Igniting young minds through <strong>innovation</strong>, <strong>discipline</strong>,
                            and <strong>excellence</strong>. Join our vibrant learning community today!
                        </p>
                    </div>

                    {/* Middle Column */}
                    <div className="col-md-4">
                        <h5 className="fw-semibold text-uppercase mb-3 border-bottom pb-2 border-light">
                            Quick Links
                        </h5>
                        <ul className="list-unstyled small">
                            <li className="mb-2">
                                <a href="/" className="footer-link">
                                    🏫 Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/about" className="footer-link">
                                    📘 About Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/events" className="footer-link">
                                    🎉 Events
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/enquiry" className="footer-link">
                                    📩 Enquiry
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-4">
                        <h5 className="fw-semibold text-uppercase mb-3 border-bottom pb-2 border-light">
                            Contact Us
                        </h5>
                        <ul className="list-unstyled small mb-3">
                            <li className="mb-2">
                                <i className="bi bi-geo-alt-fill me-2"></i> Patna, Bihar, India
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-telephone-fill me-2"></i> +91 98765 43210
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-envelope-fill me-2"></i> drishtee.school@gmail.com
                            </li>
                        </ul>

                        <div className="d-flex gap-2">
                            <a href="#" className="social-btn" title="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="social-btn" title="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="social-btn" title="Twitter">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-light opacity-25 mt-5" />

                {/* Bottom Bar */}
                <div className="text-center pb-3 small">
                    © {new Date().getFullYear()} <strong>HB PUBLIC School</strong> — All Rights Reserved.
                </div>
            </div>

            <style>{`
        footer {
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .footer-link {
          color: #fff;
          text-decoration: none;
          transition: 0.3s;
        }
        .footer-link:hover {
          color: #ffe6e6;
          padding-left: 4px;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          color: #fff;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }

        .social-btn:hover {
          background: #fff;
          color: #d90429;
          transform: translateY(-3px);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 768px) {
          footer h3, footer h5 {
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
