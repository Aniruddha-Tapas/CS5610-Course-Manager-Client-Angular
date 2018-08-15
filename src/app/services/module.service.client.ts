const JAVA_SERVER_URL = 'https://cs5610-whiteboard-server-java.herokuapp.com/';
// const JAVA_SERVER_URL = 'http://localhost:8080/';

export class ModuleServiceClient {
  MODULE_URL = JAVA_SERVER_URL + 'api/course/COURSE_ID/module';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
