"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarWarsModule = void 0;
const common_1 = require("@nestjs/common");
const star_wars_service_1 = require("./star_wars.service");
const star_wars_controller_1 = require("./star_wars.controller");
const axios_1 = require("@nestjs/axios");
let StarWarsModule = class StarWarsModule {
};
StarWarsModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [star_wars_controller_1.StarWarsController],
        providers: [star_wars_service_1.StarWarsService],
        exports: [star_wars_service_1.StarWarsService]
    })
], StarWarsModule);
exports.StarWarsModule = StarWarsModule;
//# sourceMappingURL=star_wars.module.js.map