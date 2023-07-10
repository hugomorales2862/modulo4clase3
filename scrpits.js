// function funcionClic(){
//     alert("click sobre el boton")
// };

// tambien se puede hacer una funcion asi 

const button = document.querySelector('button');


// // const funcionClic = () => {
// //     alert ('hola mundo')
// // }

// // const funcionClic = () => {
// //     alert ('hicieron click sobre mi ')
// // }
// const funcionEnter = () => {
//     alert ('el mouse entro ')
// }

// button.onclick =funcionClic
// // const funcionClic =() => "hola mundo "


// // hacemos los listener

// // button.addEventListener('click', () => {

// // }) funcion anonima

// button.addEventListener ('click', funcionClic())
// button.addEventListener('mouseenter', funcionEnter())

// document.addEventListener ('')

const randomColor = (number) => {
    return Math.floor (Math.random() * number + 1)
}

button.addEventListener('click', (e) => {
    console.log(e)
    document.body.style.backgroundColor = `rgb(${randomColor(255)},${randomColor(255)},${randomColor(255)})
    
    `})

