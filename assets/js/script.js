function registrarNombre(){
    nombre = document.querySelector("#nombre")
    ingreso=prompt("Ingrese su nombre")
    nombre.innerHTML=ingreso
};

function registrarSueldo(){
    sueldo=document.querySelector("#sueldoBase")
    pago=Number(prompt("Ingrese su sueldo"))
    sueldo.innerHTML=pago
};

function sueldoFinal(){
    base=Number(document.querySelector("#sueldoBase").textContent)
    calculo=document.querySelector("#sueldoFinal")
    tipoContrato=document.querySelector("#contratos").value
    if (tipoContrato=="honorario"){
        final=base-(base*0.1)
    }else{
        final=base-(base*0.2)
    }
    calculo.innerHTML=final
}

function vaciarDatos(){
    sueldo=document.querySelector("#sueldoBase")
    nombre = document.querySelector("#nombre")
    final=document.querySelector("#sueldoFinal")
    nombre.innerHTML=""
    sueldo.innerHTML=0
    final.innerHTML=0
}