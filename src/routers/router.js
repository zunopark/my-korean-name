import express from "express";
import routes from "../routes";
import { homeCon, submitCon, resultCon } from "../controllers/controller";

const router = express.Router();

router.get(routes.home, homeCon);
router.post(routes.submit, submitCon);
router.get(routes.result, resultCon);

export default router;
