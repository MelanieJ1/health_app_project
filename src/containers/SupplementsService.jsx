
const baseURL = 'http://localhost:9000/api/supplements'

const SupplementService = {

  getSupplements() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addSupplement(supplement) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(supplement),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateSupplement(supplement) {
    return fetch(baseURL + supplement._id, {
      method: 'PUT',
      body: JSON.stringify(supplement),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deleteSupplement(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};

export default SupplementService;



