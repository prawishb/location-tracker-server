import { Router } from "express"

const router = Router();

router.use("/hello-world", (req, res) => {
  res.send("Hello, World!")
})

export default router