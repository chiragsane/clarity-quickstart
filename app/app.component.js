"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.ChartData = [{ data: [10, 20, 15] }];
        this.ChartLabels = ["At Risk", "Warning", "Smooth"];
        this.ChartOptions = {
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
                labels: {
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
        this.ChartColors = [{ backgroundColor: ["#c65353", "#ff9933", "#258e25"] }];
        this.ChartLegend = true;
        this.ChartType = 'doughnut';
        // document.getElementById("content").classList.toggle('disp');
    }
    AppComponent.prototype.toggleProject = function () {
        document.getElementById("content").classList.toggle('disp');
        document.getElementById("trapezoid").classList.toggle('disp');
    };
    AppComponent.prototype.toggleSideBar = function () {
        document.getElementById("wrapper").classList.toggle('toggled');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        styleUrls: ['./app/app.component.css', './app/simple-sidebar.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map