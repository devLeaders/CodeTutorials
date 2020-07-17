import { Test, TestingModule } from '@nestjs/testing';
import { VideoStreamService } from './video-stream.service';

describe('VideoStreamService', () => {
  let service: VideoStreamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoStreamService],
    }).compile();

    service = module.get<VideoStreamService>(VideoStreamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
