import { Test, TestingModule } from '@nestjs/testing';
import { BasesesController } from './baseses.controller';

describe('Baseses Controller', () => {
  let controller: BasesesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasesesController],
    }).compile();

    controller = module.get<BasesesController>(BasesesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
