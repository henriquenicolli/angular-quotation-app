import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
      getQuotationURL: string;
      postQuotationURL: string;
      textfile: string;
      date: any;
}


@Injectable()
export class ConfigService {
      configUrl = 'assets/config.json';

      constructor(private http: HttpClient) { }

      getConfig() {
            return this.http.get<Config>(this.configUrl);
      }

}

export default ConfigService;
