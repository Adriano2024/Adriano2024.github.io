let checkup1 = document.getElementById('flexCheckDefault-1')
let label1 = document.getElementById('etiqueta1')
let checkup2 = document.getElementById('flexCheckDefault-2')
let label2 = document.getElementById('etiqueta2')
let checkup3 = document.getElementById('flexCheckDefault-3')
let label3 = document.getElementById('etiqueta3')
let checkup4 = document.getElementById('flexCheckDefault-4')
let label4 = document.getElementById('etiqueta4')
let checkup5 = document.getElementById('flexCheckDefault-5')
let label5 = document.getElementById('etiqueta5')
let checkup6 = document.getElementById('flexCheckDefault-6')
let label6 = document.getElementById('etiqueta6')
let checkup7 = document.getElementById('flexCheckDefault-7')
let label7 = document.getElementById('etiqueta7')
let isMarked1 = false;
let isMarked2 = false;
let isMarked3 = false;
let isMarked4 = false;
let isMarked5 = false;
let isMarked6 = false;
let isMarked7 = false;
let tipo = document.getElementById('input')
let popup = document.getElementById('popup')
let felicitaciones = document.getElementById('felicitaciones')
let btn = document.getElementById('btn')


checkup1.addEventListener('click', function (){
    isMarked1 = !isMarked1
    let tarea = label1.value
    let tipo1 = tipo.value

    if (isMarked1) { 
        felicitaciones.innerHTML = 'felicitaciones ' +tipo1+' completaste caminar !!!'
    label1.classList.add("marcado")
    popup.style.display = 'block';
} else {
    label1.classList.remove("marcado")
    popup.style.display = 'none';
}
btn.addEventListener('click', function(){
    popup.style.display = 'none'
})
})

checkup2.addEventListener('click', function (){
    isMarked2 = !isMarked2
    let tarea = label1.value
    let tipo1 = tipo.value
    if (isMarked2) {   
        felicitaciones.innerHTML = 'felicitaciones ' +tipo1+' completaste Estudiar guitarra !!!'
    label2.classList.add("marcado")
    popup.style.display = 'block';
} else {
    label2.classList.remove("marcado")
    popup.style.display = 'none';
}
btn.addEventListener('click', function(){
    popup.style.display = 'none'
})
})

checkup3.addEventListener('click', function (){
    isMarked3 = !isMarked3
    let tarea = label1.value
    let tipo1 = tipo.value
    if (isMarked3) {   
        felicitaciones.innerHTML = 'felicitaciones ' +tipo1+' completaste Estudiar programacion !!!'
    label3.classList.add("marcado")
    popup.style.display = 'block';
} else {
    label3.classList.remove("marcado")
    popup.style.display = 'none';
}
btn.addEventListener('click', function(){
    popup.style.display = 'none'
})
})

checkup4.addEventListener('click', function (){
    isMarked4 = !isMarked4
    let tarea = label1.value
    let tipo1 = tipo.value
    if (isMarked4) {   
        felicitaciones.innerHTML = 'felicitaciones ' +tipo1+' completaste pasear a Toby !!!'
    label4.classList.add("marcado")
    popup.style.display = 'block';
} else {
    label4.classList.remove("marcado")
    popup.style.display = 'none';
}
btn.addEventListener('click', function(){
    popup.style.display = 'none'
})
})

checkup5.addEventListener('click', function (){
    isMarked5 = !isMarked5
    let tarea = label1.value
    let tipo1 = tipo.value
    if (isMarked5) {   
        felicitaciones.innerHTML = 'felicitaciones ' +tipo1+' completaste comprar pan !!!'
    label5.classList.add("marcado")
    popup.style.display = 'block';
} else {
    label5.classList.remove("marcado")
    popup.style.display = 'none';
}
btn.addEventListener('click', function(){
    popup.style.display = 'none'
})
})
checkup6.addEventListener('click', function (){
    isMarked6 = !isMarked6
    let tarea = label1.value
    let tipo1 = tipo.value
    if (isMarked6) {   
        felicitaciones.innerHTML = 'felicitaciones ' +tipo1+' completaste comprar carne !!!'
    label6.classList.add("marcado")
    popup.style.display = 'block';
} else {
    label6.classList.remove("marcado")
    popup.style.display = 'none';
}
btn.addEventListener('click', function(){
    popup.style.display = 'none'
})
})
checkup7.addEventListener('click', function (){
    isMarked7 = !isMarked7
    let tarea = label1.value
    let tipo1 = tipo.value
    if (isMarked7) {   
        felicitaciones.innerHTML = 'felicitaciones ' +tipo1+' completaste comprar Verduras !!!'
    label7.classList.add("marcado")
    popup.style.display = 'block';
} else {
    label7.classList.remove("marcado")
    popup.style.display = 'none';
}
btn.addEventListener('click', function(){
    popup.style.display = 'none'
})
})



