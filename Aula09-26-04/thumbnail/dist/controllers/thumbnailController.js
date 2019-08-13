"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const thumbnail = require("../shared/thumbnail");
class ThumbnailController {
    async gerarThumbnail(req, res) {
        try {
            const result = await thumbnail.default(req.body.url);
            res.send(result);
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.ThumbnailController = ThumbnailController;
//# sourceMappingURL=thumbnailController.js.map