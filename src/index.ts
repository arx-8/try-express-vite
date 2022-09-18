import express from "express"

const app = express()

app.get("/", (_, res) => {
  res.send("Hello, express!")
})

if (import.meta.env.PROD) {
  app.listen(3000)
}

export const viteNodeApp = app
