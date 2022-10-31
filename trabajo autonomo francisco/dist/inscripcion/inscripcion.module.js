"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionModule = void 0;
const common_1 = require("@nestjs/common");
const inscripcion_service_1 = require("./inscripcion.service");
const inscripcion_controller_1 = require("./inscripcion.controller");
const mongoose_1 = require("@nestjs/mongoose");
const inscripcion_entity_1 = require("./entities/inscripcion.entity");
let InscripcionModule = class InscripcionModule {
};
InscripcionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: inscripcion_entity_1.Inscripcion.name,
                    schema: inscripcion_entity_1.InscripcionSchema,
                },
            ]),
        ],
        controllers: [inscripcion_controller_1.InscripcionController],
        providers: [inscripcion_service_1.InscripcionService],
    })
], InscripcionModule);
exports.InscripcionModule = InscripcionModule;
//# sourceMappingURL=inscripcion.module.js.map