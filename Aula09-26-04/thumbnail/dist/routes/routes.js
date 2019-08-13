"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const thumbnailController_1 = require("../controllers/thumbnailController");
class Routes {
    constructor() {
        this.thumbnailController = new thumbnailController_1.ThumbnailController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        app.route('/gerathumbnails')
            // POST endpoint
            .post(this.thumbnailController.gerarThumbnail);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map