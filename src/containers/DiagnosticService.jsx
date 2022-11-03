
const baseURL = 'http://localhost:9000/api/images'

const DiagnosticService = {
    getDiagnosticImage() {
      return fetch(baseURL).then((res) => res.json())
    },


    