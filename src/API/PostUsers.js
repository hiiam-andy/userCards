import axios from "axios"

export default class PostUsers {
  static async getAll(limit=4, skip=0) {
    const response = await axios.get('https://dummyjson.com/users/', {
      params: {
        limit:limit,
        skip: skip
      }
    })
    return response.data
  }
}