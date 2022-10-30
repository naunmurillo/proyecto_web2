"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoModule = void 0;
const common_1 = require("@nestjs/common");
const curso_service_1 = require("./curso.service");
const curso_controller_1 = require("./curso.controller");
const mongoose_1 = require("@nestjs/mongoose");
const curso_entity_1 = require("./entities/curso.entity");
let CursoModule = class CursoModule {
};
CursoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: curso_entity_1.Curso.name,
                    schema: curso_entity_1.CursoSchema,
                },
            ]),
        ],
        controllers: [curso_controller_1.CursoController],
        providers: [curso_service_1.CursoService],
    })
], CursoModule);
exports.CursoModule = CursoModule;
//# sourceMappingURL=curso.module.js.map