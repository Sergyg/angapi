import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent {
  baseUrl= environment.apiUrl;
  validationErrors: any;

  constructor(private http: HttpClient) {
  }
  get404Error(){
    this.http.get(this.baseUrl + 'products/45').subscribe(response =>{
      console.log(response);
    }), error =>{
      console.log(error);
    }
  }

  get500Error(){
    this.http.get(this.baseUrl + 'buggy/servererror').subscribe(response =>{
      console.log(response);
    }), error =>{
      console.log(error);
    }
  }
  get400Error(){
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe(response =>{
      console.log(response);
    }, error =>{
      console.log(error);
    });
  }

  get400ValidationError(){
    this.http.get(this.baseUrl + 'products/fortyfive').subscribe(response =>{
      console.log(response);
    }, error =>{
      console.log(error);
      this.validationErrors = error.errors;
    });
  }
}
