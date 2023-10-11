import aboutImage from '../images/about.jpeg';
import Title from './Title';

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subtitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImage} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            "With a love for exploration and a commitment to excellence, we
            strive to make every journey with us an unforgettable adventure
          </p>
          <p>
            we're passionate about curating extraordinary travel experiences
            that leave lasting memories.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
