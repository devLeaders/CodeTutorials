import { Test, TestingModule } from '@nestjs/testing';
import { VideoStreamController } from './video-stream.controller';

describe('VideoStream Controller', () => {
  let controller: VideoStreamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoStreamController],
    }).compile();

    controller = module.get<VideoStreamController>(VideoStreamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
