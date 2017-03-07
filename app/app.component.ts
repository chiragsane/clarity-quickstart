import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css','./app/simple-sidebar.css']
})
export class AppComponent {
  toggleSideBar() {
		document.getElementById("wrapper").classList.toggle('toggled');
	}
}