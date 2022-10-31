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
exports.AspiranteController = void 0;
const common_1 = require("@nestjs/common");
const aspirante_service_1 = require("./aspirante.service");
const create_aspirante_dto_1 = require("./dto/create-aspirante.dto");
const update_aspirante_dto_1 = require("./dto/update-aspirante.dto");
const swagger_1 = require("@nestjs/swagger");
const aspirante_entity_1 = require("./entities/aspirante.entity");
let AspiranteController = class AspiranteController {
    constructor(aspiranteService) {
        this.aspiranteService = aspiranteService;
    }
    create(createAspiranteDto) {
        return this.aspiranteService.create(createAspiranteDto);
    }
    findAll() {
        return this.aspiranteService.findAll();
    }
    findOne(id) {
        return this.aspiranteService.findOne(id);
    }
    update(id, updateAspiranteDto) {
        return this.aspiranteService.update(id, updateAspiranteDto);
    }
    remove(id) {
        return this.aspiranteService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Creacion de Aspirante',
        type: aspirante_entity_1.Aspirante,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Por si pasa un error al crear un aspirante',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_aspirante_dto_1.CreateAspiranteDto]),
    __metadata("design:returntype", void 0)
], AspiranteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Extrae todos los Aspirantes',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Por si pasa un error al extraer',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AspiranteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Estrae Aspirante por ID',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Por si pasa un error al extraer un aspirante por id',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AspiranteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Actualiza a un aspirante por ID',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Por si pasa un error al actualizar aspirante por id',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_aspirante_dto_1.UpdateAspiranteDto]),
    __metadata("design:returntype", void 0)
], AspiranteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Elimina un Aspirante por ID',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Por si pasa un error al eliminar un aspirante por id',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AspiranteController.prototype, "remove", null);
AspiranteController = __decorate([
    (0, swagger_1.ApiTags)('Resgistro de Aspirantes'),
    (0, common_1.Controller)('aspirante'),
    __metadata("design:paramtypes", [aspirante_service_1.AspiranteService])
], AspiranteController);
exports.AspiranteController = AspiranteController;
//# sourceMappingURL=aspirante.controller.js.map