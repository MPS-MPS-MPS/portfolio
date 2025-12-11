AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Full Stack Developer",
    cardImage: "assets/images/experience-page/web-dev-logos.png",
    place: "Freelance",
    time: "(Jan 2025 - present)",
    desp: "<li>Designed and developed responsive websites and custom web applications using HTML/CSS, JavaScript, React, and other frontend frameworks, with backend development in Python, Node.js, plus SQL database integration.</li> <li>Built full-stack solutions and internal tools for healthcare and business clients, such as St Vincent’s Hospital and Voices for Palliative Care, implementing RESTful APIs, data models, and portals to support communication and resource sharing.</li> <li>Developed audio effect plugins in C++ and Python at Dreamwave, using object-oriented programming and creative sound processing in Linux environments.</li> ",
  },
  {
    title: "Data Support Officer",
    cardImage: "assets/images/experience-page/apc-waste.png",
    place: "APC Waste Consultants, North Sydney",
    time: "(Nov 2023 - Dec 2024)",
    desp: "<li>Proficient in managing and analyzing large datasets with a focus on accuracy and efficiency, utilizing advanced Excel functions and PowerBI. </li> <li>Data entry into Microsoft Excel and OneNote, proofreading and editing data reports</li> <li>Demonstrated ability to streamline workflows and enhance data integrity</li> <li>Strong communication skills used to collaborate with teams and support customer inquiries, conveying APC’s waste-audit findings and helping clients understand how data informs their waste-management decisions.</li>",
  },
  {
    title: "Outbound Sales Representative",
    cardImage: "assets/images/experience-page/simply-energy.png",
    place: "Simply Energy, Melbourne",
    time: "(Dec 2021 - Jan 2023)",
    desp: "<li>Engaged with residential and small-business customers to provide tailored energy plans that aligned with their usage needs</li> <li>Clearly communicated product benefits, pricing options, and contract details to support informed customer decisions</li> <li>Consistently met and exceeded weekly sales and conversion targets in a fast-paced environment</li> <li>Collaborated with team members and supervisors to improve sales strategies and maintain up to date knowledge of market offerings and regulatory requirements</li>",
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
