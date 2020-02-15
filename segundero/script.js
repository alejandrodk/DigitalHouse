window.addEventListener('load', () => {

    let titulo = document.querySelector('.titulo');
    let segundos = document.querySelector('.segundos');
  
    let botonMostrar = document.querySelector('.mostrar-segundos');
    let botonOcultar = document.querySelector('.ocultar-segundos');
      
      botonMostrar.addEventListener('click', () => {
  
      let segundero = setInterval(function() {
        let fecha = new Date();    
        segundos.innerHTML = fecha.getSeconds();
        titulo.style.display = 'none';
        segundos.style.display = 'block';
      }, 0);
  
    botonOcultar.addEventListener('click', function(){
      titulo.style.display = 'block';
      segundos.style.display = 'none';
      clearInterval(segundero)
    })
  
    });   
  
  });