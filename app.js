

    //OBTENEMOS LOS CHECKSBOS
    const c_aire_acondicionado= document.getElementById('c_aire_acondicionado')
    const c_sistema_chiller= document.getElementById('c_sistema_chiller')
    const c_ducto_aire= document.getElementById('c_ducto_aire')
    const c_refrigeracion= document.getElementById('c_refrigeracion')
    const c_caba_cuarto= document.getElementById('c_caba_cuarto')


    //OBTENEMOS LOS ACORDEONES EXISTENTES
    const a_aire_acondicionado  =   document.querySelector('.item_acordeon_aire')
    const a_chiller             =   document.querySelector('.item_acordeon_chiller')
    const a_ducto               =   document.querySelector('.item_acordeon_ducto')
    const a_refrigeracion       = document.querySelector('.item_acordeon_refrigeracion')
    const a_caba_cuarto         = document.querySelector('.item_acordeon_caba_cuarto')
   






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

