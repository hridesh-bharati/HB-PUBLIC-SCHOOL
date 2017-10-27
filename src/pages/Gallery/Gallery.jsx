import React, { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=60",
    title: "Science Exhibition",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=60",
    title: "Computer Lab",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
    title: "Coding Workshop",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=60",
    title: "Sports Day",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=60",
    title: "Cultural Fest",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=900&q=60",
    title: "Tech Fair",
  },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="container py-5">
      {/* Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-uppercase">📸 Our Gallery</h2>
        <p className="text-muted">
          Moments that inspire learning, creativity, and growth at Drishtee School.
        </p>
        <div
          className="mx-auto mb-4"
          style={{
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg, #a31545, #6a0d2d)",
            borderRadius: "10px",
          }}
        ></div>
      </div>

      {/* Gallery Grid */}
      <div className="row g-4">
        {images.map((img) => (
          <div key={img.id} className="col-sm-6 col-md-4">
            <div
              className="card border-0 shadow-sm overflow-hidden position-relative"
              style={{
                borderRadius: "15px",
                cursor: "pointer",
                transition: "transform 0.4s",
              }}
              onClick={() => setSelectedImg(img)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-100"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
              <div
                className="position-absolute bottom-0 start-0 w-100 text-white text-center py-2"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,0.7), transparent)",
                }}
              >
                <h6 className="mb-0">{img.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {selectedImg && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
          tabIndex="-1"
          onClick={() => setSelectedImg(null)}
        >
          <div className="d-flex justify-content-center align-items-center vh-100">
            <img
              src={selectedImg.src}
              alt={selectedImg.title}
              className="img-fluid rounded shadow-lg"
              style={{
                maxHeight: "80vh",
                border: "4px solid #fff",
              }}
            />
          </div>
          <button
            className="btn btn-light position-fixed top-0 end-0 m-4"
            onClick={() => setSelectedImg(null)}
          >
            ✖ Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
