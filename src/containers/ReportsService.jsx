const baseURL = 'http://localhost:9000/api/reports'



export const getReports = () => {
  return fetch(baseURL)
      .then(res => res.json())
}