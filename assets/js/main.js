/**
* Template Name: PhotoFolio
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }


  document.querySelectorAll('.details-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Evita la acción predeterminada del enlace (navegación)

      // Obtiene el ID de la película desde el atributo "id" del enlace
      const idPelicula = this.id;

      // Llama a la función para obtener el enlace de la película
      obtenerEnlacePelicula(idPelicula);
    });
  });

  function obtenerEnlacePelicula(id) {
    if (id === '1') {
      // Si el ID es 1, abre el enlace directamente
      window.open('https://apipeliculasinfra.blob.core.windows.net/peliculas/El el extraño mundo de jack  PELICULA COMPLETA en español latino.mp4', '_blank');
    } else if (id === '2') {
      // Si el ID es 1, abre el enlace directamente
      window.open('https://apipeliculasinfra.blob.core.windows.net/peliculas/El Precio Del Mañana In Time - Pelicula Español Latino Completa (Accion HD).mp4', '_blank');
    } else if (id === '3') {
      // Si el ID es 1, abre el enlace directamente
      window.open('https://apipeliculasinfra.blob.core.windows.net/peliculas/Hombres de negro (2023) MEJOR PELICULAS DE ACCION Pelicula, Completa en Espanol Latino HD.mp4', '_blank');
    } else if (id === '4') {
      // Si el ID es 1, abre el enlace directamente
      window.open('https://apipeliculasinfra.blob.core.windows.net/peliculas/Jumanji_ Welcome to the Jungle - Estreno 2023 Completa en Espanol Latino HD _ Dwayne Johnson.mp4', '_blank');
    } else if (id === '5') {
      // Si el ID es 1, abre el enlace directamente
      window.open('https://apipeliculasinfra.blob.core.windows.net/peliculas/La Profecía del Juicio Final PELÍCULA COMPLETA _ Películas de Desastres Naturales _ LA Noche.mp4', '_blank');
    } else if (id === '6') {
      // Si el ID es 1, abre el enlace directamente
      window.open('https://apipeliculasinfra.blob.core.windows.net/peliculas/Rio 2  Pelicula completa en ESPAÑOL LATINO HD ✔️🦜.mp4', '_blank');
    } else {
      // Si no es 1, realiza la solicitud al servidor
      fetch(`/api/peliculas/${id}`)
        .then(response => response.json())
        .then(data => {
          const enlace = data.enlace;
          // Hacer algo con el enlace, como abrirlo en una nueva ventana
          window.open(enlace, '_blank');
        })
        .catch(error => console.error('Error al obtener el enlace de la película', error));
    }
  }


  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});