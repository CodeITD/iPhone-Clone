function left () {
    document.querySelector('.applications').classList.toggle('active-slide');
    document.querySelector('.span1').classList.add('active-screen');
    document.querySelector('.span2').classList.remove('active-screen');
}
function right() {
    document.querySelector('.applications').classList.toggle('active-slide');
    document.querySelector('.span1').classList.remove('active-screen');
    document.querySelector('.span2').classList.add('active-screen');
}

const openMenu = document.querySelector('.open-button');
openMenu.addEventListener("click", OpenAppScreen);
function OpenAppScreen () {
    document.querySelector('.lock-screen').classList.replace('active', 'animate-lock-screen');
    document.querySelector('.lock-screen').style.height = '0';
    document.querySelector('.application-menu').classList.add('active');
}