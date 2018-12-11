import { Injectable } from '@angular/core';
import { HttpService } from '..';

@Injectable({
  providedIn: 'root'
})
export class AppConfigBootstrapService {
  private config: AppConfig;

  constructor(private http: HttpService) { }

  loadClientConfig(): Promise<any> {
    return this.http.get<AppConfig>('assets/json/api-config.json')
      .toPromise()
      .then(config => {
        this.config = config;
        console.log('Config', this.config);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }

  get configuration(): AppConfig {
    if (!this.config) {
      throw new Error('Attempted to access configuration property before configuration data was loaded.');
    }
    return this.config;
  }
}

export class AppConfig {
  host: string;
  PicUrl: string;
  authUrl: string;
  clientid: string;
  RegexRemoveFromPic: string;
}
