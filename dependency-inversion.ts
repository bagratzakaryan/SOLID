// dependency Inversion
interface API {
  login(username: string, password: string);
}
class Api implements API {
  login(username: string, password: string): Promise<any> {
    return fetch("url", {
      method: "GET",
      body: JSON.stringify({ username, password }),
    });
  }
}

class LoginService {
  username = "user1";
  password = "12345";
  api: API;

  constructor(api: API) {
    this.api = api;
  }

  login() {
    this.api.login(this.username, this.password).then(console.log);
  }
}

const loginService = new LoginService(new Api());
loginService.login();
