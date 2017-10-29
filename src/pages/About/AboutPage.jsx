import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

export default function AboutPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="about-page">
            {/* 🌟 Enhanced Hero Section */}
            <section
                className="text-white text-center py-5 position-relative overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, #0ea5e9 0%, #1e3a8a 100%)",
                    minHeight: "70vh",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* ✨ Glow Effects */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background:
                            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1), transparent 70%)",
                        zIndex: 1,
                    }}
                ></div>

                {/* 🔹 Glass Overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backdropFilter: "blur(10px)",
                        opacity: 0.08,
                        zIndex: 2,
                    }}
                ></div>

                {/* 🧭 Content */}
                <div className="container position-relative z-3" data-aos="zoom-in" data-aos-duration="800">
                    <h1
                        className="fw-bold display-4 display-md-3 mb-3"
                        style={{
                            letterSpacing: "1px",
                            textShadow: "0 3px 15px rgba(0,0,0,0.3)",
                        }}
                    >
                        About <span className="text-warning">HB Public School</span>
                    </h1>
                    <p
                        className="lead mx-auto"
                        style={{
                            maxWidth: "700px",
                            opacity: 0.9,
                            fontSize: "1.1rem",
                        }}
                    >
                        Inspiring young minds to dream, discover, and achieve excellence — where education
                        meets innovation, and every student shines with purpose.
                    </p>

                    <div className="mt-4">
                        <a
                            href="#mission"
                            className="btn btn-light btn-lg px-4 rounded-pill shadow-sm"
                            style={{
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* 🌈 Animated Gradient Line */}
                <div
                    className="position-absolute bottom-0 start-0 w-100"
                    style={{
                        height: "5px",
                        background:
                            "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1), transparent)",
                        animation: "moveLine 3s linear infinite",
                    }}
                ></div>

                <style>{`
    @keyframes moveLine {
      0% { transform: translateX(-50%); opacity: 0.6; }
      100% { transform: translateX(100%); opacity: 1; }
    }
  `}</style>
            </section>

            {/* 🔹 Our Journey */}
            <section className="py-5 bg-light">
                <div className="container" data-aos="fade-up">
                    <div className="row align-items-center g-4">
                        <div className="col-md-6">
                            <img
                                src="https://cdn.pixabay.com/photo/2016/03/26/22/13/school-1284256_960_720.jpg"
                                alt="School Building"
                                className="img-fluid rounded-4 shadow"
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 className="fw-bold text-primary mb-3">Our Journey</h2>
                            <p className="text-muted">
                                Founded in <strong>2005</strong>, HB Public School began as a
                                small educational initiative and has since grown into a
                                full-fledged institution recognized for its excellence,
                                discipline, and modern approach to learning.
                            </p>
                            <p className="text-muted">
                                With over a decade of experience, we’ve cultivated generations
                                of learners who excel academically, socially, and personally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 Principal Message */}
            <section className="py-5">
                <div className="container" data-aos="zoom-in">
                    <div className="row align-items-center g-4">
                        <div className="col-md-5 text-center">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                alt="Principal"
                                className="img-fluid rounded-circle shadow"
                                style={{ maxWidth: "220px" }}
                            />
                        </div>
                        <div className="col-md-7">
                            <h2 className="fw-bold text-primary mb-3">
                                Message from the Principal
                            </h2>
                            <p className="lead text-muted">
                                “Education is the most powerful weapon which you can use to
                                change the world.” — At HB Public School, we strive to provide a
                                nurturing environment where students grow intellectually,
                                emotionally, and morally.
                            </p>
                            <p className="fw-semibold mb-0">— Mrs. Anjali Sharma</p>
                            <small className="text-secondary">
                                Principal, HB Public School
                            </small>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 Vision & Mission */}
            <section className="py-5 text-center bg-light">
                <div className="container" data-aos="fade-up">
                    <h2 className="fw-bold mb-4 text-primary">Our Vision & Mission</h2>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="p-4 bg-white rounded-3 shadow-sm h-100" data-aos="fade-right">
                                <i className="bi bi-eye-fill display-4 text-info mb-3"></i>
                                <h4 className="fw-semibold mb-2">Our Vision</h4>
                                <p className="text-muted mb-0">
                                    To build a future generation of thinkers, innovators, and
                                    leaders who embody compassion and curiosity.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-4 bg-white rounded-3 shadow-sm h-100" data-aos="fade-left">
                                <i className="bi bi-bullseye display-4 text-danger mb-3"></i>
                                <h4 className="fw-semibold mb-2">Our Mission</h4>
                                <p className="text-muted mb-0">
                                    To deliver holistic education blending academics, sports,
                                    technology, and creativity for all-round growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 Why Choose Us */}
            <section className="py-5 text-center">
                <div className="container" data-aos="fade-up">
                    <h2 className="fw-bold text-primary mb-4">Why Choose Us?</h2>
                    <div className="row g-4">
                        {[
                            {
                                icon: "bi-mortarboard",
                                title: "Quality Education",
                                text: "CBSE-aligned curriculum focusing on academic and practical learning.",
                            },
                            {
                                icon: "bi-people",
                                title: "Expert Teachers",
                                text: "Highly qualified and passionate faculty who nurture every student.",
                            },
                            {
                                icon: "bi-globe2",
                                title: "Global Exposure",
                                text: "International programs and digital learning opportunities.",
                            },
                            {
                                icon: "bi-stars",
                                title: "Skill Development",
                                text: "Training in coding, leadership, and creative thinking.",
                            },
                            {
                                icon: "bi-heart-pulse",
                                title: "Health & Wellness",
                                text: "Counseling, yoga, and mental wellness programs.",
                            },
                            {
                                icon: "bi-shield-check",
                                title: "Safe Campus",
                                text: "24/7 CCTV monitoring and secure transport facilities.",
                            },
                        ].map((f, i) => (
                            <div className="col-md-4 col-sm-6" key={i}>
                                <div className="p-4 bg-light rounded-3 shadow-sm h-100" data-aos="zoom-in">
                                    <i className={`bi ${f.icon} text-primary display-6 mb-3`}></i>
                                    <h6 className="fw-bold mb-2">{f.title}</h6>
                                    <p className="text-muted small mb-0">{f.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 Infrastructure */}
            <section className="py-5 bg-light">
                <div className="container" data-aos="fade-up">
                    <h2 className="fw-bold text-primary text-center mb-4">
                        Our World-Class Infrastructure
                    </h2>
                    <div className="row g-4">
                        {[
                            {
                                img: "https://cdn.pixabay.com/photo/2016/03/27/21/16/classroom-1284340_960_720.jpg",
                                title: "Smart Classrooms",
                            },
                            {
                                img: "https://cdn.pixabay.com/photo/2017/01/31/19/15/computer-2025792_960_720.jpg",
                                title: "Digital Computer Lab",
                            },
                            {
                                img: "https://cdn.pixabay.com/photo/2016/03/09/09/22/library-1245959_960_720.jpg",
                                title: "Knowledge Library",
                            },
                            {
                                img: "https://cdn.pixabay.com/photo/2015/09/05/22/46/track-925120_960_720.jpg",
                                title: "Sports & Playground",
                            },
                            {
                                img: "https://cdn.pixabay.com/photo/2017/05/15/21/40/bus-2310213_1280.jpg",
                                title: "Safe School Transport",
                            },
                            {
                                img: "https://cdn.pixabay.com/photo/2017/03/12/15/33/canteen-2130672_1280.jpg",
                                title: "Healthy Cafeteria",
                            },
                        ].map((item, i) => (
                            <div className="col-md-4 col-sm-6" key={i}>
                                <div className="card shadow-sm border-0 h-100" data-aos="flip-left">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="card-img-top rounded-top"
                                        style={{ height: "180px", objectFit: "cover" }}
                                    />
                                    <div className="card-body text-center">
                                        <h6 className="fw-semibold">{item.title}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 Co-Curricular Programs */}
            <section className="py-5 text-center">
                <div className="container" data-aos="fade-up">
                    <h2 className="fw-bold text-primary mb-4">
                        Programs & Co-Curricular Activities
                    </h2>
                    <p className="text-muted mb-5">
                        Beyond academics — nurturing creativity, teamwork, and innovation.
                    </p>
                    <div className="row g-4">
                        {[
                            { icon: "bi-music-note-beamed", title: "Music & Dance Club" },
                            { icon: "bi-palette", title: "Art & Craft Club" },
                            { icon: "bi-code-slash", title: "Coding Club" },
                            { icon: "bi-tree", title: "Eco Club" },
                            { icon: "bi-journal-text", title: "Literary Society" },
                            { icon: "bi-basketball", title: "Sports Club" },
                        ].map((a, i) => (
                            <div className="col-md-4 col-sm-6" key={i}>
                                <div className="p-4 bg-light rounded-3 shadow-sm h-100" data-aos="zoom-in">
                                    <i className={`bi ${a.icon} text-success display-6 mb-3`}></i>
                                    <h6 className="fw-semibold">{a.title}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 Events & Celebrations */}
            <section className="py-5 bg-light text-center">
                <div className="container" data-aos="fade-up">
                    <h2 className="fw-bold text-primary mb-4">Annual Events & Celebrations</h2>
                    <div className="row g-4">
                        {[
                            {
                                img: "https://cdn.pixabay.com/photo/2015/03/26/09/39/students-690402_960_720.jpg",
                                title: "Annual Day Celebration",
                            },
                            {
                                img: "https://cdn.pixabay.com/photo/2018/02/20/10/50/science-3162497_960_720.jpg",
                                title: "Science Exhibition",
                            },
                            {
                                img: "https://cdn.pixabay.com/photo/2016/11/21/14/57/school-1841553_960_720.jpg",
                                title: "Sports Meet",
                            },
                            {
                                img: "https://cdn.pixabay.com/photo/2015/07/02/10/09/festival-828804_960_720.jpg",
                                title: "Cultural Festival",
                            },
                        ].map((e, i) => (
                            <div className="col-md-3 col-6" key={i}>
                                <div className="card border-0 shadow h-100" data-aos="flip-up">
                                    <img
                                        src={e.img}
                                        alt={e.title}
                                        className="card-img-top rounded-top"
                                        style={{ height: "150px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h6 className="fw-semibold">{e.title}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 Better Learning Environment */}
            <section className="py-5" data-aos="fade-up">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-primary">Better Learning Environment</h2>
                        <p className="text-muted">
                            A perfect balance between technology, nature, and emotional wellbeing.
                        </p>
                    </div>
                    <div className="row align-items-center g-4">
                        <div className="col-md-6">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">🌿 Eco-friendly campus</li>
                                <li className="list-group-item">💻 Smart learning labs</li>
                                <li className="list-group-item">🎯 Individual mentoring</li>
                                <li className="list-group-item">🧘 Yoga & wellness programs</li>
                                <li className="list-group-item">🤝 Positive peer culture</li>
                            </ul>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                                src="https://cdn.pixabay.com/photo/2016/02/19/10/00/children-1209826_960_720.jpg"
                                alt="Happy Students"
                                className="img-fluid rounded-4 shadow"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 Call to Action (Improved) */}
            <section
                className="position-relative text-white text-center py-5 overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                data-aos="zoom-in"
            >
                {/* Overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(14,165,233,0.85) 0%, rgba(30,58,138,0.95) 100%)",
                    }}
                ></div>

                <div className="container position-relative z-2">
                    <i
                        className="bi bi-stars display-4 mb-3 text-warning"
                        data-aos="zoom-in-up"
                    ></i>
                    <h2
                        className="fw-bold display-6 mb-3"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Join the HB Public School Family
                    </h2>
                    <p
                        className="lead mx-auto mb-4"
                        style={{ maxWidth: "700px" }}
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        We don’t just educate — we inspire.
                        Be part of a nurturing environment that builds bright futures, values,
                        and lifelong memories.
                    </p>

                    <div data-aos="zoom-in-up" data-aos-delay="300">
                        <a
                            href="/enquiry"
                            className="btn btn-light px-4 py-2 fw-semibold me-2 shadow-sm"
                        >
                            📩 Enquire Now
                        </a>
                        <a
                            href="/admission"
                            className="btn btn-outline-light px-4 py-2 fw-semibold"
                        >
                            🎓 Apply for Admission
                        </a>
                    </div>
                </div>

                {/* Decorative floating shapes */}
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: "150px",
                        height: "150px",
                        background: "rgba(255,255,255,0.15)",
                        top: "20%",
                        left: "10%",
                        filter: "blur(60px)",
                    }}
                ></div>
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: "180px",
                        height: "180px",
                        background: "rgba(255,255,255,0.1)",
                        bottom: "10%",
                        right: "15%",
                        filter: "blur(80px)",
                    }}
                ></div>
            </section>

        </div>
    );
}
