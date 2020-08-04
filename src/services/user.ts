export default class UserService {
  serverUrl = process.env.REACT_APP_API_URL;
  async createUser(user) {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    const response = await fetch(`${this.serverUrl}/users`, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(user)
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
  async getProfile() {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    requestHeaders.append(
      "Authorization",
      `Bearer ${window.localStorage.impulseJWT}`
    );
    const response = await fetch(`${this.serverUrl}/users/me`, {
      method: "GET",
      headers: requestHeaders
    });
    const data = await response.json();
    console.log(data);
    return data;
  }

  async logOut() {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.append(
      "Authorization",
      `Bearer ${window.localStorage.impulseJWT}`
    );
    const response = await fetch(`${this.serverUrl}/users/logout`, {
      method: "POST",
      headers: requestHeaders
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
}
