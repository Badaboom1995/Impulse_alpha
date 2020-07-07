export default class GoalsService {
  async createUser(user) {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    const response = await fetch(`http://localhost:3001/users`, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
  }
}
