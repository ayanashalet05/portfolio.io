import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo">AS.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      <main>

        {/* ================= HERO ================= */}

        <section id="home" className="hero">

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <p className="intro">
              HELLO, I'M 👋
            </p>

            <h1>
              AYANA
              <span>SHALET</span>
            </h1>

            <h2>
              Python Full-Stack Developer
            </h2>

            <p className="description">
              I build practical and user-focused web applications
              using modern technologies and enjoy turning ideas into
              real-world software solutions.
            </p>

            <div className="hero-buttons">

              
<a
  href={`${import.meta.env.BASE_URL}Ayana-Shalet-Resume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="resume-btn"
>
  Download Resume
</a>


              <a
                href="#contact"
                className="secondary-button"
              >
                ✉ &nbsp; Contact Me
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
  href="https://www.linkedin.com/in/ayanashalet0504"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>

              <a href="mailto:ayanashalet05@gmail.com">
                Email
              </a>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section id="about" className="section about-section">

          <p className="section-label">
            01 — ABOUT
          </p>

          <div className="about-container">

            {/* ABOUT PHOTO */}

            <div className="about-photo">

              <img
                src={`${import.meta.env.BASE_URL}about-photo.jpeg`}
                alt="Ayana Shalet"
                className="about-image"
              />

            </div>


            {/* ABOUT CONTENT */}

            <div className="about-content">

              <h2>
                About Me
              </h2>

              <h3 className="about-role">
                Python Full-Stack Developer
              </h3>

              <p className="about-text">
                I'm Ayana Shalet, a Python Full-Stack Developer
                with a strong foundation in programming, web
                development, and problem-solving. I enjoy building
                practical applications, learning new technologies,
                and turning ideas into useful software solutions.
              </p>

              <p className="about-text">
                Through academic projects and internships, I have
                gained practical experience in developing
                applications, working with databases, understanding
                software development concepts, and solving
                real-world problems. I enjoy exploring both
                frontend and backend development and continuously
                improving my ability to build efficient and
                user-friendly applications.
              </p>

              <p className="about-text">
                I'm a quick learner who enjoys taking on new
                challenges and adapting to new technologies. I'm
                comfortable working independently as well as in team
                environments, where communication, collaboration,
                and attention to detail help me contribute
                effectively.
              </p>

              <p className="about-text">
                My goal is to continue growing as a developer,
                gain industry experience, and create meaningful
                software solutions that make a real impact.
              </p>

            </div>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section projects-section">
  <p className="section-label">02 — PROJECTS</p>

  <h2>Featured Projects</h2>

  <p className="projects-intro">
    A selection of projects I have developed while building my
    experience in full-stack development, machine learning,
    database management, and real-time applications.
  </p>

  <div className="projects-list">

    {/* PROJECT 01 */}
    <article className="project-showcase">
      <div className="project-showcase-header">
        <span className="project-number">01</span>
        <span className="project-type">WEB APPLICATION</span>
      </div>

      <h3>Photographer Booking System</h3>

      <p className="project-overview">
        A web-based photography booking platform designed to
        simplify the process of finding and booking photographers
        online. The application provides users with a convenient
        way to explore photographers, view their services and
        packages, check available options, and manage their
        photography bookings through a user-friendly interface.
      </p>

      <p className="project-details">
        The system includes functionality for managing user
        information, photographer services, and booking details.
        It focuses on creating a simple and organized experience
        for both customers and photographers while reducing the
        complexity involved in managing photography appointments.
      </p>

      <div className="project-info">
        <div>
          <h4>My Work</h4>
          <p>
            Worked on the application interface, booking workflow,
            data handling, and integration of the different parts
            of the application.
          </p>
        </div>

        <div>
          <h4>Technologies</h4>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>

      <a
        href="https://github.com/ayanashalet05/photographer-booking-system"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Project →
      </a>
    </article>


    {/* PROJECT 02 */}
    <article className="project-showcase">
      <div className="project-showcase-header">
        <span className="project-number">02</span>
        <span className="project-type">MACHINE LEARNING</span>
      </div>

      <h3>Weather Forecasting System</h3>

      <p className="project-overview">
        A machine-learning-based weather forecasting system
        developed to analyze weather-related data and generate
        useful predictions. The project uses historical weather
        information and relevant environmental parameters to
        identify patterns that can be used for forecasting.
      </p>

      <p className="project-details">
        The project involved preparing and processing weather
        datasets, handling data, identifying relevant features,
        and applying machine learning techniques to develop a
        prediction model. The system is designed to present the
        predicted results in a simple and understandable way.
      </p>

      <div className="project-info">
        <div>
          <h4>My Work</h4>
          <p>
            Worked with weather datasets, data preprocessing,
            model development, and integrating the prediction
            process with the application.
          </p>
        </div>

        <div>
          <h4>Technologies</h4>
          <div className="project-tech">
            <span>Python</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Machine Learning</span>
            <span>CNN</span>
            <span>Flask</span>
          </div>
        </div>
      </div>

      <a
        href="https://ayanashalet05.github.io/weather-forecasting-ml/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Project →
      </a>
    </article>


    {/* PROJECT 03 */}
    <article className="project-showcase">
      <div className="project-showcase-header">
        <span className="project-number">03</span>
        <span className="project-type">FULL-STACK</span>
      </div>

      <h3>SyncDoc</h3>

      <p className="project-overview">
        SyncDoc is a collaborative document management application
        designed to help users create, manage, update, and organize
        documents efficiently. The application provides a structured
        environment for handling documents while maintaining a
        simple and user-friendly interface.
      </p>

      <p className="project-details">
        The project includes user authentication, document
        management operations, database integration, and REST API
        communication between the frontend and backend. The system
        is designed to securely handle user and document data while
        providing smooth interaction between different application
        components.
      </p>

      <div className="project-info">
        <div>
          <h4>My Work</h4>
          <p>
            Independently developed the application, including the React frontend, Node.js/Express backend,
             MongoDB database integration, user authentication, REST API endpoints, and document management 
             operations. I designed the application structure and connected the frontend, backend, 
             and database to create a complete full-stack document management system.
          </p>
        </div>

        <div>
          <h4>Technologies</h4>
          <div className="project-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>REST API</span>
          </div>
        </div>
      </div>

      <a
  href="https://github.com/ayanashalet05/syncdoc"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  
  View Project →
</a>
    </article>


    

  </div>
</section>

        {/* ================= SKILLS ================= */}

        <section id="skills" className="section skills-section">
  <p className="section-label">03 — SKILLS</p>

  <h2>Technical &amp; Professional Skills</h2>

  <p className="skills-intro">
    A combination of technical knowledge, development tools,
    programming concepts, and professional skills developed
    through my academic projects, internships, and learning
    experience.
  </p>

  {/* TECHNICAL SKILLS */}

  <div className="skills-category">
    <h3 className="skills-category-title">
      Technical Skills
    </h3>

    <div className="skills-grid">

      <div className="skill-card">
        <div className="skill-icon">🐍</div>
        <h3>Python</h3>
        <p>
          Programming, problem solving, application development,
          and object-oriented programming.
        </p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">C</div>
        <h3>C / C++</h3>
        <p>
          Programming fundamentals, logical problem solving,
          and core programming concepts.
        </p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">☕</div>
        <h3>Java</h3>
        <p>
          Object-oriented programming, programming fundamentals,
          and application development concepts.
        </p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">&lt;/&gt;</div>
        <h3>HTML &amp; CSS</h3>
        <p>
          Creating structured web pages and designing responsive
          and user-friendly web interfaces.
        </p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">JS</div>
        <h3>JavaScript</h3>
        <p>
          Building interactive web functionality and adding
          dynamic behavior to web applications.
        </p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">🗄️</div>
        <h3>MySQL</h3>
        <p>
          Relational database concepts, data storage, and
          database management operations.
        </p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">OOP</div>
        <h3>Object-Oriented Programming</h3>
        <p>
          Understanding classes, objects, inheritance,
          encapsulation, and other OOP principles.
        </p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">Git</div>
        <h3>Git &amp; GitHub</h3>
        <p>
          Version control, source code management, and
          collaborative development workflows.
        </p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">EX</div>
        <h3>MS Excel</h3>
        <p>
          Working with spreadsheets, organizing information,
          and handling structured data.
        </p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">VS</div>
        <h3>VS Code</h3>
        <p>
          Development environment used for writing, testing,
          debugging, and managing application code.
        </p>
      </div>

    </div>
  </div>


  {/* SOFT SKILLS */}

  <div className="skills-category soft-skills-category">

    <h3 className="skills-category-title">
      Soft Skills
    </h3>

    <div className="soft-skills-grid">

      <div className="soft-skill">
        <span>01</span>
        <h4>Attention to Detail</h4>
      </div>

      <div className="soft-skill">
        <span>02</span>
        <h4>Communication</h4>
      </div>

      <div className="soft-skill">
        <span>03</span>
        <h4>Project Management</h4>
      </div>

      <div className="soft-skill">
        <span>04</span>
        <h4>Time Management</h4>
      </div>

      <div className="soft-skill">
        <span>05</span>
        <h4>Problem Solving</h4>
      </div>

      <div className="soft-skill">
        <span>06</span>
        <h4>Team Collaboration</h4>
      </div>

      <div className="soft-skill">
        <span>07</span>
        <h4>Quick Learning</h4>
      </div>

      <div className="soft-skill">
        <span>08</span>
        <h4>Leadership</h4>
      </div>

    </div>

  </div>


  {/* LANGUAGES */}

  <div className="skills-category languages-category">

    <h3 className="skills-category-title">
      Languages
    </h3>

    <div className="language-list">

      <div className="language-item">
        <span className="language-name">English</span>
        <span className="language-label">Professional</span>
      </div>

      <div className="language-item">
        <span className="language-name">Malayalam</span>
        <span className="language-label">Native</span>
      </div>

    </div>

  </div>

</section>


        {/* ================= CONTACT ================= */}

        <section id="contact" className="section contact-section">

          <p className="section-label">
            04 — CONTACT
          </p>

          <h2>
            Let's Connect
          </h2>

          <p className="contact-description">
            I'm always interested in learning, collaborating
            and exploring new opportunities. Feel free to
            reach out to me.
          </p>

          <div className="contact-container">


            {/* EMAIL */}

            <a
              href="mailto:ayanashalet05@gmail.com"
              className="contact-card"
            >

              <span className="contact-icon">
                ✉
              </span>

              <div>

                <h3>
                  Email
                </h3>

                <p>
                  ayanashalet05@gmail.com
                </p>

              </div>

            </a>


            {/* LINKEDIN */}

            <a
  href="https://www.linkedin.com/in/ayanashalet0504"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
>
              <span className="contact-icon">
                in
              </span>

              <div>

                <h3>
                  LinkedIn
                </h3>

                <p>
                  Connect with me
                </p>

              </div>

            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >

              <span className="contact-icon">
                Git
              </span>

              <div>

                <h3>
                  GitHub
                </h3>

                <p>
                  View my projects
                </p>

              </div>

            </a>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">
          AS.
        </div>

        <p>
          © 2026 Ayana Shalet. All rights reserved.
        </p>

        <p>
          Built with React &amp; TypeScript
        </p>

      </footer>

    </div>
  )
}

export default App