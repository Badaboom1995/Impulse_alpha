export default class GoalsService {
  serverUrl = process.env.REACT_APP_API_URL;
  getHeaders = () => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    requestHeaders.append(
      "Authorization",
      `Bearer ${window.localStorage.impulseJWT}`
    );
    return requestHeaders;
  };
  async fetchGoals() {
    const response = await fetch(`${this.serverUrl}/challenges`, {
      method: "GET",
      headers: this.getHeaders()
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
  async createGoal(goal) {
    const response = await fetch(`${this.serverUrl}/challenges`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify(goal)
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
  async updateGoal(id, updates) {
    const response = await fetch(`${this.serverUrl}/challenge/${id}`, {
      method: "PATCH",
      headers: this.getHeaders(),
      body: JSON.stringify(updates)
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
  async deleteGoal(id) {
    const response = await fetch(`${this.serverUrl}/challenges/${id}`, {
      method: "DELETE",
      headers: this.getHeaders()
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
}
