// 1-- Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada.
// (Con lista desordenada se refiere al elemento HTML, pero deben mostrarlos
// ORDENADOS en un elemento UL en el HTML, como el ejercicio final del TP5)
    
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros.push(Math.floor(Math.random() * 50) + 1);
    }

    numeros.sort((a, b) => a - b);

    let listaNumeros = document.getElementById("numeros");
    numeros.forEach(numero => {
        let li = document.createElement("li");
        li.innerText = numero;
        listaNumeros.appendChild(li);
    });

// 2-- Dado el array = [1,2,3,4,5,6]

let array = [1,2,3,4,5,6]

// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
// pantalla.

let i=0;
while (i < array.length) {
    document.write('(Ej 2-a):  ' + array[i] + '<br>');
    i++
}

document.write ('<hr>') //solo lo uso para separar los ejercicios 

// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
// pantalla.

for (let i= 0; i < array.length; i++) {
    document.write('(Ej 2-b):  ' + array[i] + '<br>');
}

document.write ('<hr>') //solo lo uso para separar los ejercicios 

// c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
// en pantalla.

array.forEach (function (array) {
    document.write('(Ej 2-c):  ' + array + '<br>');
});

document.write ('<hr>') //solo lo uso para separar los ejercicios 

// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.

let arrayaparte= [1,2,3,4,5,6];
let numerosumado= [];

    for (let i= 0; i < arrayaparte.length; i++) {
        numerosumado.push(arrayaparte [i] + 1);
        document.write('(Ej 2-d):  ' + numerosumado + '<br>');
    }

document.write ('<hr>') //solo lo uso para separar los ejercicios

// e. Generar una copia de un array pero con todos los elementos incrementados en 1.

let copia = [];
copia = array.slice();
for(let i=0; i < copia.length; i++){
    copia[i]++;
}

// f. Calcular el promedio

let total= 0;
for(let i=0; i < copia.length; i++){
    total += copia[i];
  }
let promedio = total / copia.length;
document.write('(Ej 2-f):  ' + 'el promedio es de: ' + promedio);

document.write ('<hr>') //solo lo uso para separar los ejercicios

// 3-- Dado un array de números, mostrar cómo quedaría si cada uno de los números es elevado
// al cuadrado.

let numeroselevados= [4,8,2,5,72,8];

for(let i=0; i < numeroselevados.length; i++){
    let numeroelevado = numeroselevados [i] **2;
    document.write ('(Ej 3):  ' + numeroelevado + '<br>')

}
document.write ('<hr>') //solo lo uso para separar los ejercicios

// 4-- Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.

let numeroselevados1= [1, -4, 12, 0, -3, 29, -150];
let sumar = 0;

for(let i=0; i < numeroselevados1.length; i++){

    let numeroelevado = numeroselevados1 [i] **2;

    if (numeroselevados1 [i] > 0) {
        sumar += numeroselevados1 [i];
    }
    document.write('(Ej 4):  ' + numeroelevado + '<br>');
}
document.write ('<br>')
document.write('sumas de los numeros: ' + sumar + '<br>');
document.write ('<hr>') //solo lo uso para separar los ejercicios
 

// 5-- Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].

let nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

// a. Obtener aquellos nombres con al menos 6 letras.

let nombreslargos = nombres.filter (nombre => nombre.length <= 6);
document.write ('(Ej 5-a):  ' + nombreslargos +'<br>');

document.write ('<hr>') //solo lo uso para separar los ejercicios

// b. Obtener los nombres que comienzan con "M".

for (let i=0; i< nombres.length; i++) {
  if (nombres [i].charAt(0)  === 'M') {
    document.write ('(Ej 5-b):  ' + nombres[i] +'<br>');
  }
}
document.write ('<hr>') //solo lo uso para separar los ejercicios

// c. Ordenar alfabéticamente y mostrar por consola.

    nombres.sort ();
    document.write ('(Ej 5-c):  ' + nombres +'<br>');
document.write ('<hr>') //solo lo uso para separar los ejercicios

// d. Generar un array que contenga solo las iniciales

let iniciales = [];

for(let i=0; i < nombres.length; i++) {
  iniciales.push(nombres[i][0]);
}

document.write(iniciales);
document.write ('<hr>') //solo lo uso para separar los ejercicios

// e. Ejemplo: ["F", "L", "E", "M",... ].

// f. Generar un array que contenga todos los nombres en mayúscula.

let mayusculas = [];

for(let i=0; i < nombres.length; i++) {
  mayusculas.push(nombres[i].toUpperCase ());
}
document.write(mayusculas);
document.write ('<hr>') //solo lo uso para separar los ejercicios

