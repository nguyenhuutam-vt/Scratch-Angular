import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent implements OnInit {
  ngOnInit(): void {}
  constructor() {
    this.chartOptions;
  }

  // Highcharts: typeof Highcharts = Highcharts;
  // updateFlag = false;

  // data = [1, 6, 3, 4];

  // chartOptions: Highcharts.Options = {
  //   series: [
  //     {
  //       type: 'line',
  //       data: this.data,
  //     },
  //   ],
  // };

  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'

  // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {

  // };

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'area',
    },
    title: {
      text: 'Greenhouse gases from Norwegian economic activity',
      align: 'left',
    },
    subtitle: {
      text:
        'Source: ' +
        '<a href="https://www.ssb.no/en/statbank/table/09288/"' +
        'target="_blank">SSB</a>',
      align: 'left',
    },
    yAxis: {
      title: {
        useHTML: true,
        text: 'Million tonnes CO<sub>2</sub>-equivalents',
      },
    },
    tooltip: {
      shared: true,
      headerFormat:
        '<span style="font-size:12px"><b>{point.key}</b></span><br>',
    },
    plotOptions: {
      series: {
        pointStart: 2012,
      },
      area: {
        stacking: 'normal',
        lineColor: '#666666',
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: '#666666',
        },
      },
    },
    series: [
      {
        name: 'Ocean transport',
        type: 'area',

        data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214],
      },
      {
        name: 'Households',
        type: 'area',
        data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039],
      },
      {
        name: 'Agriculture and hunting',
        type: 'area',
        data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913],
      },
      {
        name: 'Air transport',
        type: 'area',
        data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550],
      },
      {
        name: 'Construction',
        type: 'area',
        data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186],
      },
    ],
    // series: [{
    //   data: [1, 2, 3],
    //   type: 'line'
    // }]
  };
}
