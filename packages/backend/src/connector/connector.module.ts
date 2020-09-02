import { Module, HttpModule } from '@nestjs/common';
import { ConnectorService } from './connector.service';

@Module({ imports: [HttpModule], providers: [ConnectorService] })
export class ConnectorModule {}
