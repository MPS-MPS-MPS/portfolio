AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Developer",
    cardImage: "assets/images/experience-page/web-dev-logos.png",
    place: "Freelance",
    time: "(Nov 2024 - present)",
    desp: "<li>Designed and developed responsive websites and custom web applications tailored to the needs of artists, healthcare organisations, and businesses</li> <li>For St Vincent’s Hospital and Voices for Palliative Care, contributed to internal tools and information portals aimed at improving communication and resource sharing across departments</li> <li>Managed full development cycles – from planning and prototyping to deployment and support – while maintaining strong client communication and version control (Git)</li><li>At Dreamwave, designed and developed custom audio effect plugins using C++ and Python, creating tools for dynamic processing, modulation, and creative sound design used by producers and engineers</li>",
  },
  {
    title: "Data Analyst",
    cardImage: "assets/images/experience-page/melb-logo.jpg",
    place: "School of Psychological Sciences, Melbourne University",
    time: "(July 2023 - Aug 2024)",
    desp: "<li>Supported psychology undergraduate, postgraduate, and PhD students with data analysis for research projects, ensuring data quality, consistency, and statistical validity.</li><li>Developed and maintained interactive Power BI dashboards and reports to track research outputs, school performance metrics, and resource utilisation.</li><li>Cleaned, transformed, and managed large research and administrative datasets using Python, SQL and Excel to support evidence-based decision-making.</li><li>Automated regular reporting tasks and data workflows, improving efficiency and reducing manual workload for academic and administrative staff.</li>",
  },
  {
    title: "Audio Engineer",
    cardImage: "assets/images/experience-page/soundpark-logo.png",
    place: "Soundpark Studios",
    time: "(Dec 2021 - Jan 2023)",
    desp: "<li>Recorded, edited, and mixed audio for a wide range of projects including music, voiceovers, and sound design</li><li>Used Pro Tools and Logic Pro to engineer and master sessions for artists and commercial clients</li><li>Ensured audio quality met broadcast and streaming standards across all deliverables</li><li>Collaborated closely with musicians, producers, and clients to achieve creative goals and deliver polished final products on tight deadlines</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);



const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
