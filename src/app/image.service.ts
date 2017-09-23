import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ImageService {

  constructor(private _http: Http) { }


  getImages() {


    return this._http.get('http://127.0.0.1:8000/api/images').map( (res) => res.json());

  }


  getImage(id: number) {


    return this._http.get('http://127.0.0.1:8000/api/image/' + id ).map( (res) => res.json());

  }



}
