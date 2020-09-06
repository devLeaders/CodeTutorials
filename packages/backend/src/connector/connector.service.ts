import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';

@Injectable()
export class ConnectorService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {}

  async getHmsAccesToken() {
    const appSecret = this.configService.get<string>('HMS_APP_SECRET');
    const id = this.configService.get<string>('HMS_APP_ID');
    const token = await this.httpService
      .post(
        'https://oauth-login.cloud.huawei.com/oauth2/v2/token',
        `grant_type=client_credentials&client_secret=${appSecret}&client_id=${id}`,
      )
      .pipe(map(response => response.data))
      .toPromise();

    return token;
  }

  async sendToAllHms(body, config){
    const id = this.configService.get<string>('HMS_APP_ID');

    const res = await this.httpService
    .post(
      `https://push-api.cloud.huawei.com/v1/${id}/messages:send`,
      body,
      config,
    )
    .pipe(map(response => response.data))
    .toPromise();

    return res
  }
}
