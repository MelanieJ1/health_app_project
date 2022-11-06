
const baseURL = 'http://localhost:9000/api/medications'

const HealthService = {

  getMedications() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addMedication(medication) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(medication),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateMedication(medication) {
    return fetch(baseURL + medication._id, {
      method: 'PUT',
      body: JSON.stringify(medication),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deleteMedication(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};

export default HealthService;






// export const postMedications = (payload) => {
//   return fetch(baseURL, {
//     method: 'POST',
//     body: JSON.stringify(payload),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then((res) => res.json())
// }

// export const deleteMedication = (id) => {
//   return fetch(baseURL + id, { 
//     method: 'DELETE'
//   })};

// export const updateMedication = (medication) => {
//   return fetch(baseURL + medication._id, {
//       method: 'PUT',
//       body: JSON.stringify(medication),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(res => res.json());
  // }






