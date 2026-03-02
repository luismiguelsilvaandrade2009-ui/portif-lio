console.log('Script iniciado');
const header = document.querySelector('.navbar');
console.log('Header:', header);

window.onscroll = function() {
    const top = window.scrollY;
    console.log('ScrollY:', top);
    if(top >= 100) {
        header.classList.add('navbarDark');
        console.log('Adicionando navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
        console.log('Removendo navbarDark');
    }
}


// Links suave
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#about') {
            e.preventDefault();
            document.getElementById('Sobre-mim')?.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#services') {
            e.preventDefault();
            document.getElementById('proj')?.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#contact') {
            e.preventDefault();
            document.getElementById('ctt')?.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

       
    
