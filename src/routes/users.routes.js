import { Router } from "express";
import {
  getUsers,
  getUser,
  CreateUsers,
  DeleteUser,
  UpdateUser,
} from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("/users", CreateUsers);

router.delete("/users/:id", DeleteUser);

router.put("/users/:id", UpdateUser);

export default router;
