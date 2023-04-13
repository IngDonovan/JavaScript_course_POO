export default class Course {
  #name;
  constructor({
      id,
      name,
      classes = [],
      teacher,
    }){
      this.id = id;
      this.#name = name;
      this.classes = classes;
      this.teacher = teacher;
    };

    get name(){
      return this.#name;
    }
    set name(nuevoNombre){
      if (nuevoNombre === 'Curso Malito de Programación Básica') {
      console.error('Web... no');
    } else {
      this.#name = nuevoNombre;
    }
  }
}