import { Router } from "express";
import { adminController } from "../controllers/admin.controller";

export const adminRoutes = Router();

adminRoutes.post('/client/create', adminController.createClient);