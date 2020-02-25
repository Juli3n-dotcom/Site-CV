
// const nav = document.querySelector('.header');
// const mouse = document.querySelector('.mouse');

// window.addEventListener('scroll', () => {
//   if(window.scrollY > 240){
//     nav.classList.add('scroll');
//     fname.classList.remove('none');
//     fname.classList.add('block');
    
//   }else{
//     nav.classList.remove('scroll');
//     fname.classList.remove('block');
//     fname.classList.add('none');
    
//   }
// });


$('.nav-obj a').on('click', function(e){
  if(this.hash !== ''){ 
    e.preventDefault();
    const hash = this.hash;

    $('html, body').animate({
      scrollTop : $(hash).offset().top
    }, 600);
  }
});

$('.nav-band a').on('click', function(e){
  if(this.hash !== ''){ 
    e.preventDefault();
    const hash = this.hash;

    $('html, body').animate({
      scrollTop : $(hash).offset().top
    }, 800);
  }
});

$('.btn_go_to_top a').on('click', function(e){
  if(this.hash !== ''){ 
    e.preventDefault();
    const hash = this.hash;

    $('html, body').animate({
      scrollTop : $(hash).offset().top
    }, 600);
  }
});




const nav = document.querySelector('.nav-liste');

 document.querySelector('.open').addEventListener('click',()=>{
    nav.classList.add('active');
 });

 document.querySelector('.die').addEventListener('click',()=>{
    nav.classList.remove('active');
 });



window.sr = ScrollReveal();
sr.reveal('.main-message',{
  duration : 2000,
  origin : 'bottom',
  distance : '50px'
})
sr.reveal('.icon-scroll',{
   duration : 2000,
   origin : 'bottom',
 })
sr.reveal('.nav-band',{
   duration : 1000,
   origin : 'top',
   distance : '50px'
 })
 sr.reveal('.nav-liste',{
  duration : 1000,
  origin : 'top',
  distance : '50px'
})
 sr.reveal('.open',{
   duration : 2000,
   origin : 'top',
   distance : '50px'
 })
 sr.reveal('.t_section',{
   duration : 2000,
   origin : 'bottom',
   distance : '50px'
 })
 sr.reveal('.a_propos_img',{
   duration : 2000,
   origin : 'left',
   distance : '70px',
   viewFactor: 0.2
 })
 sr.reveal('.a_propos_txt',{
   duration : 2000,
   origin : 'right',
   distance : '70px',
   viewFactor: 0.2
 })
 sr.reveal('.competences-grid-item',{
  duration : 2000,
  origin : 'bottom',
  distance : '70px',
  viewFactor: 0.2
})
sr.reveal('.services-grid-item',{
  duration : 2000,
  origin : 'bottom',
  distance : '70px',
  viewFactor: 0.2
})
sr.reveal('.portfolio-grid-item',{
  duration : 2000,
  origin : 'bottom',
  distance : '70px',
  viewFactor: 0.2
})
sr.reveal('.left',{
  duration : 2000,
  origin : 'left',
  distance : '70px',
  viewFactor: 0.2
})
sr.reveal('.right',{
  duration : 2000,
  origin : 'right',
  distance : '70px',
  viewFactor: 0.2
})
 sr.reveal('.experience_other',{
   duration : 2000,
   origin : 'bottom',
   distance : '50px',
   delay:600
 })
 sr.reveal('.contact_form',{
   duration : 2000,
   origin : 'left',
   distance : '70px'
 })
 sr.reveal('.contact_right',{
   duration : 2000,
   origin : 'right',
   distance : '70px'
 })

 const nav_header = document.querySelector('.header_container');
 const nav_name = document.querySelector('.nav-band a');
 const lien1 = document.querySelector('.link1');
 const lien2 = document.querySelector('.link2');
 const lien3 = document.querySelector('.link3');
 const lien4 = document.querySelector('.link4');
 const lien5 = document.querySelector('.link5');
 const lien6 = document.querySelector('.link6');
 const header = document.querySelector('.header');
 const hamb_btn = document.querySelector('.open i');
 const toTopBtn = document.querySelector('.btn_go_to_top a')


window.addEventListener('scroll', () =>{
  if(window.scrollY > 100){
    nav_header.classList.add('scroll');
    header.classList.add('scroll');
    nav_name.classList.add('scroll');
    hamb_btn.classList.add('scroll');
    lien1.classList.add('scroll');
    lien2.classList.add('scroll');
    lien3.classList.add('scroll');
    lien4.classList.add('scroll');
    lien5.classList.add('scroll');
    lien6.classList.add('scroll');

  }if(window.scrollY > 300){
    toTopBtn.classList.add('scroll');

  }else{
    nav_header.classList.remove('scroll');
    header.classList.remove('scroll');
    nav_name.classList.remove('scroll');
    hamb_btn.classList.remove('scroll');
    lien1.classList.remove('scroll');
    lien2.classList.remove('scroll');
    lien3.classList.remove('scroll');
    lien4.classList.remove('scroll');
    lien5.classList.remove('scroll');
    lien6.classList.remove('scroll');
    toTopBtn.classList.remove('scroll');
  }
});



const toats = document.querySelector('.notif');
const close_toats = document.querySelector('.toats_die');

close_toats.addEventListener('click', ()=>{
  toats.classList.add('hiden');
});