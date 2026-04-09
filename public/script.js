
const cursor = document.querySelector('.cursor')
const nav  = document.querySelector('nav').querySelectorAll('li')
const feedItens = document.querySelector('.feed').querySelectorAll('.feedItem')
const projects = document.querySelector('.projects').querySelectorAll('.projectCard')
const contacts = document.querySelector('.contactIcons').querySelectorAll('i')
const burguer = document.querySelector('.burguer')
const phoneMenu = document.querySelector('.phoneMenu')
const phoneOptions = phoneMenu.querySelectorAll('li')
const lines = burguer.querySelectorAll('div')
const actionButton = document.querySelector('.actionButton').querySelector('button')



function openMenuRetratil(){
    phoneMenu.style.animation = ' animation: show-up .3s forwards;'
    phoneMenu.style.display = 'flex'
    lines[0].classList.add('line1')
    lines[1].classList.add('line2')
    lines[2].classList.add('line3')
}

function closeMenuRetratil(){
     phoneMenu.style.display = 'none'
        phoneMenu.style.animation = ' animation: fade 2s forwards;'
    lines[0].classList.remove('line1')
    lines[1].classList.remove('line2')
    lines[2].classList.remove('line3')
}

burguer.onclick = e =>{
    burguer.classList.toggle('open')

    

    if(burguer.classList.contains('open')){
        openMenuRetratil()
    }else{
    closeMenuRetratil()
    }
    
    
}

const projectsObj = {
    tControl:{link:' https://controle-treinamentos-58a7c.web.app', git:'https://github.com/igortafa/rh-anchor'},
    landingDev:{link:'https://igortafa.com.br', git:'https://github.com/igortafa/personal_website.git'},
    academicSite:{link:'https://douglasaparecidobueno-d411a.web.app/', git:'https://github.com/igortafa/academic-website.git'}, 
    weddingInvite:{link:'https://wedding-invitation-2fe5d.web.app/', git:'https://github.com/igortafa/wedding-invitation.git'}
}


const contactsObj = {
    whatsapp: 'https://wa.me/5566996212188',
    linkedin:'https://www.linkedin.com/in/igortafa',
    email:'https://mail.google.com/mail/?view=cm&fs=1&to=igor.atafarello@gmail.com',
    github:'https://github.com/igortafa',
    instagram:'https://www.instagram.com/igortafa/'
}


actionButton.onclick = e =>{
    openLink('https://wa.me/5566996212188?text=Olá!%20Tenho%20interesse%20em%20comprar%20um%20site.')
}



contacts.forEach(contact =>{
    contact.onclick = () =>{
        openLink(contactsObj[`${contact.getAttribute('id')}`])
    }
})


  function openLink(url) {
    let novaAba = window.open(url, '_blank');
    
    if (novaAba) {
        novaAba.focus();
    } else {
        alert('O navegador bloqueou a abertura da nova aba.');
    }
}


projects.forEach(project =>{
    const gitButton = project.querySelector('.git')
    const viewButton = project.querySelector('.view')
    const gitLink = projectsObj[`${project.getAttribute('id')}`].git
    const mainLink = projectsObj[`${project.getAttribute('id')}`].link


    gitButton.onclick = e=>{
        openLink(gitLink)
    }
       viewButton.onclick = e=>{
        console.log(mainLink)
        openLink(mainLink)
    }

    
})

document.onmousemove = e =>{
    const y = e.pageY
    const x = e.pageX
    cursor.style.top = (y ) + 'px'
    cursor.style.left = (x) +'px'
}

nav.forEach(li=>{
    const line =  li.querySelector('.line')
   li.onmouseover = () => {
        const rect = window.getComputedStyle(line);
        const currentWidth = rect.getPropertyValue('width');
        document.documentElement.style.setProperty('--w', currentWidth);
        li.classList.add('selected');
        line.classList.add('selected');
    };

li.onmouseleave = () => {
        if (li.classList.contains('selectedPage')) return;
        li.classList.remove('selected');
        line.classList.remove('selected');

    };

        li.onclick = e =>{
            nav.forEach(currentLine=>{
                currentLine.classList.remove('selected')
                
                currentLine.querySelector('.line').classList.remove('selected') 
                currentLine.classList.remove('selectedPage')
        })
        li.classList.add('selected')
        li.classList.add('selectedPage')
        line.classList.add('selected')

        const op = li.getAttribute('id')

        feedItens.forEach(item=>{
            if(item.classList.contains(`${op}`)){
                item.classList.remove('hidden')
            }else{
                item.classList.add('hidden')
                
                }
        })
    }
    
    
})


phoneOptions.forEach(li =>{
    const op = li.getAttribute('id')
         li.onclick = e =>{
        feedItens.forEach(item=>{
            if(item.classList.contains(`${op}`)){
                item.classList.remove('hidden')
            }else{
                item.classList.add('hidden')
                
                }
        })
         burguer.classList.toggle('open')
        closeMenuRetratil()
    }
})

