// Ejercicio 1: Calculadora de Edad
function calculadoraEdad() {
    let num = document.getElementById("Fecha").value;
    const fechaUsuario = new Date(num);
    const fechaActual = new Date();
    let añoUsuario = fechaUsuario.getFullYear();
    let añoActual = fechaActual.getFullYear();
    let result = añoActual - añoUsuario;
    console.log(result);
    let res = document.getElementById("resultado");
    res.innerHTML = result;
}

// Ejercicio 2: Búsqueda de Frutas
function tirandoFruta() {
    const frutas = ["Mango", "Cereza", "Damazco", "Ciruela", "Tomate", "Frutilla", "Sandía", "Naranja", "Durazno", "Manzana"];
    let frutaIngresada = document.getElementById("Fruta").value;
    let elementoEncontrado = frutas.find(frutaBuscar => frutaBuscar === frutaIngresada);
    
    let res2 = document.getElementById("resultado2");
    if (elementoEncontrado == frutaIngresada) {
        res2.innerHTML = "Sí, tenemos " + frutaIngresada + "!";
    } else {
        res2.innerHTML = "No, no tenemos " + frutaIngresada + "!";
    }
}

// Ejercicio 3: Comparación de Datos y Tipos
function comparandoDatosyTipos() {
    const num10 = 10;
    
    // Ejercicio A: Comparación con == (convierte tipos)
    if (num10 == '10') {
        console.log("true");
    }
    
    // Ejercicio B: Comparación con === (no convierte tipos)
    if (num10 === '10') {
        console.log("true");
    }
    
    // Ejercicio C: Es de tipo number
    // Ejercicio D: Si, true es igual a 1. Esto es porque al definir el tipo de dato de forma automática, 
    // js puede hacer comparaciones con resultados entre distintos tipos de datos.
}

// Ejercicio 4: Objeto con Propiedades
function yoObjeto() {
    const ciudades = {
        Nombre: "Zootopía", // (es lo primero que se me vino a la mente)
        fechaFundacion: "10/1/2011",
        poblacion: 101010
    };
    
    for (const propiedad in ciudades) {
        console.log(`${propiedad} : ${ciudades[propiedad]}`);
    }
}

// Ejercicio 5: Duplicar Array
function duplicarArray(numeros) {
    let nuevoArray = numeros.map(function(numero) {
        return numero * 2;
    });
    return nuevoArray;
}

// Ejecución del ejercicio 5
let arrayOriginal = [1, 2, 3, 4, 5];
let arrayDoble = duplicarArray(arrayOriginal);
console.log("Array original:", arrayOriginal);
console.log("Array con el doble:", arrayDoble);

// Ejercicio 6A: Triángulo de Asteriscos (Simple)
function trianguloAstericos1(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += "*";
        }
        console.log(line);
    }
}
trianguloAstericos1(5);

// Ejercicio 6B: Triángulo de Asteriscos (Centrado)
function trianguloAstericos2(n) {
    for (let i = 0; i < n; i++) {
        let ast = "";
        for (let j = 0; j < 2 * i + 1; j++) {
            ast += "*";
        }

        let esp = "";
        for (let k = 0; k < n - i - 1; k++) {
            esp += "-";
        }
        
        console.log(esp + ast + esp);
    }
}

// ========================================
// EJERCICIOS 7-11 (NUEVOS EJERCICIOS)
// ========================================

// Ejercicio 7: Nombres con 'A'
function nombresConA() {
    let listaNombres = document.getElementById("listaNombres").value;
    let arrayNombres = listaNombres.split(",");
    let nombresConA = [];
    
    for (let i = 0; i < arrayNombres.length; i++) {
        let nombre = arrayNombres[i].trim();
        if (nombre.charAt(0).toUpperCase() === 'A') {
            nombresConA.push(nombre);
        }
    }
    
    let resultado = document.getElementById("resultado7");
    if (nombresConA.length > 0) {
        resultado.innerHTML = "Nombres que empiezan con 'A': " + nombresConA.join(", ");
    } else {
        resultado.innerHTML = "No se encontraron nombres que empiecen con 'A'";
    }
}

// Ejercicio 8: Reemplazar Palabras
function reemplazarPalabras() {
    let textoOriginal = document.getElementById("textoOriginal").value;
    let palabraBuscar = document.getElementById("palabraBuscar").value;
    let palabraReemplazo = document.getElementById("palabraReemplazo").value;
    
    let textoResultado = textoOriginal.replace(new RegExp(palabraBuscar, 'g'), palabraReemplazo);
    
    let resultado = document.getElementById("resultado8");
    resultado.innerHTML = "Texto resultante: " + textoResultado;
}

// Ejercicio 9: Cortar Texto
function cortarTexto() {
    let textoCompleto = document.getElementById("textoCompleto").value;
    let numeroCaracteres = parseInt(document.getElementById("numeroCaracteres").value);
    
    let resultado = document.getElementById("resultado9");
    if (numeroCaracteres > 0 && numeroCaracteres <= textoCompleto.length) {
        let textoCortado = textoCompleto.substring(0, numeroCaracteres);
        resultado.innerHTML = "Texto cortado: " + textoCortado;
    } else {
        resultado.innerHTML = "El número debe ser mayor a 0 y menor o igual a la longitud del texto";
    }
}

// Ejercicio 10: String con Separador
function stringConSeparador() {
    let listaElementos = document.getElementById("listaElementos").value;
    let arrayElementos = listaElementos.split(",");
    
    // Limpiar espacios en blanco de cada elemento
    for (let i = 0; i < arrayElementos.length; i++) {
        arrayElementos[i] = arrayElementos[i].trim();
    }
    
    let stringConGuiones = arrayElementos.join(" - ");
    
    let resultado = document.getElementById("resultado10");
    resultado.innerHTML = "String con separador: " + stringConGuiones;
}

// Ejercicio 11: Calculadora de Recaudación
function calculadoraRecaudacion() {
    let listaPedidos = document.getElementById("listaPedidos").value;
    let arrayPedidos = listaPedidos.split(",");
    let recaudacionTotal = 0;
    
    for (let i = 0; i < arrayPedidos.length; i++) {
        let pedido = arrayPedidos[i].trim();
        let partesPedido = pedido.split(":");
        
        if (partesPedido.length === 2) {
            let nombreProducto = partesPedido[0].trim();
            let totalPedido = parseFloat(partesPedido[1].trim());
            
            if (!isNaN(totalPedido)) {
                recaudacionTotal += totalPedido;
            }
        }
    }
    
    let resultado = document.getElementById("resultado11");
    resultado.innerHTML = "Recaudación total: $" + recaudacionTotal.toFixed(2);
}