import { Router } from "express";
import { WebhookController } from "../../controllers/webhooks";

const webhookRoutes = Router();
const webhookController = new WebhookController();

webhookRoutes.post(
  "/",
  webhookController.handleWebhook.bind(webhookController)
);

export default webhookRoutes;
