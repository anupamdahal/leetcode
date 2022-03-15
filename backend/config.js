import dotenv from 'dotenv'

export const ENV = dotenv.config({path: '../.env'})
export const PORT = process.env.BACKEND_PORT