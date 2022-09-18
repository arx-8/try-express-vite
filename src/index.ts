import express from "express"
import { indexGet } from "src/handlers"

const app = express()

app.get("/", indexGet)

if (import.meta.env.PROD) {
  app.listen(3000)
}

export const viteNodeApp = app
