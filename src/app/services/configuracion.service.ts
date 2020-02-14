import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  constructor() { }

  public readonly rootURL = 'http://localhost:52780/api';

  exRegularLetras: any = "^[a-zA-Z ]*$";
  exRegularCorreo: any = "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
  exRegularNumeros: any ="^[0-9]*$";


}
