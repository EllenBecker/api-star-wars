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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarWarsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let StarWarsService = class StarWarsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
        this.BASE_URL = 'https://swapi.dev/api';
    }
    async findCharacters(query) {
        const url = query.name && query.name !== ''
            ? `${this.BASE_URL}/people/?search=${query.name}&page=${query.page}`
            : `${this.BASE_URL}/people/?page=${query.page}`;
        const { items, totalPages } = await this.getDataAndTotalPages(url);
        return { items, totalPages };
    }
    async findFilmsById(id) {
        const url = `${this.BASE_URL}/films/${id}`;
        const data = await (0, rxjs_1.lastValueFrom)(this.httpRequest.get(url).pipe((0, rxjs_1.map)((r) => r.data)));
        return data;
    }
    async getDataAndTotalPages(url) {
        const response = await (0, rxjs_1.lastValueFrom)(this.httpRequest.get(url).pipe((0, rxjs_1.map)((r) => r.data)));
        const totalPages = Math.ceil(response.count / 10);
        return { items: response.results, totalPages };
    }
};
StarWarsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], StarWarsService);
exports.StarWarsService = StarWarsService;
//# sourceMappingURL=star_wars.service.js.map