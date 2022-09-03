// Variables:
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");


//contenedor de resultados
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
}


// Event Listeners:
    document.addEventListener("DOMContentLoaded", () => { // 1)en cuanto carga la pag, pondra en funcionamiento la funcion: mostrarAutos
        mostrarAutos();
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
});


maximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = e.target.value;
});


puertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = e.target.value;
});


transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value;
});


color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value;
});


// Funciones:

    function mostrarAutos () { // 2) funcion que mostrara el listado de autos en pantalla
        autos.forEach(auto => {
            const {marca, modelo, year, puertas, transmision, precio, color } = auto; //Destructuring
            
            const autoHTML = document.createElement("p");
            autoHTML.textContent = `
                ${marca} ${modelo} -año: ${year} -${puertas} Puertas -transmision: ${transmision} -precio: ${precio} -color: ${color}
            `;

            // 3) Inserta en el HTML: 
            resultado.appendChild(autoHTML);

        })
    }

// 4) Genera los años del menu año:

    function llenarSelect () { 
        for(let i = yearMax; i >= yearMin; i--) {
            const opcion = document.createElement("option");
            opcion.value = i;
            opcion.textContent = i;
            year.appendChild(opcion); //agrega todos los años al menu de año
        }
    }

    // 6) Funcion que filtra en base a la busqueda:
   function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter(filtrarYear)
    console.log(resultado);
   }

   function filtrarMarca (auto) {
    const { marca } = datosBusqueda;
    if( marca ) {
        return auto.marca === marca;
    }else {
        return auto;
        
   }
}

   function filtrarYear (auto) {
    const { year } = datosBusqueda;
    
    if( year ){
        return auto.year === parseInt(year);
    }else {
        return auto;
    
   }
}

