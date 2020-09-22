const carro = document.getElementById('carro');

let precioPera = 0;
let hayPera=false;

let precioNaranja = 0;
let hayNaranja=false;

let precioZanahoria = 0;
let hayZanahoria=false;

let precioSandia = 0;
let haySandia=false;

let precioPepino = 0;
let hayPepino=false;

let precioPimiento = 0;
let hayPimiento=false;

let precioCebolla = 0;
let hayCebolla=false;

let precioPlatano = 0;
let hayPlatano=false;

carro.addEventListener('dragover', e=>{
    e.preventDefault();
},false);

carro.addEventListener('drop', e=>{
    e.preventDefault();
    let data = e.dataTransfer.getData('id');
    console.log(data);
    if(data=='https://github.com/juanakan/Supermercado/blob/master/images/pera.png'){
        if(!hayPera){
            precioPera=2;
            let parrafo = document.createElement('p');
            parrafo.setAttribute('id','costoPera');
            let contenido = document.createTextNode(`Peras: ${precioPera} €`);
            parrafo.appendChild(contenido);
            let container = document.getElementById('precio');
            container.appendChild(parrafo);
            hayPera=true;
            }else{
                precioPera +=2;

            document.getElementById('costoPera').innerHTML=`Peras: ${precioPera} €`;
            hayPera=true;
        }

        
    }
    if(data=='https://github.com/juanakan/Supermercado/blob/master/images/naranja.png'){
        if(!hayNaranja){
            precioNaranja=2.5;
            let parrafo = document.createElement('p');
            parrafo.setAttribute('id','costoNaranja');
            let contenido = document.createTextNode(`Naranjas: ${precioNaranja} €`);
            parrafo.appendChild(contenido);
            let container = document.getElementById('precio');
            container.appendChild(parrafo);
            hayNaranja=true;
            }else{
                precioNaranja +=2.5;

                document.getElementById('costoNaranja').innerHTML=`Naranjas: ${precioNaranja}€`;
                hayNaranja=true;
        }

        
    }
    if(data=='https://github.com/juanakan/Supermercado/blob/master/images/zanahoria.png'){
        if(!hayZanahoria){
            precioZanahoria=1.2;
            let parrafo = document.createElement('p');
            parrafo.setAttribute('id','costoZanahoria');
            let contenido = document.createTextNode(`Zanahorias: ${precioZanahoria}€`);
            parrafo.appendChild(contenido);
            let container = document.getElementById('precio');
            container.appendChild(parrafo);
            hayZanahoria=true;
            }else{
                precioZanahoria +=1.2;

            document.getElementById('costoZanahoria').innerHTML=`Zanahorias: ${precioZanahoria}€`;
            hayZanahoria=true;
        }

        
    }
    if(data=='https://github.com/juanakan/Supermercado/blob/master/images/sandia.png'){
        if(!haySandia){
            precioSandia=3;
            let parrafo = document.createElement('p');
            parrafo.setAttribute('id','costoSandia');
            let contenido = document.createTextNode(`Sandias: ${precioSandia}€`);
            parrafo.appendChild(contenido);
            let container = document.getElementById('precio');
            container.appendChild(parrafo);
            haySandia=true;
            }else{
                precioSandia +=3;

                document.getElementById('costoSandia').innerHTML=`Sandias: ${precioSandia}€`;
                hayNaranja=true;
        }

        
    }
    if(data=='https://github.com/juanakan/Supermercado/blob/master/images/pepino.png'){
        if(!hayPepino){
            precioPepino=3.5;
            let parrafo = document.createElement('p');
            parrafo.setAttribute('id','costoPepino');
            let contenido = document.createTextNode(`Pepinos: ${precioPepino}€`);
            parrafo.appendChild(contenido);
            let container = document.getElementById('precio');
            container.appendChild(parrafo);
            hayPepino=true;
            }else{
                precioPepino +=2;

            document.getElementById('costoPepino').innerHTML=`Pepino: ${precioPepino} €`;
            hayPepino=true;
        }

        
    }
    if(data=='https://github.com/juanakan/Supermercado/blob/master/images/pimiento.png'){
        if(!hayPimiento){
            precioPimiento=1;
            let parrafo = document.createElement('p');
            parrafo.setAttribute('id','costoPimiento');
            let contenido = document.createTextNode(`Pimientos: ${precioPimiento}€`);
            parrafo.appendChild(contenido);
            let container = document.getElementById('precio');
            container.appendChild(parrafo);
            hayPimiento=true;
            }else{
                precioPimiento +=1;

                document.getElementById('costoPimiento').innerHTML=`Pimientos: ${precioPimiento}€`;
                hayPimiento=true;
        }

        
    }
    if(data=='https://github.com/juanakan/Supermercado/blob/master/images/cebolla.png'){
        if(!hayCebolla){
            precioCebolla=1.5;
            let parrafo = document.createElement('p');
            parrafo.setAttribute('id','costoCebolla');
            let contenido = document.createTextNode(`Cebollas: ${precioCebolla}€`);
            parrafo.appendChild(contenido);
            let container = document.getElementById('precio');
            container.appendChild(parrafo);
            hayCebolla=true;
            }else{
                precioCebolla +=1.5;

            document.getElementById('costoCebolla').innerHTML=`Cebollas: ${precioCebolla}€`;
            hayCebolla=true;
        }

        
    }
    if(data=='https://github.com/juanakan/Supermercado/blob/master/images/platano.png'){
        if(!hayPlatano){
            precioPlatano = 4;
            let parrafo = document.createElement('p');
            parrafo.setAttribute('id','costoPlatano');
            let contenido = document.createTextNode(`Platanos: ${precioPlatano}€`);
            parrafo.appendChild(contenido);
            let container = document.getElementById('precio');
            container.appendChild(parrafo);
            hayPlatano=true;
            }else{
                precioPlatano += 4;

                document.getElementById('costoPlatano').innerHTML=`Platanos: ${precioPlatano}€`;
                hayPlatano=true;
        }

        
    }
    let precioTotal=precioPera+precioNaranja+precioZanahoria+precioSandia+
        precioPepino+precioPimiento+precioCebolla+precioPlatano;
    document.getElementById('total').innerHTML=`Total: ${precioTotal}€`;

});
