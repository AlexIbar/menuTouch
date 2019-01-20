//Variables
var icon_bar = document.getElementById('icon-bar'),
lateralUno = document.getElementById('lateral'),
lateralDos = document.getElementById('oculto'),
contenedorBarra = document.getElementById('contenedor-barra'),
largeTotal,
inicial;


//Eventos
icon_bar.children[0].addEventListener("click", muestra);
lateralDos.addEventListener('click', ocultarSimple)
lateralUno.addEventListener('touchstart', enterMovimiento)
lateralUno.addEventListener('touchend', endMovimiento)
lateralUno.addEventListener('touchmove', movimiento)
lateralDos.addEventListener('touchstart', enterMovimiento)
lateralDos.addEventListener('touchend', endMovimiento)
lateralDos.addEventListener('touchmove', movimiento)

//Funciones
function muestra(){
   contenedorBarra.style.display ='flex'
   setTimeout(()=>{
      lateralUno.style.marginLeft ='0px'
      setTimeout(()=>lateralDos.style.display='block',10)
   },5)
}
function ocultarSimple(){
   lateralDos.style.display='none';
   lateralUno.style.marginLeft = '-1000px';
   setTimeout(()=>contenedorBarra.style.display='none',1000)
}
function leer(diferencia, total){
   let comprobante = (diferencia*100)/total;
   if(comprobante > 40){
      return true;
   }else{
      return false
   }
}
function movimiento(e){
   let actual = e.changedTouches[0].clientX
   if(inicial > actual){
      let diferencia = inicial - actual;
      lateralUno.style.marginLeft = `-${diferencia}px`
   }
}
function enterMovimiento(e){
      lateralUno.classList.remove('lateral-move')
      largeTotal = contenedorBarra.clientWidth/2;
      inicial = e.changedTouches[0].clientX
}
function endMovimiento(e){
   lateralUno.classList.add('lateral-move')
   let final = e.changedTouches[0].clientX
   let diferencia = inicial -final 
   let comprobante = leer(diferencia, largeTotal)
   if(comprobante){
      console.log('ocultar')
      ocultarSimple()
   }else{
      console.log('muestra')
      muestra()
   }
}


//Auto-ejecutable
(function(){
   lateralUno.classList.add('lateral-move')
   lateralUno.style.marginLeft = "-3000px"
   setTimeout(()=> {
      lateralDos.style.display = 'none'
      contenedorBarra.style.display = 'none'
   },5)
})()