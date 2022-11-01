const baseURL = 'http://localhost:9000/api/sightings/'

export const getMedData = () => {
    return fetch(baseURL)
        .then(res => res.json())
}