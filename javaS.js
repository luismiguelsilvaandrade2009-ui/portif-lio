const header = document.querySelector('.navbar')

window.onscroll = function(){
    let top = window.scrollY;
    if(header){
        if(top>=140){
            header.classList.add('navbarDark')
        }
        else{
            header.classList.remove('navbarDark')
        }
    }
}