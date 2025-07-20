
document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
    
menuToggle.addEventListener('click', function() {
navLinks.classList.toggle('active');   
this.classList.toggle('active');
});
    
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
       item.addEventListener('click', function() {
       navLinks.classList.remove('active');
       menuToggle.classList.remove('active');
      });
    });
});
// scrollTopBtn
const btn = document.getElementById("scrollTopBtn")

window.onscroll = function(){
    if(window.scrollY >= 700){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
}
btn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}
AOS.init();