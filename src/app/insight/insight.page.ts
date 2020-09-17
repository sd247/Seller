import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-insight',
  templateUrl: './insight.page.html',
  styleUrls: ['./insight.page.scss'],
})
export class InsightPage implements OnInit {
  time: string = "1"
  @ViewChild('barChart', { static: false }) barChart;
  bars: any;
  colorArray: any;
  constructor() { }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.createBarChart();
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['16 MAR', '17 MAR', '18 MAR', '19 MAR', '20 MAR', '21 MAR', '22 MAR',],
        datasets: [{
          label: 'Viewers in millions',
          data: [5.5, 85, 60, 50.9, 90, 7.5, 100],
          backgroundColor: 'rgba(57, 197, 38, 0.64)', 
          borderColor: '#39C526',
          borderWidth: 2
        }]

      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'top',
          labels: {
            fontColor: '#fff',
            fontSize: 14,
            fontFamily: "'Google Sans'",
            boxWidth: 0,
          },
        },
        scales: {
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: false
            },
            gridLines: {
              drawBorder: false,
            }
          }],
          xAxes: [{
            display: true,
            type: 'category',
            gridLines: {
              display: false
            },
            ticks: {
              fontColor: "#000000",
              //              fontSize: "10",
              fontStyle: "normal",
              fontFamily: "Google Sans",
              //              lineWidth: 2, 
            },
          }]
        },
      }
    });
  }
}
