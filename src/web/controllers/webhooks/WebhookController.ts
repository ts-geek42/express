import { WebhooksService } from "../../services/webhooks";

export class WebhookController {
  private webhooksService: WebhooksService;

  constructor() {
    this.webhooksService = new WebhooksService();
  }

  async handleWebhook(req: any, res: any) {
    const body = req.body;
    const eventType = body?.type;
    const data = body?.data;

    console.log("Webhook Received:", body);

    try {
      switch (eventType) {
        case "user.created": {
          await this.webhooksService.createUser(data);
          res.status(200).send({ message: "User created successfully" });
          break;
        }

        case "user.updated": {
          await this.webhooksService.updateUser(data);
          res.status(200).send({ message: "User updated successfully" });
          break;
        }

        case "user.deleted": {
          console.log(data, "data");
          await this.webhooksService.deleteUser(data);
          res.status(200).send({ message: "User deleted successfully" });
          break;
        }

        default: {
          console.warn("Unhandled event type:", eventType);
          res
            .status(400)
            .send({ message: `Unhandled event type: ${eventType}` });
          break;
        }
      }
    } catch (error) {
      console.error("Webhook handling error:", error);
      res.status(500).send({ message: "Internal server error" });
    }
  }
}
