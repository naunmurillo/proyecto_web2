"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const swaggerr = new swagger_1.DocumentBuilder()
        .setTitle('Implementacion de Registro')
        .setDescription('RES-API de Aspirante, Curso, Inscripciones')
        .setVersion('0.01')
        .addTag('Swagger Aspirante')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerr);
    swagger_1.SwaggerModule.setup('swag', app, document, {
        explorer: true,
        swaggerOptions: {
            filter: true,
            showRequestDuration: true,
        },
    });
    const port = process.env.PORT || 4000;
    await app.listen(process.env.PORT, () => {
        console.log(`Servidor Corriendo en http://localhost:${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map