import express from "express";
import PingController from "../controllers/ping";
import LoginController from "../controllers/login";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.post("/login", async(req, res) => {
    const controller = new LoginController();
    const {username, password} = req.body
    const response = await controller.auth({username, password})
    return res.send(response)
})

export default router;