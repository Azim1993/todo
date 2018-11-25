import axios from 'axios'

export const client = axios.create({
    json: true,
})
export const AUTH_TOKEN = 'azim-todo-tokon';