let pruebaimagen = document.querySelector('img');
pruebaimagen.onclick = function(){
    let misrc= pruebaimagen.getAttribute('src');
    if(misrc === 'imagen/logo mica.png'){
        pruebaimagen.setAttribute('src','imagen/02.png');
    }else{
        pruebaimagen.setAttribute('src','imagen/logo mica.png');
    }

}

let elBoton= document.querySelector('button');
let elTitulo= document.querySelector('h1');
function establecenombreUsuario(){
    let miNombre = prompt('Por favor, ingresa tu nombre');
    if(!miNombre){
        establecenombreUsuario();
    }else{
    localStorage.setItem('nombre', miNombre);
    elTitulo.textContent= 'Esta página es muy buena, gracias MICA ' + miNombre;
}
}
if (!localStorage.getItem('nombre')){
    establecenombreUsuario();

}else {
    let nombreAlmacenado= localStorage.getItem('nombre');
    elTitulo.textContent= 'Esta página es muy buena, gracias MICA ' + nombreAlmacenado;
}

elBoton.onclick= function(){
    establecenombreUsuario();
}
