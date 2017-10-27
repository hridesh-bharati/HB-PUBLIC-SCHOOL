import React from "react";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Tech Workshop 2025",
      date: "March 15, 2025",
      desc: "Hands-on coding workshop focusing on modern JavaScript frameworks and real-world projects.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 2,
      title: "Career Counseling Day",
      date: "April 10, 2025",
      desc: "Guidance from industry professionals to help students plan their tech careers effectively.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 3,
      title: "Annual Awards Ceremony",
      date: "June 25, 2025",
      desc: "Celebrating the success and hard work of students who achieved excellence throughout the year.",
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <div className="container my-5 py-5">
      <div className="text-center mb-5">
        <h2
          className="fw-bold"
          style={{
            color: "#7f1d1d",
            letterSpacing: "0.5px",
            textShadow: "0 1px 1px rgba(0,0,0,0.2)",
          }}
        >
          Upcoming Events
        </h2>
        <p className="text-secondary">
          Stay updated with our latest activities and special events.
        </p>
      </div>

      <div className="row g-4">
        {events.map((event) => (
          <div className="col-lg-4 col-md-6" key={event.id}>
            <div
              className="card border-0 rounded-4 shadow-lg h-100 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #fff, #ffe4e6)",
                transition: "all 0.4s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
            >
              <div className="position-relative">
                <img
                  src={event.image}
                  className="card-img-top"
                  alt={event.title}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderBottom: "4px solid #b91c1c",
                  }}
                />
                <span
                  className="position-absolute top-0 end-0 m-3 badge text-white fw-semibold"
                  style={{
                    background: "#b91c1c",
                    borderRadius: "20px",
                    padding: "8px 14px",
                    fontSize: "0.85rem",
                  }}
                >
                  {event.date}
                </span>
              </div>

              <div className="card-body p-4">
                <h5 className="fw-bold mb-2" style={{ color: "#9f1239" }}>
                  {event.title}
                </h5>
                <p className="text-muted mb-4">{event.desc}</p>
                <button
                  className="btn px-4 py-2"
                  style={{
                    background: "linear-gradient(90deg, #b91c1c, #7f1d1d)",
                    border: "none",
                    color: "#fff",
                    borderRadius: "30px",
                    fontSize: "0.9rem",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
