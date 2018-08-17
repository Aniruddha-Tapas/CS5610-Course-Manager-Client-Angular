const NODE_SERVER_URL = 'https://cs5610-whiteboard-server-node.herokuapp.com/';
// const NODE_SERVER_URL = 'http://localhost:3000/';

export class UserServiceClient {

  createUser(username, password, type) {
    const user = {
      username: username,
      password: password,
      type: type
    };
    return fetch(NODE_SERVER_URL + 'api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findUserById(userId) {
    return fetch(NODE_SERVER_URL + 'api/user/' + userId)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch(NODE_SERVER_URL + 'api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch(NODE_SERVER_URL + 'api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch(NODE_SERVER_URL + 'api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          return response;
        }
      });
  }

  update(username, firstName, lastName, email, phone, address) {
    const newUser = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address
    };
    return fetch(NODE_SERVER_URL + 'api/update', {
      method: 'put',
      body: JSON.stringify(newUser),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
