import { CreateAspiranteDto } from './create-aspirante.dto';
declare const UpdateAspiranteDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAspiranteDto>>;
export declare class UpdateAspiranteDto extends UpdateAspiranteDto_base {
    nombre: string;
    correo: string;
    identificacion: number;
}
export {};
