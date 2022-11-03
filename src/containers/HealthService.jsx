
const baseURL = 'http://localhost:9000/api/health_data/'



const HealthDataService = {
  getHealthData() {
    return fetch(baseURL).then((res) => res.json())
  },

  addNewItem(newItem) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
  },

}

export default HealthDataService;