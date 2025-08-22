import "./Style/home.css";

function Home() {
  return (
    <div className="home">
      <video autoPlay loop muted className="bg-video">
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <h1>Welcome to Our NGO</h1>
        <p>Together we can make the world a better place 🌍</p>
        <button className="explore-btn">Explore More</button>
      </div>
    </div>
  );
}

export default Home;
