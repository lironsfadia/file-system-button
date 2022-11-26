import axios from 'axios'

export const getData = (url: string) => {
  return axios
    .get(url)
    .then(function (response) {
      // handle success
      console.info(response.data)
      return response.data
    })
    .catch(function (error) {
      // handle error
      console.info(error)
      return error
    })
}
