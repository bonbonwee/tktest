import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuestionsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class QuestionsProvider {

  constructor(public http: Http) {
    console.log('Hello QuestionsProvider Provider');
  }
  baseUrl: string = "https://bonniessf-phortonssf.c9users.io:8080/api"
  path: string = "/Questions"
  
  getQuestions(token) {
    console.log(token)
    return this.http.get(
      this.baseUrl + this.path + '?access_token=' + token
      );
  }

}
