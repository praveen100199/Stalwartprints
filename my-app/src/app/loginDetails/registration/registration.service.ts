import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ExternalGatwayhelper } from 'src/app/@core/helper/http/http.externalGatwayhelper';
import { registerUrl } from 'src/app/urls/homeUrl.constant';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  
  constructor(private _ExternalGatwayhelper:ExternalGatwayhelper, private http:HttpClient) { }



  doRegister(username:string,email:string,countrycode:string,password:string,phonenumber:number):Observable<any>{
    const headers = new HttpHeaders();
    // no need to set Content-Type manually when using FormData

    const params = {
      username : username,
      email : email,
      countrycode: countrycode,
      password: password,
      phonenumber: phonenumber
    
    }

    return this.http.post('http://localhost:5000/api/register',params,{ headers });
  }

}
