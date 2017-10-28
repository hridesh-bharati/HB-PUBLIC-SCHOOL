import React, { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=60",
    title: "Science Exhibition",
    category: "Events",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=60",
    title: "Computer Lab",
    category: "Labs",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
    title: "Coding Workshop",
    category: "Events",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=60",
    title: "Sports Day",
    category: "Outdoor",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=60",
    title: "Cultural Fest",
    category: "Cultural",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=900&q=60",
    title: "Tech Fair",
    category: "Events",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=60",
    title: "Playground",
    category: "Outdoor",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=60",
    title: "Library",
    category: "Labs",
  },
];

const categories = ["All", "Events", "Outdoor", "Labs", "Cultural"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="container py-5">
      {/* Title Section */}
      <div className="text-center mb-5">
        <h2
          className="fw-bolder text-uppercase"
          style={{
            fontSize: "2.5rem",
            color: "maroon"
          }}
        >
          Our Gallery
        </h2>

        <p
          className="text-muted"
          style={{
            fontSize: "1.1rem",
            fontWeight: "500",
            color: "#555",
          }}
        >
          Explore moments of <span style={{ color: "#ff0057", fontWeight: "600" }}>joy</span>,{" "}
          <span style={{ color: "#ff7b00", fontWeight: "600" }}>learning</span>, and{" "}
          <span style={{ color: "#ffd500", fontWeight: "600" }}>achievement</span> at our school.
        </p>

        <div
          className="mx-auto mb-4"
          style={{
            width: "120px",
            height: "5px",
            background: "linear-gradient(90deg, #ff0057, #ff7b00, #ffd500)",
            borderRadius: "20px",
            boxShadow: "0px 0px 15px rgba(255, 150, 0, 0.6)",
          }}
        ></div>
      </div>



      {/* Tabs */}
      <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`btn px-4 py-2 fw-semibold ${selectedCategory === cat ? "text-white" : "text-dark"
              }`}
            style={{
              background:
                selectedCategory === cat
                  ? "linear-gradient(90deg, #b91c1c, #7f1d1d)"
                  : "#f3f4f6",
              border: "none",
              borderRadius: "30px",
              transition: "all 0.3s ease",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="row g-4">
        {filteredImages.map((img) => (
          <div key={img.id} className="col-sm-6 col-md-4 col-lg-3">
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
                  height: "220px",
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
            cursor: "zoom-out",
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
}
