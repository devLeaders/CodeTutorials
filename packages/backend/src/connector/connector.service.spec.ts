import { Test, TestingModule } from '@nestjs/testing';
import { ConnectorService } from './connector.service';

describe('ConnectorService', () => {
  let service: ConnectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnectorService],
    }).compile();

    service = module.get<ConnectorService>(ConnectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
