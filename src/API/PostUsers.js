import axios from "axios"

export default class PostUsers {
  static async getAll(limit, skip) {
    const response = await axios.get('https://dummyjson.com/users/', {
      params: {
        limit:limit,
        skip: skip
      }
    })
    return response.data
  }
}