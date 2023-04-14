
import Course from './course.mjs'
import Teacher from './teacher.mjs'
import Lesson from './lesson.mjs'
import LearningPath from './learningPath.mjs'
import Student from './student.mjs'

import FreeStudent from './freeStudent.mjs'
import BasicStudent from './basicStudent.mjs'
import ExpertStudent from './expertStudent.mjs'


//* Teachers ---------------------
const FreddyVega = new Teacher({
  id: 1,
  name: 'Freddy Vega',
  speciality: 'CEO',
});
console.log(FreddyVega);

const ClauAlderete = new Teacher({
  id: 2,
  name: 'Clau Alderete',
  speciality: 'Digital Marketing',
});
console.log(ClauAlderete);


//* Lecciones -----------------------
const lesson1PB = new Lesson({
  id: 1,
  title: 'Clase 1 Programación Básica',
});
console.log(lesson1PB);

const lesson1DM = new Lesson({
  id: 2,
  title: 'Clase 1 Marketing Digital',
});
console.log(lesson1DM);


//* Cursos ----------------------------
const cursoProgramacionBasica = new Course({
  id: 1,
  name: "Curso gratis de programación básica",
  classes: [lesson1PB],
  teacher: FreddyVega,
});
console.log(cursoProgramacionBasica);

const cursoIntroMarketingDigital = new Course({
  id: 2,
  name: 'Curso de Introducción al Marketing Digital',
  classes: [lesson1DM],
  teacher: ClauAlderete
});
console.log(cursoIntroMarketingDigital);


//* Escuelas ---------------------
const escuelaDesarrolloWeb = new LearningPath({
  id: 1,
  title: 'Escuela de Desarrollo Web',
  courses: [cursoProgramacionBasica],
});
console.log(escuelaDesarrolloWeb);

const escuelaMarketingDigital = new LearningPath({
  id: 2,
  title: 'Marketing Digital',
  courses: [cursoIntroMarketingDigital],
});
console.log(escuelaMarketingDigital);


//* Estudiantes ---------------------
const miguel = new ExpertStudent({
  id: 1,
  name: 'Miguel',
  email: 'miguel@gmail.com',
  username: 'mike',
  points: 40000,
  approvedCourses: [cursoProgramacionBasica],
  learningPaths: [escuelaDesarrolloWeb]
});
console.log(miguel);

const juan = new FreeStudent({
  id: 2,
  name: 'Juan',
  email: 'juan@gmail.com',
  username: 'juanDC',
  points:  100000,
})
console.log(juan)
juan.approveCourse(cursoProgramacionBasica)
juan.approveCourse(cursoIntroMarketingDigital)
console.log(juan.approvedCourses)

const daniel = new BasicStudent({
  id: 3,
  name: 'Daniel',
})
console.log(daniel)
daniel.approveCourse(cursoProgramacionBasica)
daniel.approveCourse(cursoIntroMarketingDigital)
console.log(daniel.approvedCourses)