import React, { useEffect, useState } from "react";
import { fetchImages } from "../../api/ImageApi";
import gsap from "gsap";
import "./MagicBento.css";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 🖼️ Fetch Unsplash images
  useEffect(() => {
    fetchImages().then(setImages);
  }, []);

  // 🎬 Entry + Glow Animations
  useEffect(() => {
    if (images.length === 0) return;

    const cards = document.querySelectorAll(".magic-bento-card");

    // Smooth entry
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.85, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.6,
        ease: "power3.out",
        stagger: 0.15,
      }
    );

    // Glow + ripple effect setup
    cards.forEach((card, i) => {
      const handleMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--glow-x", `${x}px`);
        card.style.setProperty("--glow-y", `${y}px`);
        card.style.setProperty("--glow-intensity", 1);
      };

      const handleLeave = () => {
        card.style.setProperty("--glow-intensity", 0);
      };

      const handleClick = (e) => {
        const particle = document.createElement("span");
        particle.className = "particle";
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        Object.assign(particle.style, {
          left: `${x}px`,
          top: `${y}px`,
          width: "10px",
          height: "10px",
        });

        card.appendChild(particle);
        gsap.to(particle, {
          scale: 6,
          opacity: 0,
          duration: 1.3,
          ease: "power3.out",
          onComplete: () => particle.remove(),
        });
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
      card.addEventListener("click", handleClick);

      // 🌈 Auto glow pulse loop
      gsap.timeline({ repeat: -1, repeatDelay: 2 + i * 0.2 })
        .to(card, {
          "--glow-intensity": 0.7,
          scale: 1.04,
          boxShadow: "0 0 25px rgba(132,0,255,0.35)",
          duration: 2.5,
          ease: "power2.inOut",
        })
        .to(card, {
          "--glow-intensity": 0,
          scale: 1,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 2.5,
          ease: "power2.inOut",
        });
    });

    // Cleanup listeners
    return () => {
      cards.forEach((card) => card.replaceWith(card.cloneNode(true)));
    };
  }, [images]);

  return (
    <section className="bento-section">
      <div className="card-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className={`magic-bento-card magic-bento-card--border-glow ${hoveredIndex === index ? "active" : ""
              }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={img.download_url}
              alt={img.author}
              className="gallery-image"
            />
            {/* <div className="magic-bento-caption">{img.author}</div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
