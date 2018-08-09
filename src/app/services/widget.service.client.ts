export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    return fetch('https://cs5610-whiteboard-server-java.herokuapp.com//api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
