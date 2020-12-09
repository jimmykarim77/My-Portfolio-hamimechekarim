/****************menu show hidden**** */

const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

//show

toggleMenu.addEventListener('click', ()=>{
navMenu.classList.toggle('show')

});
//hidden
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
    });

    //remove menu 
    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        navMenu.classList.remove('show')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))


    // scroll sections active link

    const sections = document.querySelectorAll('section[id]')
    window.addEventListener('scroll', scrollActive)

    function scrollActive(){
        const scrolly = window.pageYOffset
        sections.forEach( currents =>{
            const sectionHeight = currents.offsetHeight
            const sectionTop = currents.offsetTop - 50
            sectionId = currents.getAttribute('id')

            if(scrolly > sectionTop && scrolly <= sectionTop +sectionHeight){
             document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')   
            }else{
                document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
            }
        })
    }


    //filter section work
    $(document).ready(function(){
        $('.filter__item').click(function(){
            const value = $(this).attr('data-filter')
            if(value == 'all'){
                $('.works__img').show('1000')
            }else{
                $('.works__img').not('.'+value).hide('1000')
                $('.works__img').filter('.'+value).show('1000')
            }
        })

    //add active-filter when we select item
    
    $('.filter__item').click(function(){
        $(this).addClass('active-filter').siblings().removeClass('active-filter')
    })

    })
    


    //show popup section work

    const openButton =  document.querySelectorAll('.works__lik') 
    
    
    //show modal
    openButton.forEach(btn => btn.addEventListener('click', () => {
            var modal = btn.getAttribute('data-modal')
            document.getElementById(modal).classList.add('active-over')
    }))

 //remove modal
 var closeButton =  document.querySelectorAll('.close__button')
closeButton.forEach(btn => btn.addEventListener('click',() => {
    var modal = btn.closest('.modal').classList.remove('active-over')
}))
  
