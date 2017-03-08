import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css','./app/simple-sidebar.css']
})
export class AppComponent {
  public ChartData:any[] = [{ data: [10, 20, 15] }];
	public ChartLabels:string[] = ["At Risk", "Warning", "Smooth"];
	public ChartOptions:any = {
		title: {
			display: false,
			fontSize: 18,
			padding: 20,
			fontColor: '#000',
			fontStyle: 'normal',
			fontFamily: 'Segoe UI',
			text: 'Applications Under Development'
		},
		responsive: true,
		maintainAspectRatio: true,
		legend: {
			position: 'bottom',
			labels:{
		      boxWidth: 10
		    }
        },
		scales: {
			xAxes: [{
			gridLines: {
				display: false
			},
			display: false,
			barPercentage: 1.25
			}],
			yAxes: [{
				scaleLabel: {
				display: false
				},
				gridLines: {
					display: false
				},
			display: false,
			}]
		}
	};
	public ChartColors:Array<any> = [{ backgroundColor: ["#c65353", "#ff9933", "#258e25"] }];
	public ChartLegend:boolean = true;
	public ChartType:string = 'doughnut';
	constructor() {
		// document.getElementById("content").classList.toggle('disp');
	}
	toggleProject() {
		document.getElementById("content").classList.toggle('disp');
		document.getElementById("trapezoid").classList.toggle('disp');
	}
  	toggleSideBar() {
		document.getElementById("wrapper").classList.toggle('toggled');
	}
}