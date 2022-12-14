import express from "express"
import { indexGet } from "src/handlers"

const app = express()

// define handlers
app.get("/", indexGet)

// run for production
if (import.meta.env.PROD) {
  const port = 30001
  const server = app.listen(port, () => {
    console.log(`⚡️ Server is running on port ${port}!`)
  })

  // For Docker graceful shutdown
  const shutdownGraceful: NodeJS.SignalsListener = (signal) => {
    console.log(`⚡️ Received signal to terminate: ${signal}`)
    server.close(() => {
      console.log("⚡️ Server terminated gracefully.")
      process.exit()
    })
  }
  process.on("SIGINT", shutdownGraceful)
  process.on("SIGTERM", shutdownGraceful)
}

// run for development
export const viteNodeApp = app
