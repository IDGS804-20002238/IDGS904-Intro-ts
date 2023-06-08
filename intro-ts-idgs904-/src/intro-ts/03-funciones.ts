
function sumar(a,b):void{
    console.log(a+b)
}

const resultado = sumar('Angel','Tovar')

function suma2(n1:number,n2:number):number{
    return n1+n2
}

console.log('suma2',suma2(4,6))

function multiplicar(n3:number,n4:number,n5:number=5):number{
    let tem=n3*n5
    return tem
}
console.log('multiplicar',multiplicar(3,0,6))

interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function datosMascota(mascota:Mascotas, x:number):void{
    mascota.edad+=x
    console.log(mascota)
}

const nuevaMascota:Mascotas={
        nombre:"Juan",
        edad: 23,
        mostrarEdad(){
            console.log('La edad es: ', this.edad)
        }
}
datosMascota(nuevaMascota,4)

let funcSuma = function(n1:number,n2:number):number{
    return n1+n2
}

console.log("Funcion anonima",funcSuma(4,3));

function sumar3(...valores:number[]){
    let suma=0
    for(let x=0; x<valores.length; x++)
        suma+=valores[x];
    return suma
}

console.log("sumar 3",sumar3(10,2,3,4))
console.log("sumar 3.1",sumar3(1,2))