 let num = Number(prompt("Ingresa un número entre 0 y 100"));
let contador = 0;

// pregunta 1
while (contador <= num) {
  console.log(contador);
  document.write(`<p>${contador}</p>`);
  contador++;
} 

// pregunta 2
let respuesta2 =prompt("¿De qué color es el caballo blanco de napoleón?")
while (respuesta2!=="blanco"){
    respuesta2=prompt("¿De qué color es el caballo blanco de napoleón?")
} 
//pregunta 3
let promMatematicas =Number(prompt("ingresar promedio matemáticas"))
let promFisica=Number(prompt("ingresar promedio física"))
let promCiencias=Number(prompt("ingresar promedio ciencias"))
let promTotal=Math.round(( promMatematicas+promFisica+promCiencias)/3)
alert(`promedio total: ${promTotal}`)

// pregunta 4
let fruta1 = prompt('Ingrese fruta 1')
let fruta2 = prompt('Ingrese fruta 2')
let fruta3 = prompt('Ingrese fruta 3')

if(fruta1!=="manzana") {
    console.log(fruta1)
}

//pregunta 5
let nombre = prompt("ingresa tu nombre")
let vocalArr =["a","e","i","o","u"]
let consoArr=["b","c","d","f","g","h","j","k","l","m","n","ñ","p","q","r","s","t","v","w","x","y","z"]
let sumaVocales = 0;
let sumaConsonantes = 0;

for (let index = 0; index < nombre.length; index++) {
    const letra = nombre[index];
    if (vocalArr.some(vocal => vocal === letra.toLowerCase())) {
        sumaVocales++;
    }
    if (consoArr.some(consonante => consonante === letra.toLowerCase())) {
        sumaConsonantes++;
    }
}

alert(`El nombre ${nombre} tiene ${sumaVocales} vocales y ${sumaConsonantes} consonantes.`)