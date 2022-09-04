// Variables:
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");


//contenedor para los resultados
const resultado = document.querySelector("#resultado");


const yearMax = new Date().getFullYear(); //getFullYear hace que siempre este actualizado en el año actual
const yearMin = yearMax - 10;

// 5) Genear un objeto con las selecciones de busqueda:
const datosBusqueda = {
    marca : "",
    year : "",
    minimo : "",
    maximo : "",
    puertas : "",
    transmision : "",
    color : "",
};


// Event Listeners:
    document.addEventListener("DOMContentLoaded", () => { // 1)en cuanto carga la pag, pondra en funcionamiento la funcion: mostrarAutos
        mostrarAutos(autos);
        llenarSelect(); // 4) llena el menu desplegable Año
    });


    // Event listeners para los select de busqueda:

marca.addEventListener("change", (e) => {
    datosBusqueda.marca = e.target.value;
    // console.log(datosBusqueda);

    filtrarAuto(); //6)
});

year.addEventListener("change", (e) => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});


minimo.addEventListener("change", (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});


maximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});


puertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});


transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});


color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});


// Funciones:

    function mostrarAutos (autos) { // 2) funcion que mostrara el listado de autos en pantalla
        limpiarHTML(); //Elimina el HTML previo

        autos.forEach(auto => {
            const {marca, modelo, year, puertas, transmision, precio, color } = auto; //Destructuring
            
            const autoHTML = document.createElement("p");
            autoHTML.textContent = `
                ${marca} ${modelo} -año: ${year} -${puertas} Puertas -transmision: ${transmision} -precio: ${precio} -color: ${color}
            `;

            // 3) Inserta en el HTML: 
            resultado.appendChild(autoHTML);

        })
    };

//Limpiar el Html:
    function limpiarHTML () {
        while(resultado.firstChild) {
            resultado.removeChild(resultado.firstChild);
        }
    };

// 4) Genera los años del menu año:

    function llenarSelect () { 
        for(let i = yearMax; i >= yearMin; i--) {
            const opcion = document.createElement("option");
            opcion.value = i;
            opcion.textContent = i;
            year.appendChild(opcion); //agrega todos los años al menu de año
        }
    };

    // 6) Funcion que filtra en base a la busqueda:
   function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    console.log(resultado);

    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();

    }
    
   };

//Funcion de aviso de no resultados:
   function noResultado () {
        limpiarHTML();

        const noResultado = document.createElement("div");
        noResultado.classList.add("alerta", "error");
        noResultado.textContent = "No hay resultados,  por favor pruebe con otros terminos de busqueda";
        resultado.appendChild(noResultado);
   };

   function filtrarMarca (auto) {
    const { marca } = datosBusqueda;
    if( marca ) {
        return auto.marca === marca;
    }else {
        return auto;
        
   }
};

   function filtrarYear (auto) {
    const { year } = datosBusqueda;
    
    if( year ){
        return auto.year === parseInt(year);
    }else {
        return auto;
    
   }
};

function filtrarMinimo (auto) {
    const { minimo } = datosBusqueda;
    
    if(minimo ){
        return auto.precio >= minimo;
    }else {
        return auto;
    
   }
};

function filtrarMaximo (auto) {
    const { maximo } = datosBusqueda;
    
    if(maximo){
        return auto.precio <= maximo;
    }else {
        return auto;
    
   }
};

function filtrarPuertas (auto) {
    const { puertas } = datosBusqueda;
    if( puertas ) {
        return auto.puertas === puertas;
    }else {
        return auto;
        
   }
};

function filtrarTransmision (auto) {
    const { transmision } = datosBusqueda;
    if( transmision ) {
        return auto.transmision === transmision;
    }else {
        return auto;
        
   } 
};

function filtrarColor (auto) {
    const { color } = datosBusqueda;
    if( color ) {
        return auto.color === color;
    }else {
        return auto;
        
   } 
};



