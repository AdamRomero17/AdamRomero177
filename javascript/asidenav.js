/* Buttona for navigation */
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-Button");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function (){
   console.log(sidebar.classList);
//if(sidebar.classList.contains('show-sidebar')){
//    sidebar.classList.remove('show-sidebar')
//}
//else{
//    sidebar.classList.add('show-sidebar')
//}
sidebar.classList.toggle('show-sidebar')
});
//debugger
closeBtn.addEventListener("click", function(){
    sidebar.classList.remove('show-sidebar')
})

/* Changing color and changing image for Menu of nav when screen being scroll */
window.addEventListener('scroll', function() {
    const colorChangeElement = document.querySelector('.nav');
    const logoN = document.querySelector('.logoname')
    const scrolling = window.scrollY;
    if(scrolling > 0){
        document.querySelector('.menu').src ='Images/MenuWhite.png'
        colorChangeElement.classList.remove('scroll');
        logoN.classList.remove('logonameWhite');
    }else{
        document.querySelector('.menu').src ='Images/MenuBlack.png'
        colorChangeElement.classList.add('scroll');
        logoN.classList.add('logonameWhite');
    }
    // colorChangeElement.style.backgroundColor = 'red'; // Change color to red when scrolling
});

window.addEventListener('scroll', function() {
    const whiteF = document.querySelectorAll('.whiteFont')
    const scrolling = window.scrollY;
        whiteF.forEach(classElements => {
            if(scrolling > 0){  
                classElements.style.color = 'white';
            }else{
                classElements.style.color = 'black';
            }
        });
    // colorChangeElement.style.backgroundColor = 'red'; // Change color to red when scrolling
});