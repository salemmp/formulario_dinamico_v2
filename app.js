

    //OBTENEMOS LOS CHECKSBOS
    const c_aire_acondicionado= document.getElementById('c_aire_acondicionado')
    const c_refrigeracion= document.getElementById('c_refrigeracion')
    const c_ducto_aire= document.getElementById('c_ducto_aire')
    const c_caba_cuarto= document.getElementById('c_caba_cuarto')
    const c_sistema_chiller= document.getElementById('c_sistema_chiller')


    //OBTENEMOS LOS ACORDEONES EXISTENTES
    const a_aire_acondicionado  =   document.querySelector('.item_acordeon_aire')
    const a_refrigeracion       = document.querySelector('.item_acordeon_refrigeracion')
    const a_ducto               =   document.querySelector('.item_acordeon_ducto')
    const a_caba_cuarto         = document.querySelector('.item_acordeon_caba_cuarto')
    const a_chiller             =   document.querySelector('.item_acordeon_chiller')
   

    

    c_aire_acondicionado.addEventListener('change',(e)=>{
        e.preventDefault()
        const mostrar_aire_acondicionado = c_aire_acondicionado.checked ? true : false;
        if (mostrar_aire_acondicionado == true){
            a_aire_acondicionado.style.display='block'
            
        }else{
            a_aire_acondicionado.style.display='none'
        }
        
    })  



    c_sistema_chiller.addEventListener('change',(e)=>{
        e.preventDefault()
        const mostrar_sistema_chiller = c_sistema_chiller.checked ? true : false;
        if(mostrar_sistema_chiller==true){
            a_chiller.style.display='block'
        }else{
            a_chiller.style.display='none'
        }


    })


    c_ducto_aire.addEventListener('change',(e)=>{
        e.preventDefault()
        const mostrar_ducto_aire= c_ducto_aire.checked ? true: false;
        if(mostrar_ducto_aire ==true){
            a_ducto.style.display='block'
        }else{
            a_ducto.style.display='none'
        }
    })


    c_refrigeracion.addEventListener('change',(e)=>{
        e.preventDefault()
        const mostrar_refrigeracion= c_refrigeracion.checked ? true: false;
        if(mostrar_refrigeracion==true){
            a_refrigeracion.style.display='block'
        }else{
            a_refrigeracion.style.display='none'
        }
    })

    c_caba_cuarto.addEventListener('change',(e)=>{
        e.preventDefault()
        const mostrar_caba_cuarto= c_caba_cuarto.checked ? true: false;
        if(mostrar_caba_cuarto==true){
            a_caba_cuarto.style.display='block'
        }else{
            a_caba_cuarto.style.display='none'
        }
    })

//PARTE 2
const body_aire = document.querySelector('.acordion_body_aire')
const body_refrigeracion=document.querySelector('.acordion_body_refrigeracion')
const body_ducto =document.querySelector('.acordion_body_ductos')
const body_caba_cuarto=document.querySelector('.acordion_body_caba_cuarto')
const body_chiller=document.querySelector('.acordion_body_chiller')

const cantidad_aire=document.getElementById('cantidad_aire')
const cantidad_refrigeracion=document.getElementById('cantidad_refrigeracion')
const cantidad_ductos=document.getElementById('cantidad_ductos')
const cantidad_caba_cuarto=document.getElementById('cantidad_caba_cuarto')
const cantidad_chiller=document.getElementById('cantidad_chiller')

cantidad_aire.addEventListener('input',(e)=>{
    let cantidad=e.target.value
    let contenido =''


    for(let i=0;i<cantidad;i++){
        contenido+=`<div class="cartas" id='carta_aire_acondicionado${i}'>
        <h4>Aire Acondicionado ${i+1}</h4>
        <div class=cuerpo_cartas>
        
        <label for="">Tipo de Servicio</label>
        <select name="" id="">
            <option value="proyecto">Proyecto</option>
            <option value="asesoria">Asesoria</option>
            <option value="presupuesto">Presupuesto</option>
            <option value="diagnostico">Diagnostico/Revision</option>
            <option value="instalacion">Instalacion</option>
            <option value="desinstalacion">Desinstalacion</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="reparacion">Reparacion</option>
        </select>
        <label for="">Tipo de Equipo</label>
        <select name="" id="">
            <option value="aparato_de_ventana">Aparato de Ventana</option>
            <option value="mini_split">Mini Split</option>
            <option value="split">Split</option>
            <option value="multi_split">Multi Split</option>
            <option value="casette">Casette</option>
        </select>
        <label for="">Capacidad</label>
        <div class="container_capacidad">
        <input type="text">
        <select name="" id="">
            <option value="BTU">BTU</option>
            <option value="TR">TR</option>
        </select>
        </div>
        </div>
    </div>`
    }
    body_aire.innerHTML=contenido
})


