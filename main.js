const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",

    ],
    //crear metodos para aprobar el curso
    //hay dos formas,nombre del metodo los : y que sea igual a una funcion
    // aprobarCurso: function () { 
    // }
    //pero tambien : 
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
}; //objeto literal

//hacer que natalia apruebe otro curso
//natalia.cursosAprobados.push("Curso de Responsive Design");

//para llamarlo natalia.aprobarCurso("Curso de CSS Grid")

//para crear el primer prototipo, debemos crear funcion
//un molde
function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito){
    //     this.cursosAprobados.push(nuevoCursito);
    // } una forma de crear metodos en el objeto
}
Student.prototype.aprobarCurso = function (nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
 }
//crear un metodo por fuera de la funcion, usando la herramienta prototype

//crear una instancia de este protitipo
const juanita = new Student(
    "Juanita Alejadra",
    15,
    [
        "Curso de Introducción a la Producci´n de VideoJuegos",
        "Curso de Creación de Personajes"
    ]
);

// juanita
// Student {name: 'Juanita Alejadra', age: 15, cursosAprobados: Array(2)}
//juanita es una instancia de nuestro prototipo Student
//esconde en proto nuestro metodo

//prototipos con la sintaxis de clases

class Student2 {
    //con el metodo constructor
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    //crear metodos
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

//nueva instancia de este prototipo
const miguelito = new Student2(
    "Miguel",
    28,
    [
        "Curso Análisis de Negocios para Ciencia de Datos",
        "Curso de Principios de visualización de Datos "
    ],
);

// miguelito.aprobarCurso("Curso de Tableau");

// miguelito.cursosAprobados

//Roro

//en vez de recibir varios parametros podemos recibir un solo parámetro que sea de tipo objeto:

class Student3 {
    //con el metodo constructor
    constructor({
        name,
        age,
        cursosAprobados = [],
        email,
        facebook,
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
        this.facebook = facebook;
    }
    //crear metodos
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

const camilo = new Student3({
    email: "camilo@platzi.com",
    age: 28,
    name: "Camilo",
}
);//no importa el orden