// g. Queremos saber si alguno de estos nombres comienza con "J”

let resultado = false;
for (let i = 0; i < nombres.length; i++) {
  if (nombres[i].charAt(0) === 'J') {
    document.write('Estos nombres empiezan con J: ' + nombres[i] + '<br>');
    resultado = true;
  }
} if (!resultado) {
    document.write('(Ej 5-g):  ' + 'Ningún nombre empieza con J');
}
  document.write ('<hr>') //solo lo uso para separar los ejercicios

// 6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar
// si un color introducido por el usuario a través de un prompt se encuentra dentro del array
// o no.

// let colores= ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
// let coloringresado = prompt ("Introduzca un color:");

//     if (colores.includes (coloringresado)) {
//         alert ('el color se encuentra en el array');
//     } else {
//         alert ('El color no se encuentra en el array');
// }


// 7. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares (Recuerda que ((numero % 2) == 0) determina si un numero es
// par o no, si tiene el resultado ==0 es par, sino es impar)

function numerospares(numerosp){
let pares = [];

    for(let i=0; i < numerosp.length; i++) {
        if (numerosp[i] %2 ===0) {
            pares.push(numerosp[i]);
        }
    }
    return pares;
}
let numerosp= [2,3,56,87,12,16];
let pares = numerospares (numerosp);

document.write('(Ej 7):  ' + pares);
document.write ('<hr>') //solo lo uso para separar los ejercicios

// 8. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.

function palabrasconvocales(array) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let palabrasconvocal = [];
  
    for (let i = 0; i < array.length; i++) {
        let palabra = array[i].toLowerCase();
        let letra = palabra[0];
  
      if (vocales.includes(letra)) {
        palabrasconvocal.push(palabra);
      }
    }
  
    return palabrasconvocal;
  }
  
let palabras = ['Toto', 'Anastasia', 'Rojo', 'Azul', 'Estefania'];
let palabrasvocal = palabrasconvocales(palabras);
document.write ('(Ej 8):  ' + palabrasvocal.join ('<br>'))
document.write ('<hr>') //solo lo uso para separar los ejercicios

// 9. Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo
// en base a sus índices

function intercambiarelementos(array, elementoA, elementoB) {
    let intercambio = array[elementoA];
    array[elementoA] = array[elementoB];
    array[elementoB] = intercambio;
  }
let numerosintercambio = [1,2,3,4,5,6,7,8,9];
document.write ('(Ej 9):  ' + numerosintercambio);

document.write ('<hr>') //solo lo uso para separar los ejercicios

intercambiarelementos (numerosintercambio, 6,2,8,4);
document.write ('(Ej 9):  ' + numerosintercambio);

document.write ('<hr>') //solo lo uso para separar los ejercicios

// 10. Confeccionar una página que muestre una tabla con dos filas y cambiar el color de fondo
// cuando sea presionada con el mouse.

let tabla = document.getElementById('tabla');
let filas = tabla.getElementsByTagName('tr');

    for (let i = 0; i < filas.length; i++) {
        filas[i].addEventListener('click', () => {
        filas[i].classList.add('seleccion');
    });
}


// 11. Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona.

let lista = document.querySelector ('ul');
let elementos = document.querySelectorAll ('li');

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener('click', () => {
            elementos[i].style.display = 'none';
        })
    }


// 12. Confeccionar una página que muestre dos tablas con tres filas cada una. Cambiar el color
// de fondo de cada fila de la primera tabla cuando sea presionada con el mouse (en lugar
// de tabla pueden usar otra estructura que les parezca mientras siga el ejemplo)

let tabla2 = document.getElementById('tabla2');
let filas1 = tabla2.getElementsByClassName('fila');

    for (let i = 0; i < filas1.length; i++) {
        filas1[i].addEventListener('click', () => {
        filas1[i].classList.toggle('seleccionada');
    });
}

// 13. Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en un
// div con un nombre de clase), repetir esto para tres noticias. Agregar tres botones que
// rescaten el nombre de la clase para la descripción de la noticia y cambien su tamaño de
// fuente.

let boton1 = document.getElementById("boton4");
let boton2 = document.getElementById("boton5");
let boton3 = document.getElementById("boton6");

boton1.addEventListener("click", () => {
  let noticia1 = document.querySelectorAll(".noticia1");
  noticia1.forEach((elemento) => {
    elemento.classList.toggle("grande");
  });
});

boton2.addEventListener("click", () => {
  let noticia2 = document.querySelectorAll(".noticia2");
  noticia2.forEach((elemento) => {
    elemento.classList.toggle("grande");
  });
});

