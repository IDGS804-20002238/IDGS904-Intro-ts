



interface alumno{
    matricula?:number;
    nombre:string;
    email:string;
    edad:number
}



const alumnos:alumno={
    nombre:'Mario',
    edad:23,
    email:'mario@gmail',
    matricula:123
}

let vector1:Array<number>=[9,8,7,6,5];
vector1.push(34)

for (let elemento of vector1)
    console.log(elemento)