import { StatusCodes } from "../../../types";
import { WebhooksService } from "../../services/webhooks";

export class WebhookController {
  private webhooksService: WebhooksService;

  constructor() {
    this.webhooksService = new WebhooksService();
  }

  async handleWebhook(req: any, res: any) {
    const { type: eventType, data } = req.body;

    try {
      switch (eventType) {
        case "user.created":
          await this.webhooksService.createUser(data);
          return res
            .status(StatusCodes.OK)
            .json({ message: "User created successfully" });

        case "user.updated":
          await this.webhooksService.updateUser(data);
          return res
            .status(StatusCodes.OK)
            .json({ message: "User updated successfully" });

        case "user.deleted":
          await this.webhooksService.deleteUser(data);
          return res
            .status(StatusCodes.OK)
            .json({ message: "User deleted successfully" });

        default:
          return res.status(StatusCodes.BAD_REQUEST).json({
            message: `Unhandled event type: ${eventType}`,
          });
      }
    } catch (error) {
      console.error("Webhook handling error:", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error" });
    }
  }
}
