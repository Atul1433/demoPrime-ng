import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OilCompanies } from './OilCompanies';


@Injectable({
  providedIn: 'root'
})
export class PackingslipService {
  baseUrl = 'https://tatservicedev.nov.cloud/lookupsvc/api/';
  //'https://tatservicedev.nov.cloud/lookupsvc/api/'

  constructor(private httpClient: HttpClient){}

  

  getAllOilCompanies(){
    return this.httpClient.get<OilCompanies[]>(this.baseUrl + 'OilCompanies');
  }

}

