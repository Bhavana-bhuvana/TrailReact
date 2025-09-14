
import "./Style/about.css";

function About() {
  return (
    <div className="about">
      <video autoPlay loop muted className="about-bg-video">
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      </video>

      <div className="about-overlay">
        <h1 className="about-title">About Our NGO</h1>
        <p className="about-intro">
          We are dedicated to making a real impact in society by focusing on education, 
          environment, and healthcare. Together, we empower communities and inspire change.
        </p>

        <div className="about-sections">
          <div className="about-card fade-in">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
              alt="Education"
            />
            <h2> Education</h2>
            <p>
              Providing quality education and scholarships to underprivileged children.
            </p>
          </div>

          <div className="about-card fade-in delay-1">
            <img
              src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e4"
              alt="Environment"
            />
            <h2> Environment</h2>
            <p>
              Planting trees, reducing plastic waste, and promoting green living.
            </p>
          </div>

          <div className="about-card fade-in delay-2">
            <img
              src="https://images.unsplash.com/photo-1580281657521-9d54d1d6a4a2"
              alt="Healthcare"
            />
            <h2> Healthcare</h2>
            <p>
              Organizing medical camps and spreading awareness on hygiene and wellness.
            </p>
          </div>
        </div>

        <div className="about-mission slide-up">
          <h2> Our Mission</h2>
          <p>
            Our mission is to create a sustainable world where every individual has access 
            to education, healthcare, and a clean environment. Join us in this journey to 
            make a difference.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

