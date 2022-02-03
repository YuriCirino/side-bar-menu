let btn_menu = document.querySelector('#button-menu')
let sidebar = document.querySelector('.sidebar')
let container = document.querySelector('.container')
let profileContent = document.querySelector('.profile-content')
btn_menu.addEventListener('click',()=>{
    sidebar.classList.toggle('active')
    container.classList.toggle('active')
    profileContent.classList.toggle('active')
    
})
