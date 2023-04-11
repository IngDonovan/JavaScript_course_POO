class Course {
    constructor({
        name,
        classes = [],
        coments = [],
    }) {
        this.name = name;
        this.clases = clases;
    }
} 

const cursoProgBasica = new Course({
    name : "Curso Gratis de Programación Básica",
});
const cursoDefinitivoHTML = new Course({
    name : "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name : "Curso Practico de HTML y CSS",
});

class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de desarrollo web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ]
});
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness",
        "Curso DataViz",
    ]
});
const escuelaVgs = new LearningPath({
    name: "Escuela de VideoJuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ]
});
