const contentDiv = document.querySelector('.slider');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const contentHeight = contentDiv.offsetHeight - window.innerHeight;
    
    if (contentHeight > 0) {
        document.body.style.backgroundColor = '#3399ff';
    }
});