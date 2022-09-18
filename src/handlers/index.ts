import { RequestHandler } from "express"

export const indexGet: RequestHandler<never, string> = (_, res) => {
  res.send("Hello, world!")
}
