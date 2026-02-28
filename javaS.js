const header = document.querySelector('.navbar')

window.onscroll = function () {
    let top = window.scrollY;
    if (header) {
        if (top >= 140) {
            header.classList.add('navbarDark')
        }
        else {
            header.classList.remove('navbarDark')
        }
    }
}

// quando o usuário clicar no link "Home", não navega para o topo
// em vez disso rola suavemente até a seção "Sobre mim" (id="Sobre-mim").
const homeLink = document.querySelector('a.nav-link[href="#about"]');
if (homeLink) {
    homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        const aboutSection = document.getElementById('Sobre-mim');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}


const projectLink = document.querySelector('a.nav-link[href="#services"]');
if (projectLink) {
    projectLink.addEventListener('click', function (e) {
        e.preventDefault();

        const projectSection = document.getElementById('proj'); // id da seção de projetos
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' }); // rola até ela
        }
    });
}

const contactLink = document.querySelector('a.nav-link[href="#contact"]')
if (contactLink)
         { contactLink.addEventListener('click', function (q) {
            q.preventDefault();

            const contactSection = document.getElementById('ctt')
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
            }



        })}

       
    
