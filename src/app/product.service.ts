import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

 }

class _albumUrl { "../assets/album.json"}

@getAlbum (id)
return this._http.get(_albumUrl);
function response.json();
