import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSeguimientoDto } from './create-seguimiento.dto';
import { IsNotEmpty, IsString, MaxLength, MinLength, IsNumberString } from "class-validator";


export class UpdateSeguimientoDto extends PartialType(CreateSeguimientoDto) {
    
    

    @ApiProperty({
        description: 'Tiempo de llegada'
    })
    @IsString({ message: 'Debe contener solo texto.' })
    @IsNotEmpty({ message: 'Este campo no puede quedar vacio.'})
    TiempoDeLlegada: string;

    @ApiProperty({
        description: 'Orden de llegada'
    })
    @IsNotEmpty({ message: 'Este campo no puede queda vacio.'})
    OrdenDeLlegada: string;

    @ApiProperty({
        description: 'Pulso inicial'
    })
    @IsString()
    @IsNotEmpty({ message: 'Este campo no puede queda vacio.'})
    PulsoInicial: string;


    @ApiProperty({
        description: 'Pulso Final'
    })
    @IsString()
    @IsNotEmpty({ message: 'Este campo no puede queda vacio.'})
    PulsoFinal: string;
}