boton3.addEventListener("click", () => {
  let noticia3 = document.querySelectorAll(".noticia3");
  noticia3.forEach((elemento) => {
    elemento.classList.toggle("grande");
  });
});

    
// 14. Crear una página que contenga dos tablas de 3 filas y 3 columnas cada una con un texto
// en cada casillero. Luego al presionar un botón cambiar por la cadena "-" solo el contenido
// de la primera tabla, dejando intacto el de la segunda.

function ocultarfila() {
    let tabla1 = document.getElementById('tabla4');
    let celdas = tabla1.getElementsByTagName('td');
    for (let i=0; i< celdas.length; i++) {
        celdas[i].textContent= '-';
    }
}

// 15. Definir un hipervínculo con la propiedad href con cadena vacía. Luego disponer tres
// botones que permitan fijar distintos hipervínculos para la propiedad href. Además
// actualizar el texto del hipervínculo.

let link = document.querySelector('a');

document.getElementById('boton1').addEventListener('click', () => {
  link.href = 'https://www.youtube.com/watch?v=bl_Jy7Q7l7s&ab_channel=Torlex05';
  link.textContent = 'Vegeta cantando';
});

document.getElementById('boton2').addEventListener('click', () => {
  link.href = 'https://www.youtube.com/watch?v=1Jkx79hz9jU&ab_channel=AngelLeonardoFabricioLiconaAguilar';
  link.textContent = 'Yoshi';
});

document.getElementById('boton3').addEventListener('click', () => {
  link.href = 'https://www.youtube.com/shorts/16uJ-jxcKHo';
  link.textContent = 'Mondongo';
});

// 16. Confeccionar una página que contenga algunas palabras con el elemento 'strong', luego
// cuando sean presionadas ocultarlas.
    
let textos = document.querySelectorAll ('strong');
    textos.forEach((strong) =>{
        strong.addEventListener('click', () => {
            strong.style.display = 'none';
        })
    });


// 17. Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla
// cuando ingresamos con el mouse y dejarla con dicho color cuando retiramos la flecha.

let filas2 = document.querySelectorAll ('.filas');

filas2.forEach((fila) => {
  fila.addEventListener('mouseenter', () => {
    fila.classList.add('color1');
  });

  fila.addEventListener('mouseout', () => {
    fila.classList ('color1');
  });
});

// 18. Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla
// cuando ingresamos con el mouse y regresar al original cuando salimos.

let filas3 = document.querySelectorAll ('.filas1');

filas3.forEach((fila) => {
  fila.addEventListener('mouseenter', () => {
    fila.classList.add('color1');
  });

  fila.addEventListener('mouseout', () => {
    fila.classList.remove ('color1');
  });
});

// 19. Disponer un div de 800 x 70 píxeles. Al hacer doble clic redimensionarlo a 250 x 250
// píxeles y si se hace doble clic nuevamente retornar al tamaño 800 x 70.
let divs = document.querySelectorAll('#miDiv');

divs.forEach((div) => {
    div.addEventListener('dblclick', () => {
        if (div.classList.contains('nuevo') && div.classList.contains('miDiv')) {
            div.classList.remove('nuevo', 'miDiv');
        } else {
            div.classList.add('nuevo', 'miDiv');
        }
    });
});

// 20. Confeccionar una página que contenga un div con un conjunto de párrafos. Cuando se
// presione con el mouse dentro del div ocultarlo lentamente y cuando esté completamente
// oculto hacer que aparezca lentamente otro bloque de texto.

let div = document.getElementById('div');
let nuevo = document.getElementById('nuevo1');

div.addEventListener('mousedown', () => {
  div.classList.add('nuevo1');
  setTimeout(() => {
    nuevocontenido.classList.remove('nuevo1');
  }, 1000);
});

// 21. Hacer que un link no salga de la página al hacer click, pero mostrar el valor de la página
// referida con console.log (utilicen el e.preventDefault, lo mostramos en clase varias veces,
// por ejemplo para hacer que no se recargue la pagina, después tienen que traer el elemento
// link, el cual debe tener un ID y lo muestran utilizando la forma
// “console.log(variableLinkQueGuardaron.href)”)

let link1 = document.getElementById('link2');

link1.addEventListener('click', (e) => {
  e.preventDefault(); 
  console.log(link1.href);
});

// 22. Hacer que un formulario no se envíe al hacer click en "enviar", en lugar de eso mostrar un
// texto en la página que el formulario fue enviado. (Misma función que el anterior, solo que
// muestren lo que mostraron por consola en una etiqueta HTML)

let formulario1 = document.getElementById('formulario');
let mensaje = document.getElementById('mensaje');

formulario1.addEventListener('submit', (e) => {
  e.preventDefault(); 
  mensaje.style.display = 'block'; 
});