const JAVA_SERVER_URL = 'https://cs5610-whiteboard-server-java.herokuapp.com/';
// const JAVA_SERVER_URL = 'http://localhost:8080/';

export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    return fetch(JAVA_SERVER_URL + 'api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
