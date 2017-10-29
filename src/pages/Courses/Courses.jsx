import React, { useEffect } from "react";
import Slider from "react-slick";
import {
  BookOpen,
  Atom,
  Calculator,
  Palette,
  Music,
  Globe,
  HeartPulse,
  Laptop,
  Users,
  Trophy,
  Library,
  GraduationCap,
  FlaskConical,
  ClipboardList,
  CalendarDays,
  FileText,
  Church,
  Leaf,
  School,
} from "lucide-react";
import AOS from "aos";

export default function Courses() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // 🎓 Subjects
  const subjects = [
    { icon: <BookOpen className="text-primary" size={36} />, title: "English Literature", desc: "Enhancing reading, writing, and communication skills." },
    { icon: <Calculator className="text-success" size={36} />, title: "Mathematics", desc: "Logical problem-solving and analytical skill development." },
    { icon: <Atom className="text-info" size={36} />, title: "Science", desc: "Hands-on learning in Physics, Chemistry, and Biology labs." },
    { icon: <Globe className="text-warning" size={36} />, title: "Social Studies", desc: "Understanding history, geography, and civic values." },
    { icon: <Palette className="text-danger" size={36} />, title: "Art & Craft", desc: "Encouraging imagination and creativity through art." },
    { icon: <Music className="text-secondary" size={36} />, title: "Music & Dance", desc: "Expressing emotions and culture through rhythm and melody." },
    { icon: <HeartPulse className="text-danger" size={36} />, title: "Physical Education", desc: "Developing fitness, teamwork, and sportsmanship." },
    { icon: <Laptop className="text-primary" size={36} />, title: "Computer Science", desc: "Digital literacy, coding, and safe internet practices." },
  ];

  // 🏫 Features (for slider)
  const features = [
    { icon: <FlaskConical className="text-primary" size={36} />, title: "Modern Science Labs", img: "/img/features/lab.jpg", desc: "Equipped with the latest tools for experiments." },
    { icon: <Library className="text-success" size={36} />, title: "Digital Library", img: "/img/features/library.jpg", desc: "Thousands of books and e-resources for students." },
    { icon: <GraduationCap className="text-info" size={36} />, title: "Qualified Teachers", img: "/img/features/teachers.jpg", desc: "Experienced and dedicated faculty for every subject." },
    { icon: <Users className="text-warning" size={36} />, title: "Smart Classrooms", img: "/img/features/smartclass.jpg", desc: "Interactive learning using smart boards and visuals." },
    { icon: <Trophy className="text-danger" size={36} />, title: "Sports & Activities", img: "/img/features/sports.jpg", desc: "Indoor and outdoor sports for overall growth." },
    { icon: <School className="text-success" size={36} />, title: "Eco-Friendly Campus", img: "/img/features/campus.jpg", desc: "Green and safe learning environment for all students." },
  ];

  // 🧠 Student Programs
  const programs = [
    { icon: <ClipboardList className="text-primary" size={32} />, title: "Student Projects", desc: "Science, IT & Art projects for creativity and innovation." },
    { icon: <Users className="text-success" size={32} />, title: "Tuition & Mentoring", desc: "Extra academic help and doubt-clearing sessions." },
    { icon: <School className="text-warning" size={32} />, title: "Clubs & Societies", desc: "Debate, Science, Art & Eco clubs to enhance learning." },
    { icon: <CalendarDays className="text-danger" size={32} />, title: "Parent Meetings", desc: "Regular PTMs for parent-student-teacher collaboration." },
  ];

  // 📅 Events
  const events = [
    { icon: <Trophy className="text-warning" size={32} />, title: "Annual Sports Meet", desc: "Encouraging participation and team spirit." },
    { icon: <Music className="text-info" size={32} />, title: "Cultural Fest", desc: "A platform for talent showcase and creativity." },
    { icon: <Church className="text-danger" size={32} />, title: "Morning Prayer & Assembly", desc: "Instilling discipline and moral values." },
    { icon: <Leaf className="text-success" size={32} />, title: "Environment Day", desc: "Plantation drives and eco-awareness programs." },
  ];

  // 📘 Notes
  const notes = [
    { icon: <FileText className="text-primary" size={32} />, title: "Study Materials", desc: "Downloadable PDF notes for all subjects." },
    { icon: <FileText className="text-success" size={32} />, title: "Homework Sheets", desc: "Weekly assignments and worksheets." },
    { icon: <FileText className="text-danger" size={32} />, title: "Exam Papers", desc: "Previous year papers and practice sets." },
  ];

  // 🌳 Environment
  const environment = {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=60",
    title: "A Peaceful and Green Learning Environment",
    desc: "Our campus provides a safe, eco-friendly atmosphere surrounded by greenery, clean air, and a positive learning vibe. Students enjoy open playgrounds, smart classes, labs, and a nurturing environment that promotes holistic development.",
  };

  // 🌀 React Slick Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-5 bg-light" id="academics">
      <div className="container text-center">
        <h2 className="fw-bold mb-3" data-aos="fade-up">
          Our <span className="text-primary">Academics & Campus Life</span>
        </h2>
        <p className="text-muted mb-5" data-aos="fade-up" data-aos-delay="100">
          HB Public School focuses on quality education, creativity, discipline, and all-round development of students.
        </p>

        {/* 🎓 Subjects */}
        <div className="row g-4 mb-5" data-aos="fade-up">
          {subjects.map((s, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4 hover-shadow">
                {s.icon}
                <h5 className="fw-semibold mt-3">{s.title}</h5>
                <p className="text-muted small">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🏫 School Features Slider */}
        <h3 className="fw-bold text-primary mb-4" data-aos="fade-up">
          School Features
        </h3>
        <div data-aos="zoom-in-up">
          <Slider {...sliderSettings}>
            {features.map((f, i) => (
              <div key={i} className="px-3">
                <div className="card border-0 shadow-sm h-100 rounded-4">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="card-img-top rounded-top-4"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    {f.icon}
                    <h6 className="fw-bold mt-2">{f.title}</h6>
                    <p className="text-muted small">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* 🧠 Student Programs */}
        <h3 className="fw-bold text-primary mb-4 mt-5" data-aos="fade-up">
          Student Programs
        </h3>
        <div className="row g-4 mb-5" data-aos="fade-up">
          {programs.map((p, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm p-4 rounded-4">
                {p.icon}
                <h6 className="fw-bold mt-2">{p.title}</h6>
                <p className="text-muted small">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 📅 Events Accordion */}
        <h3 className="fw-bold text-primary mb-4" data-aos="fade-up">
          Events & Activities
        </h3>
        <div className="accordion mb-5" id="eventsAccordion" data-aos="zoom-in">
          {events.map((e, i) => (
            <div className="accordion-item" key={i}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#event${i}`}
                >
                  {e.icon}
                  <span className="ms-2 fw-bold">{e.title}</span>
                </button>
              </h2>
              <div id={`event${i}`} className="accordion-collapse collapse" data-bs-parent="#eventsAccordion">
                <div className="accordion-body text-muted">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 📘 Notes */}
        <h3 className="fw-bold text-primary mb-4" data-aos="fade-up">
          Study Notes & PDFs
        </h3>
        <div className="row g-4 mb-5" data-aos="fade-up">
          {notes.map((n, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className="card border-0 shadow-sm p-4 rounded-4">
                {n.icon}
                <h6 className="fw-bold mt-2">{n.title}</h6>
                <p className="text-muted small">{n.desc}</p>
                <button className="btn btn-outline-primary btn-sm mt-2">Download</button>
              </div>
            </div>
          ))}
        </div>

        {/* 🌳 Environment */}
        <div className="row align-items-center mt-5" data-aos="fade-up">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={environment.image} alt="Campus Environment" className="img-fluid rounded-4 shadow-sm" />
          </div>
          <div className="col-md-6 text-start">
            <h3 className="fw-bold text-primary">{environment.title}</h3>
            <p className="text-muted mt-3">{environment.desc}</p>
            <button className="btn btn-primary mt-2">Learn More</button>
          </div>
        </div>

        
      </div>
    </section>
  );
}
