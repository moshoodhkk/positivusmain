const navList = document.querySelector('#nav-list');
const toggleBtn = document.querySelector('#toggle-btn');



toggleBtn.addEventListener('click', ()=>{
    navList.classList.toggle("active");
});



