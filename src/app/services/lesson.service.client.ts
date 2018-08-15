const JAVA_SERVER_URL = 'https://cs5610-whiteboard-server-java.herokuapp.com/';
// const JAVA_SERVER_URL = 'http://localhost:8080/';

export class LessonServiceClient {
  LESSON_URL = JAVA_SERVER_URL + 'api/course/COURSE_ID/module/MODULE_ID/lesson';
  findLessonsForModule(courseId, moduleId) {
    return fetch(this.LESSON_URL.replace('COURSE_ID', courseId).replace('MODULE_ID', moduleId))
      .then(response => response.json());
  }
}
