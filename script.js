let MenuBtn= document.getElementById("MenuBtn")
MenuBtn.addEventListener("click",function(e){
    document.querySelector('body').classList.toggle("mobile-nav-active")
    this.classList.toggle('fa-xmark')
})


let typed = new Typed('.auto-input',{
    strings:['Web developer!','Data Science!','Software engineer!',"Learner","DevOps Engineer!"],
    typedpeed : 100,
    backspeed :100,
    backDelay: 2000,
    loop:true,

})

let navLinks = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section')
window.addEventListener('scroll',function(){
    const scrollpos = window.scrollY + 20
    sections.forEach(section =>{
        if(scrollpos > section.offsetTop && scrollpos <(section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link =>{
                link.classList.remove("active");
                if(section.getAttribute("id")== link.getAttribute("href").substring(1)){
                    link.classList.add("active")
                }
            })
        }
    })
})