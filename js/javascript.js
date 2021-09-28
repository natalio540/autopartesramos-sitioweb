const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// agregarndo sliders

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'),{
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        // dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__prev',
          next: '.carousel__next'
        }
    });

    new Glider(document.querySelector('.carousel__lista_banner'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__prev',
          next: '.carousel__next'
        }
    });

    new Glider(document.querySelector('.carousel__lista_destacados'),{
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
          prev: '.carousel__prev_destacado',
          next: '.carousel__next_destacado'
        }
    });

    new Glider(document.querySelector('.carousel__lista_categorias'),{
      slidesToShow: 4,
      slidesToScroll: 1,
      draggable: true,
      arrows: {
        prev: '.carousel__prev_destacado',
        next: '.carousel__next_destacado'
      }
  });

});


