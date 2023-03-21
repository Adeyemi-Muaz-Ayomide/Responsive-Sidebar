const toggleBtn = document.querySelector('.toggleBtn');
const togglingSideBar = document.querySelector('.xmark')
const links = document.querySelector('.links')
const aside = document.querySelector('.sidebar')

togglingSideBar.addEventListener('click', function() {   
    links.classList.toggle('hidden')
})

toggleBtn.addEventListener('click', function() {
   aside.classList.toggle('hidden')
})