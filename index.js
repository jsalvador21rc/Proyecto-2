
const modalContacto = new bootstrap.Modal(document.getElementById('modalContacto'))
const formContacto = document.querySelector('form')

let opcion = ''

btnContactos.addEventListener('click', ()=>{ 
    nombre.value = ''
    numero.value = ''
    modalContacto.show()
    opcion = 'contacto'
})

function guardar (){
    let nombre = document.getElementById('nombre').value
    let numero = document.getElementById('numero').value

    let inputValues = ({
        "nombre": nombre,
        "numero": numero 
    })

    let datos = JSON.parse(localStorage.getItem('usuarios')) ? JSON.parse(localStorage.getItem('usuarios')) : []
    console.log(inputValues)
    datos.push(inputValues)
    console.log(datos)
   console.log(JSON.stringify(datos))
   localStorage.setItem('usuarios', JSON.stringify(datos))

   document.getElementById("nombre").value = '' ;
   document.getElementById("numero").value = ''; 

    render()
}

function render(){
    console.log(localStorage.getItem('usuarios'));
    let cuerpo = document.getElementById("cuerpo");
    let datos = JSON.parse(localStorage.getItem("usuarios")) ? JSON.parse(localStorage.getItem("usuarios")) : []
    console.log(datos)
    cuerpo.innerHTML = ''
    datos.forEach((element, index) => {
        console.log(element)
        cuerpo.innerHTML += ` <tr>
                                <td>${element.nombre}</td>
                                <td>${element.numero}</td>
                                <td class="text-center">
                                <button class="btnEditar btn btn-primary">Editar</button>
                                <button onclick="borrar(${index})" class="btnBorrar btn btn-danger">Borrar</button>
                                </td>
                              </tr>
        
                            `
    });
}

function borrar(position){
    let datos = JSON.parse(localStorage.getItem("usuarios")) ? JSON.parse(localStorage.getItem("usuarios")) : []
    datos.splice(position, 1)
    JSON.stringify(datos)
    localStorage.setItem('usuarios', JSON.stringify(datos))
    render()
}

render()

//const on = (element, event, selector, handler) => {
//    element.addEventListener(event, e => {
//        if(e.target.closest(selector)){
//            handler(e)
//        }
//    })
//}
//
//on(document, 'click', '.btnBorrar', e =>{
//    const fila = e.target.parentNode.parentNode
//    const id = fila.firstElementChild.innerHTML
//    alertify.confirm("This is a donfirm dialog.",
//    function(){
//
//    })
//})