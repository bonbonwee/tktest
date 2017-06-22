import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TestResultsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TestResultsProvider {

  constructor(public http: Http) {
    console.log('Hello TestResultsProvider Provider');
  }
  
  baseUrl: string = "https://bonniessf-phortonssf.c9users.io:8080/api"
  path: string = "/TestResults"
  
  saveTest(userTest) {
    console.log(userTest)
    return this.http.post(
      this.baseUrl + this.path,
      userTest
      );
  }
  
  getTests(userId, token) {
    console.log(userId + "\n" + token);
    console.log(this.baseUrl + this.path + '?filter=[where][userId]=' + userId + '&access_token=' + token);
    return this.http.get(
      this.baseUrl + this.path + '?filter[where][userId]=' + userId + '&access_token=' + token
      );
  }
  
  //https://bonniessf-phortonssf.c9users.io:8080/api/TestResults?filter=[where][userId]=5946f75c7310871327b47ece&access_token=6gnKAViVXXj7niwvVWvNXpuDsvs69VYehuhpnQtlv1X5cAfBtQlcaYIkTNVXxSFT
  
  // example request URL for user {"userId":"5946f75c7310871327b47ece"}
  // https://bonniessf-phortonssf.c9users.io:8080/api/TestResults?filter=%7B%22userId%22%3A%225946f75c7310871327b47ece%22%7D&access_token=5946f75c7310871327b47ece

}
