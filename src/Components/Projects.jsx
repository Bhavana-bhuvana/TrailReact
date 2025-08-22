
 import "./Style/projects.css"; 

function Projects() {
  return (
    <div className="projects">
      <video autoPlay loop muted className="bg-video">
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <h1 className="title">Our Projects</h1>
        <p className="desc">We focus on education, healthcare, and environment-friendly initiatives 🌱</p>
        <div className="cards">
          <div className="card">📚 Education for All</div>
          <div className="card">🏥 Free Health Camps</div>
          <div className="card">🌍 Clean & Green Drives</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
