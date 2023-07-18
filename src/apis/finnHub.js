import axios from "axios"

const TOKEN = "cip5fd9r01qrdahju4pgcip5fd9r01qrdahju4q0"

export default axios.create({
  baseURL:"https://finnhub.io/api/v1",
  params:{
    token:TOKEN
  }
})