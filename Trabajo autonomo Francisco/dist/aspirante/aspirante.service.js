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
exports.AspiranteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const aspirante_entity_1 = require("./entities/aspirante.entity");
let AspiranteService = class AspiranteService {
    constructor(aspiranteModel) {
        this.aspiranteModel = aspiranteModel;
    }
    async create(createAspiranteDto) {
        try {
            const aspirante = await this.aspiranteModel.create(createAspiranteDto);
            return `Se creo correctamente el aspirante ${aspirante}`;
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.BadRequestException('La identificacion es unica para cada usuario');
            }
            throw new common_1.InternalServerErrorException('Error el aspirante ya existe');
        }
    }
    async findAll() {
        const aspirante = await this.aspiranteModel.find();
        return aspirante;
    }
    async findOne(id) {
        let craspirante;
        if ((0, mongoose_2.isValidObjectId)(id)) {
            craspirante = await this.aspiranteModel.findById(id);
        }
        if (!craspirante) {
            craspirante = await this.aspiranteModel.findOne({ identificacion: id });
        }
        if (!craspirante) {
            throw new common_1.NotFoundException(`El aspirante con sus datos ${id} no existen `);
        }
        return craspirante;
    }
    async update(id, updateAspiranteDto) {
        try {
            const updateAspirante = await this.aspiranteModel.findById(id);
            await updateAspirante.updateOne(updateAspiranteDto);
            return `Se actualizo correctamente el aspirante ${updateAspiranteDto}`;
        }
        catch (error) {
            throw new common_1.NotFoundException(`No existe el aspirante con ${id} que quieres actualizar`);
        }
    }
    async remove(id) {
        try {
            const Eliminaraspirante = await this.aspiranteModel.findById(id);
            await Eliminaraspirante.delete();
            return 'Aspirante eliminado correctamente';
        }
        catch (error) {
            throw new common_1.NotFoundException(`No existe el aspirante con el id ${id} que quieres eliminar`);
        }
    }
};
AspiranteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(aspirante_entity_1.Aspirante.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AspiranteService);
exports.AspiranteService = AspiranteService;
//# sourceMappingURL=aspirante.service.js.map