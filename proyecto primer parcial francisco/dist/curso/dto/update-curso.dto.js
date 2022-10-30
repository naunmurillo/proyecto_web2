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
exports.UpdateCursoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_curso_dto_1 = require("./create-curso.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateCursoDto extends (0, mapped_types_1.PartialType)(create_curso_dto_1.CreateCursoDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripcion del Curso',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCursoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de inicio del Cruso',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCursoDto.prototype, "fecha_inicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hora de inicio del Curso',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCursoDto.prototype, "hora_inicio", void 0);
exports.UpdateCursoDto = UpdateCursoDto;
//# sourceMappingURL=update-curso.dto.js.map