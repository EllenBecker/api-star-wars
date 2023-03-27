"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarWarsController = void 0;
const common_1 = require("@nestjs/common");
const star_wars_service_1 = require("./star_wars.service");
let StarWarsController = class StarWarsController {
    constructor(starWarsService) {
        this.starWarsService = starWarsService;
    }
    findCharacters(query) {
        return this.starWarsService.findCharacters(query);
    }
    findFilmsById(id) {
        return this.starWarsService.findFilmsById(id);
    }
};
__decorate([
    (0, common_1.Get)('/characters'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StarWarsController.prototype, "findCharacters", null);
__decorate([
    (0, common_1.Get)('/films/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StarWarsController.prototype, "findFilmsById", null);
StarWarsController = __decorate([
    (0, common_1.Controller)('star_wars'),
    __metadata("design:paramtypes", [star_wars_service_1.StarWarsService])
], StarWarsController);
exports.StarWarsController = StarWarsController;
//# sourceMappingURL=star_wars.controller.js.map