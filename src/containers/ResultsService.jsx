const baseURL = 'http://localhost:9000/api/results'



export const getResults = () => {
  return fetch(baseURL)
      .then(res => res.json())
}


