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

//ventajas de la programacion orientada a objetos

//trabajamos con objetos literales
// const juan1 = {
//     name: "JuanDC",
//     userName: "juandc",
//     points: 100,
//     socialMedia: {
//         twitter: "fjuandc",
//         instagram: "fjuandc",
//         facebook: undefined,
//     },
//     approvedCourses: [
//         "Curso 1",
//         "Curso 2",
//         "Curso 3",
//     ],
//     learningPaths: [
//         {
//             name: "Ecuela...",
//             courses: [
//                 "Curso 1",
//                 "Curso 2",
//                 "Curso 4",
//             ]
//         },
//         {
//             name: "Ecuela video...",
//             courses: [
//                 "Curso a1",
//                 "Curso a2",
//                 "Curso a3",
//             ]
//         }
//     ],
// }
// const carlos1 = {
//     name: "Carlos",
//     userName: "CarlosDC",
//     points: 1000,
//     socialMedia: {
//         twitter: "fdcarlos",
//         instagram: "fdcarlos",
//         facebook: undefined,
//     },
//     approvedCourses: [
//         "Curso aaa1",
//         "Curso 2ddd",
//         "Curso 3dddd",
//     ],
//     learningPaths: [
//         {
//             name: "Ecuela...",
//             courses: [
//                 "Curso 1",
//                 "Curso 2",
//                 "Curso 4",
//             ]
//         },
//         {
//             name: "Ecuela dATA...",
//             courses: [
//                 "Curso aaa1",
//                 "Curso 2ddd",
//                 "Curso 3dddd",
//             ]
//         }
//     ],
// }
//es muy grande y poco eficiente

//objetos a clases

class LearningPaths1 {

}

// const escuelaWeb = new LearningPaths1();
// const escuelaData = new LearningPaths1();
// const escuelaVgs = new LearningPaths1();


class Student4 {
    constructor ({
        name,
        email,
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student4({
    name: "JuanDC",
    userName: "juandc",
    email: "juanito@guan.com",
    twitter: "fjuandc",
});
const carlos2 = new Student4({
    name: "carloDC",
    userName: "carlodc",
    email: "carloto@guan.com",
    instagram: "fcarlodc",
});


class LearningPath2 {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }
  
  const escuelaWeb = new LearningPath2({
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoJS,
      cursoReact,
      cursoNextJS,
    ],
  });
  
  const escuelaData = new LearningPath2({
    name: "Escuela de Data Science",
    courses: [
      cursoPython,
      CursoMatematicas,
      CursoExcel,
    ],
  });
///otro ejemplo

  class Course {
    constructor({
      id,
      name,
      teacher,
      lessons = [],
    }) {
      this.id = id;
      this.name = name;
      this.teacher = teacher;
      this.lessons = lessons;
    }
  }
  
  class LearningPath {
    constructor({
      id,
      name,
      courses = [],
    }) {
      this.id = id;
      this.name = name;
      this.courses = courses;
    }
  
    addCourse(course) {
      this.courses.push(course);
    }
  
    replaceCourse(oldCourse, newCourse) {
      const oldCourseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
  
      if (oldCourseIndex !== -1) {
        this.courses[oldCourseIndex] = newCourse;
      }
  
      return this.courses;
    }
  
    deleteCourse(oldCourse) {
      const courseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
      this.courses.splice(courseIndex, 1);
  
      return this.courses;
    }
  }
  
  const reactNativeLearningPath = new LearningPath({
    id: 'react-native',
    name: 'Desarrollo de Apps con React Native',
    courses: [
      new Course({ 
        id: 'basico-javascript', 
        name: 'Curso Básico de JavaScript', 
        teacher: 'Diego De Granda',
      }),
      new Course({
        id: 'ecmascript-6',
        name: 'Curso de ECMAScript 6+',
        teacher: 'Orlando Naipes',
      }),
      // etc...
    ]
  })