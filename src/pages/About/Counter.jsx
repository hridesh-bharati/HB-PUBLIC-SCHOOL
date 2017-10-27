import React, { useState, useEffect, useRef } from "react";

export default function Counter() {
    const stats = [
        { number: 500, label: "Qualified Teachers", icon: "bi-person-check" },
        { number: 1900, label: "Years Of Experience", icon: "bi-hourglass-split" },
        { number: 750, label: "Students Enrolled", icon: "bi-people" },
        { number: 30, label: "Total Awards", icon: "bi-trophy" },
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCounters();
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounters = () => {
        const duration = 2500;
        const start = performance.now();

        const update = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCounts(stats.map((s) => Math.floor(eased * s.number)));

            if (progress < 1) requestAnimationFrame(update);
        };

        requestAnimationFrame(update);
    };

    return (
        <section
            ref={sectionRef}
            className="counter-section text-center py-5 position-relative"
        >
            {/* Overlay */}
            <div className="overlay"></div>

            <div className="container position-relative text-white">
                <div className="row g-4 justify-content-center">
                    {stats.map((item, i) => (
                        <div
                            key={i}
                            className="col-6 col-md-3"
                            data-aos="zoom-in"
                            data-aos-delay={i * 200} // 👈 smooth stagger delay
                        >
                            <div className="counter-card p-4 rounded-4 shadow-lg">
                                <i className={`bi ${item.icon} fs-1 text-warning mb-3`}></i>
                                <h2 className="fw-bold mb-1">{counts[i]}</h2>
                                <p className="mb-0">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS */}
            <style>{`
        .counter-section {
          background: url('/img/counter.jpg') center/cover no-repeat fixed;
          position: relative;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(4, 0, 59, 0.66) !important;
          backdrop-filter: blur(3px);
        }

        .counter-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          transition: all 0.4s ease;
        }

        .counter-card:hover {
          transform: translateY(-6px) scale(1.03);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        h2 {
          font-size: 2.4rem;
        }
      `}</style>
        </section>
    );
}
