import { Test, TestingModule } from '@nestjs/testing';
import { CarreraController } from './carrera.controller';
import { CarreraService } from '../services/carrera.service';

describe('CarreraController', () => {
  let controller: CarreraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarreraController],
      providers: [CarreraService],
    }).compile();

    controller = module.get<CarreraController>(CarreraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
