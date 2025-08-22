// const About = () => {
//   return (
//     <div className="w-full flex flex-col items-center space-y-16">

//       {/* Hero Section */}
//       <section className="text-center max-w-4xl">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
//         <p className="text-lg text-gray-600">
//           We are a non-profit organization committed to making a difference in society
//           through impactful projects, community service, and sustainable initiatives.
//         </p>
//       </section>

//       {/* Mission Section */}
//       <section className="bg-white shadow-md rounded-2xl p-8 max-w-5xl">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
//         <p className="text-gray-600 leading-relaxed">
//           Our mission is to bring people together to create meaningful change. 
//           Through education, awareness, and hands-on projects, we empower communities 
//           to thrive and grow stronger.
//         </p>
//         <img
//           src="https://source.unsplash.com/1000x400/?community,people"
//           alt="Mission"
//           className="mt-6 rounded-xl shadow"
//         />
//       </section>

//       {/* Vision & Values Section */}
//       <section className="bg-gradient-to-r from-indigo-100 to-pink-100 p-10 rounded-2xl max-w-5xl">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision & Values</h2>
//         <ul className="list-disc list-inside text-gray-700 space-y-2">
//           <li>Empowering individuals through knowledge.</li>
//           <li>Fostering sustainable development.</li>
//           <li>Promoting equality and inclusivity.</li>
//           <li>Encouraging collaboration and innovation.</li>
//         </ul>
//       </section>

//       {/* Team Section */}
//       <section className="max-w-6xl text-center">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {["Alice", "Bob", "Charlie"].map((member, index) => (
//             <div key={index} className="bg-white shadow rounded-xl p-6">
//               <img
//                 src={`https://source.unsplash.com/200x200/?portrait,person,${index}`}
//                 alt={member}
//                 className="rounded-full w-32 h-32 mx-auto mb-4"
//               />
//               <h3 className="text-lg font-bold">{member}</h3>
//               <p className="text-sm text-gray-600">Team Member Role</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="max-w-5xl w-full">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
//           Watch Our Story
//         </h2>
//         <div className="aspect-w-16 aspect-h-9">
//           <iframe
//             className="w-full h-96 rounded-xl shadow-lg"
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//             title="About Video"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </section>

//     </div>
//   );
// }

// export default About;
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

