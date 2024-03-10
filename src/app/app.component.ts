import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MembersComponent} from './members/members.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '社員名簿アプリ';
}
