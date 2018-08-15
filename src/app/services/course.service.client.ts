const JAVA_SERVER_URL = 'https://cs5610-whiteboard-server-java.herokuapp.com/';
// const JAVA_SERVER_URL = 'http://localhost:8080/';

export class CourseServiceClient {
  COURSE_URL = JAVA_SERVER_URL + 'api/course';
  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
}
