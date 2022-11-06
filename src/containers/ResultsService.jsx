
const baseURL = 'http://localhost:9000/api/results'


export const getReports = () => {
    return fetch(baseURL)
        .then(res => res.json())
  }


// export const ResultsService = {
//   getReports() {
//     return fetch(baseURL).then((res) => res.json())
//   },

//   viewReport(Report) {
//     return fetch(baseURL, {
//       method: 'GET',
//       body: JSON.stringify(Report),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }).then((res) => res.json())
//   },

// }

export default getReports;