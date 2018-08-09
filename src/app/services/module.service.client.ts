export class ModuleServiceClient {
  MODULE_URL = 'https://cs5610-whiteboard-server-java.herokuapp.com//api/course/COURSE_ID/module';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
