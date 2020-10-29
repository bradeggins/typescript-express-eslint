"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var app = express_1.default();
app.set("port", process.env.PORT || 3000);
app.use(express_1.default.json());
app.use(morgan_1.default(':date[web] :method :url :status :res[content-length] - :response-time ms'));
app.get("/", function (req, res) {
    res.status(200).send("Hello World Express + TypeScript + Linting");
});
exports.default = app;
//# sourceMappingURL=app.js.map