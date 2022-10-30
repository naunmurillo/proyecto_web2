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
exports.UpdateAspiranteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_aspirante_dto_1 = require("./create-aspirante.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateAspiranteDto extends (0, mapped_types_1.PartialType)(create_aspirante_dto_1.CreateAspiranteDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del Aspirante',
        minLength: 5,
    }),
    (0, class_validator_1.IsString)({ message: 'Debe ser una cadena de Texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe llenar todos los datos no puede ir vacios' }),
    (0, class_validator_1.MinLength)(5, { message: 'el nombre debe ser manimo de 5 caracter' }),
    __metadata("design:type", String)
], UpdateAspiranteDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Correo del Aspirante',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe llenar todos los datos no puede ir vacios' }),
    __metadata("design:type", String)
], UpdateAspiranteDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identificacion del aspirante',
        maxLength: 10,
    }),
    (0, class_validator_1.IsString)({ message: 'Debe ser una cadena de Texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe llenar todos los datos no puede ir vacios' }),
    (0, class_validator_1.MaxLength)(10, { message: 'debe ser maximo de 10 caracter' }),
    __metadata("design:type", Number)
], UpdateAspiranteDto.prototype, "identificacion", void 0);
exports.UpdateAspiranteDto = UpdateAspiranteDto;
//# sourceMappingURL=update-aspirante.dto.js.map