cantidad_refrigeracion.addEventListener('input',(e)=>{
    let cantidad=e.target.value
    let contenido =''


    for(let i=0;i<cantidad;i++){
        contenido+=`<div class="cartas" id='carta_refrigeracion${i}'>
        <h4>Refrigeracion ${i+1}</h4>
        <div class=cuerpo_cartas>
        
        <label for="">Tipo de Servicio</label>
        <select name="" id="">
            <option value="proyecto">Proyecto</option>
            <option value="asesoria">Asesoria</option>
            <option value="presupuesto">Presupuesto</option>
            <option value="diagnostico">Diagnostico/Revision</option>
            <option value="instalacion">Instalacion</option>
            <option value="desinstalacion">Desinstalacion</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="reparacion">Reparacion</option>
        </select>
        <label for="">Tipo de Equipo</label>
        <select name="" id="">
            <option value="aparato_de_ventana">Aparato de Ventana</option>
            <option value="mini_split">Mini Split</option>
            <option value="split">Split</option>
            <option value="multi_split">Multi Split</option>
            <option value="casette">Casette</option>
        </select>
        <label for="">Capacidad</label>
        <div class="container_capacidad">
        <input type="text">
        <select name="" id="">
            <option value="BTU">BTU</option>
            <option value="TR">TR</option>
        </select>
        </div>
        </div>
    </div>`
    }
    body_refrigeracion.innerHTML=contenido
})

cantidad_ductos.addEventListener('input',(e)=>{
    let cantidad=e.target.value
    let contenido =''


    for(let i=0;i<cantidad;i++){
        contenido+=`<div class="cartas" id='carta_ductos${i}'>
        <h4>Ducto ${i+1}</h4>
        <div class=cuerpo_cartas>
        
        <label for="">Tipo de Servicio</label>
        <select name="" id="">
            <option value="proyecto">Proyecto</option>
            <option value="asesoria">Asesoria</option>
            <option value="presupuesto">Presupuesto</option>
            <option value="diagnostico">Diagnostico/Revision</option>
            <option value="instalacion">Instalacion</option>
            <option value="desinstalacion">Desinstalacion</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="reparacion">Reparacion</option>
        </select>
        <label for="">Tipo de Equipo</label>
        <select name="" id="">
            <option value="aparato_de_ventana">Aparato de Ventana</option>
            <option value="mini_split">Mini Split</option>
            <option value="split">Split</option>
            <option value="multi_split">Multi Split</option>
            <option value="casette">Casette</option>
        </select>
        <label for="">Capacidad</label>
        <div class="container_capacidad">
        <input type="text">
        <select name="" id="">
            <option value="BTU">BTU</option>
            <option value="TR">TR</option>
        </select>
        </div>
        </div>
    </div>`
    }
    body_ducto.innerHTML=contenido
})

cantidad_caba_cuarto.addEventListener('input',(e)=>{
    let cantidad=e.target.value
    let contenido =''


    for(let i=0;i<cantidad;i++){
        contenido+=`<div class="cartas" id='carta_caba_cuarto${i}'>
        <h4>Almacenamiento ${i+1}</h4>
        <div class=cuerpo_cartas>
        
        <label for="">Tipo de Servicio</label>
        <select name="" id="">
            <option value="proyecto">Proyecto</option>
            <option value="asesoria">Asesoria</option>
            <option value="presupuesto">Presupuesto</option>
            <option value="diagnostico">Diagnostico/Revision</option>
            <option value="instalacion">Instalacion</option>
            <option value="desinstalacion">Desinstalacion</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="reparacion">Reparacion</option>
        </select>
        <label for="">Tipo de Equipo</label>
        <select name="" id="">
            <option value="aparato_de_ventana">Aparato de Ventana</option>
            <option value="mini_split">Mini Split</option>
            <option value="split">Split</option>
            <option value="multi_split">Multi Split</option>
            <option value="casette">Casette</option>
        </select>
        <label for="">Capacidad</label>
        <div class="container_capacidad">
        <input type="text">
        <select name="" id="">
            <option value="BTU">BTU</option>
            <option value="TR">TR</option>
        </select>
        </div>
        </div>
    </div>`
    }
    body_caba_cuarto.innerHTML=contenido
})

cantidad_chiller.addEventListener('input',(e)=>{
    let cantidad=e.target.value
    let contenido =''


    for(let i=0;i<cantidad;i++){
        contenido+=`<div class="cartas" id='carta_chiller${i}'>
        <h4>Sistema Chiller ${i+1}</h4>
        <div class=cuerpo_cartas>
        
        <label for="">Tipo de Servicio</label>
        <select name="" id="">
            <option value="proyecto">Proyecto</option>
            <option value="asesoria">Asesoria</option>
            <option value="presupuesto">Presupuesto</option>
            <option value="diagnostico">Diagnostico/Revision</option>
            <option value="instalacion">Instalacion</option>
            <option value="desinstalacion">Desinstalacion</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="reparacion">Reparacion</option>
        </select>
        <label for="">Tipo de Equipo</label>
        <select name="" id="">
            <option value="aparato_de_ventana">Aparato de Ventana</option>
            <option value="mini_split">Mini Split</option>
            <option value="split">Split</option>
            <option value="multi_split">Multi Split</option>
            <option value="casette">Casette</option>
        </select>
        <label for="">Capacidad</label>
        <div class="container_capacidad">
        <input type="text">
        <select name="" id="">
            <option value="BTU">BTU</option>
            <option value="TR">TR</option>
        </select>
        </div>
        </div>
    </div>`
    }
    body_chiller.innerHTML=contenido
})
