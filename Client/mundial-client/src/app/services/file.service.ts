import { Injectable } from '@angular/core';
import { HttpService } from './abstract/http.service';
import { HttpClient} from '@angular/common/http';
import { File } from '../models/file'


@Injectable({
  providedIn: 'root'
})
export class FileService extends HttpService<File>{

  constructor(http: HttpClient) {
    super(http,'File');
   }
}
