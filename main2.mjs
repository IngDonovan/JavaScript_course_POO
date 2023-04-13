function videoPlay(id) {
    const urlSecret = 'https://platzisssss.com' + id;
    console.log('Se está re`roduciendo desde la url ' + urlSecret);
}
function videoStop(id) {
    const urlSecret = 'https://platzisssss.com' + id;
    console.log('Pausamos la Url ' + urlSecret);
}

export class PlatziClass {
    constructor ({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}


class Course {
    constructor({
      name,
      classes = [],
      isFree = false,
      lang = "spanish",
    }) {
      this._name = name;
      this.classes = classes;
      this.isFree = isFree;
      this.lang = lang;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === "Curso Malito de Programación Básica") {
        console.error("Web... no");
      } else {
        this._name = nuevoNombrecito; 
      }
    }
  }
  
  const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
  });
  
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    isFree: true,
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
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoProgBasica,
      cursoDefinitivoHTML,
      cursoPracticoHTML,
    ],
  });
  
  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoProgBasica,
      "Curso DataBusiness",
      "Curso Dataviz",
    ],
  });
  
  const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
      cursoProgBasica,
      "Curso de Unity",
      "Curso de Unreal",
    ],
  })
  
  class Student {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
  }

  class FreeStudent extends Student {
    constructor(props){
      super(props);
    }
    approvedCourses(newCourse){
      if (newCourse.isFree){
        this.approvedCourses.push(newCourse);
      }else {
        console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
      }
    }
  }
  class BasicStudent extends Student {
    constructor(props){
      super(props);
    }
    approvedCourses(newCourse){
      if (newCourse.lang !== "en"){
        this.approvedCourses.push(newCourse);
      }else {
        console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles");
      }
    }
  }
  class ExpertStudent extends Student {
    constructor(props){
      super(props);
    }
    approvedCourses(newCourse){
        this.approvedCourses.push(newCourse);

    }
  }
  
  const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  
  const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });