import React from "react";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Annual Sports Day 2025",
      date: "January 20, 2025",
      desc: "A grand celebration of sportsmanship where students participate in various athletic events and games.",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "February 18, 2025",
      desc: "Students showcase their creativity and innovation through working science models and projects.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 3,
      title: "Cultural Fest 2025",
      date: "April 5, 2025",
      desc: "A colorful day filled with music, dance, drama, and performances celebrating India’s rich culture.",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting",
      date: "July 12, 2025",
      desc: "An important interaction session between teachers and parents to discuss students' progress and development.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 5,
      title: "Independence Day Celebration",
      date: "August 15, 2025",
      desc: "Flag hoisting, patriotic performances, and speeches to honor the nation’s spirit of freedom.",
      image:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 6,
      title: "Annual Day Function",
      date: "December 22, 2025",
      desc: "A grand event to celebrate the achievements of our students with awards, performances, and joy.",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
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
          Upcoming School Events
        </h2>
        <p className="text-secondary">
          Stay updated with our latest school activities and celebrations.
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
