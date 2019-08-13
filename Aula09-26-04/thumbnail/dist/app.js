"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /lib/app.ts
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes/routes");
const cors = require("cors");
class App {
    constructor() {
        this.app = express();
        this.routePrv = new routes_1.Routes();
        this.options = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: 'localhost:3000',
            preflightContinue: false
        };
        this.config();
        this.routePrv.routes(this.app);
    }
    config() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map