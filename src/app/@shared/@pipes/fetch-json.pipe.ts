import { Pipe, PipeTransform } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchJsonPipe implements PipeTransform {

  private catchData = null;
  private catchUrl: any = ''

  constructor(
    private http: HttpClient
  ) {

  }

  transform(url: any): any {
    if (url !== this.catchUrl) {
      this.catchData = null;
      this.catchUrl = url;
      this.http.get(url).subscribe(result => this.catchData = result)
    }
    return this.catchData
  }

}
