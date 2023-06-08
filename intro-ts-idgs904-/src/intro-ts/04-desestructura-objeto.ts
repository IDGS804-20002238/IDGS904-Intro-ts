interface Alumno{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo{
    grupo:string;
    year:number;
}

const alumno2:Alumno={
    matricula1:12345,
    nombre:'Angel',
    edad:22,
    correo:'angel22@gmail.com',
    grupo:{
        grupo:'idgs904',
        year:2023
    }
}

const{matricula1,grupo:xx}=alumno2
const{grupo}=xx

console.log(`la matricula es: ${matricula1}`)
console.log(`El nombre es: ${alumno2.nombre}`)
console.log(`La edad es: ${alumno2.edad}`)
console.log(`El correo es: ${alumno2.correo}`)
console.log(`El Grupo es: ${alumno2.grupo.grupo}`)
console.log(`El Año del Grupo es: ${alumno2.grupo.year}`)

const gps:string[]=['IDGS','IEVN','REDES'];
console.log(`Grupo 1: ${gps[0]}`)
console.log(`Grupo 2: ${gps[1]}`)
console.log(`Grupo 3: ${gps[2]}`)