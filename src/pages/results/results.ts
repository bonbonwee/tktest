import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';
import Chart from 'chart.js';

//let testResult = this.navParams.get("test");

/**
 * Generated class for the ResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  @ViewChild('barCanvas') barCanvas;
  
  barChart : Object; //does it matter whether this is an array or object?
  showHome: boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log(this.navParams.get("test"));
    let testResults = this.navParams.get("test"); //variable stores test results as object
    this.showHome = this.navParams.get("showHome");
    console.log('ionViewDidLoad ResultsPage');
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: [
            'Avoiding',
            'Accommodating',
            'Compromising',
            'Competing',
            'Collaborating'
          ],
        datasets: [{
          data: [
            testResults.Avoiding/12*100,
            testResults.Accommodating/12*100,
            testResults.Compromising/12*100,
            testResults.Competing/12*100,
            testResults.Collaborating/12*100
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              max: 100
            }
          }]
        },
        legend: {
          display: false
       },
       tooltips: {
          enabled: false
       }
      }
    });

  }
  
  toLobby() {
    this.navCtrl.push(LobbyPage);
  }

  // modData(data) { //takes test results object and returns an array for graph
    
  //   let resultArray = [];
    
  //   for (let result of data) {
  //     resultArray.push(result);
  //   }
  //   return resultArray;
  // }

}
