import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  ngOnInit(): void {}
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'

  // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  Highcharts: typeof Highcharts = Highcharts;
  constructor() {
    this.chartOptions;
    HC_exporting(Highcharts);
  }
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
  },
  title: {
      text: 'Historic World Population by Region',
      align: 'left'
  },
  subtitle: {
      text: 'Source: <a ' +
          'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
          'target="_blank">Wikipedia.org</a>',
      align: 'left'
  },
  xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      title: {
          text: null
      },
      gridLineWidth: 1,
      lineWidth: 0
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Population (millions)',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      },
      gridLineWidth: 0
  },
  tooltip: {
      valueSuffix: ' millions'
  },
  plotOptions: {
      bar: {
          borderRadius: '50%',
          dataLabels: {
              enabled: true
          },
          groupPadding: 0.1
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
          '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Year 1990',
      type: 'bar',
      data: [631, 727, 3202, 721, 26]
  }, {
      name: 'Year 2000',
      type: 'bar',
      data: [814, 841, 3714, 726, 31]
  }, {
      name: 'Year 2010',
      type: 'bar',
      data: [1044, 944, 4170, 735, 40]
  }, {
      name: 'Year 2018',
      type: 'bar',
      data: [1276, 1007, 4561, 746, 42]
  }]
}
    // series: [{
    //   data: [1, 2, 3],
    //   type: 'line'
    // }]
  };

