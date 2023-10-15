/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle=document.getElementById("nav-toggle"),
      navClose=document.getElementById("nav-close")

/*===============Menu Show=======*/
/*Validate if constant exist*/
if(navToggle){
    navToggle.addEventListener("click",() =>{
        navMenu.classList.add('show-menu')
    })
}

/*===============Menu Hidden=======*/
/*Validate if constant exist*/
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll(".nav_link")

const linkAction=() =>{
    const navMenu=document.getElementById('nav-menu')
    //when we click on each nav_link ,we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


/*=============== TypeWritter ===============*/
const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Frontend Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Java Developer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);



/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects_container", {
    loop:true,
    spaceBetween:24,


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
      },
  });

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial_container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form'),
      contactName=document.getElementById('contact-name'),
      contactEmail=document.getElementById('contact-email'),
      contactProject=document.getElementById('contact-project'),
      contactMessage=document.getElementById('contact-message')

const sendEmail=(e)=>{
  e.preventDefault()

  if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
    // Add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    // Show message
    contactMessage.textContent='Write all the input fields 📤'

  }else{
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_ngt2eu3','template_wykyssu','#contact-form','orM1mAoZswxIj7di8')
    .then(() =>{
      // Show message and add color
      contactMessage.classList.add('color-blue')
      contactMessage.textContent = 'Message sent ✅'

      // Remove message after five seconds
      setTimeout(()=>{
        contactMessage.textContent =''
      }, 5000)

    }, (error) => {
      alert('OOPS! SOMETHING HAS FAILED...', error)
    })
    // To clear the input field
    contactName.value=''
    contactEmail.value=''
    contactProject.value=''
    
  }
}
contactForm.addEventListener('submit',sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass=document.querySelector('.nav_menu a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
    
    
  })
}
window.addEventListener('scroll',scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  //when the scroll is higher than the 350 viewport height , add the show-scroll to the a tag with the scrollup
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously choose a topic
if(selectedTheme){
  //if the validation is fullfilled, we ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
  //Add or remove the dark / icon Theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //we save the theme and the current icon that the user choose
  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon',getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  //when the scroll is greater than 50 view port height , and the scroll-header class to the header tag
  this.scrollY >=50 ? header.classList.add('bg-header')
                    : header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  //reset:'true'  /* Animation Repeat */
})

sr.reveal(`.home_data, .projects_container, .testimonial_container, .footer_container`)
sr.reveal(`.home_info div`, {delay:600,origin:'bottom',interval:100})
sr.reveal(`.skills_content:nth-child(1), .contact_content:nth-child(1)`, {origin:'left'})
sr.reveal(`.skills_content:nth-child(2), .contact_content:nth-child(2)`, {origin:'right'})
sr.reveal(`.qualification_content, .services_card`, {interval:100})


//auto-type

