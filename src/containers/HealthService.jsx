
const baseURL = 'http://localhost:9000/api/medications'



export const getMedications = () => {
  return fetch(baseURL)
      .then(res => res.json())
}

export const postMedications = (payload) => {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

export const deleteMedication = (id) => {
  return fetch(baseURL + id, { 
    method: 'DELETE'
  })

}




