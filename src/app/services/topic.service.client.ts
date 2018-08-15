const JAVA_SERVER_URL = 'https://cs5610-whiteboard-server-java.herokuapp.com/';
// const JAVA_SERVER_URL = 'http://localhost:8080/';

export class TopicServiceClient {
  TOPIC_URL = JAVA_SERVER_URL + 'api/course/COURSE_ID/module/MODULE_ID/lesson/LESSON_ID/topic';
  findTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch(this.TOPIC_URL.replace('COURSE_ID', courseId).replace('MODULE_ID', moduleId).replace('LESSON_ID', lessonId))
      .then(response => response.json());
  }
}
