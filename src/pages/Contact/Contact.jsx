import React, { useState } from "react";

export default function Enquiry() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message)
      return alert("Please fill all fields");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section className="enquiry-section py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* LEFT CARD */}
          <div className="col-lg-5">
            <div className="card enquiry-card border-0 shadow-lg h-100">
              <div className="position-relative">
                <img
                  src="https://source.unsplash.com/900x600/?students,learning,school"
                  className="card-img-top"
                  alt="Enquiry"
                  style={{ borderRadius: "10px", objectFit: "cover", height: "250px" }}
                />

                <div className="overlay"></div>
                <h4 className="overlay-title text-white fw-bold">
                  Let’s Connect
                </h4>
              </div>
              <div className="card-body">
                <p className="text-muted mb-4">
                  Reach out for admissions, courses, or partnership queries.
                </p>

                <div className="info-item mb-3">
                  <i className="bi bi-telephone-fill text-danger"></i>
                  <div>
                    <h6 className="fw-semibold mb-0">+91 98765 43210</h6>
                    <small className="text-muted">Mon–Sat, 9AM–6PM</small>
                  </div>
                </div>

                <div className="info-item mb-3">
                  <i className="bi bi-envelope-fill text-danger"></i>
                  <div>
                    <h6 className="fw-semibold mb-0">
                      admissions@myschool.com
                    </h6>
                    <small className="text-muted">For all admission help</small>
                  </div>
                </div>

                <div className="info-item mb-0">
                  <i className="bi bi-geo-alt-fill text-danger"></i>
                  <div>
                    <h6 className="fw-semibold mb-0">
                      123 Learning Lane, City
                    </h6>
                    <small className="text-muted">
                      Near City Center, India
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-4 p-4">
              <h3 className="fw-bold text-danger mb-3">Quick Enquiry</h3>
              <p className="text-muted mb-4">
                Send us a quick message — we’ll get back within 24 hours!
              </p>

              {submitted && (
                <div className="alert alert-success small" role="alert">
                  ✅ Thank you {form.name}, your enquiry has been received!
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label small">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded-3"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-3"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small">Message</label>
                  <textarea
                    name="message"
                    className="form-control rounded-3"
                    rows="3"
                    placeholder="Type your message..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-danger w-100 py-2 fw-semibold"
                >
                  {submitted ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .enquiry-section {
          background: linear-gradient(135deg, #fff8f8, #ffe9ec);
        }
        .enquiry-card {
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .enquiry-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .enquiry-card img {
          height: 250px;
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(163, 21, 69, 0.5);
        }
        .overlay-title {
          position: absolute;
          bottom: 10px; left: 20px;
          font-size: 1.5rem;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .info-item i {
          font-size: 1.5rem;
          background: #ffe4e4;
          padding: 10px;
          border-radius: 50%;
        }
        .form-control {
          border: 1px solid #ddd;
        }
        .form-control:focus {
          border-color: #a31545;
          box-shadow: 0 0 0 0.25rem rgba(163, 21, 69, 0.25);
        }
      `}</style>
    </section>
  );
}
