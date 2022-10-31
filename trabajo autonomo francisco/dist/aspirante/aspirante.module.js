"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AspiranteModule = void 0;
const common_1 = require("@nestjs/common");
const aspirante_service_1 = require("./aspirante.service");
const aspirante_controller_1 = require("./aspirante.controller");
const mongoose_1 = require("@nestjs/mongoose");
const aspirante_entity_1 = require("./entities/aspirante.entity");
let AspiranteModule = class AspiranteModule {
};
AspiranteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: aspirante_entity_1.Aspirante.name, schema: aspirante_entity_1.AspiranteSchema },
            ]),
        ],
        controllers: [aspirante_controller_1.AspiranteController],
        providers: [aspirante_service_1.AspiranteService],
    })
], AspiranteModule);
exports.AspiranteModule = AspiranteModule;
//# sourceMappingURL=aspirante.module.js.map