import {Component, OnInit} from '@angular/core';
//import * as $ from 'jquery';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements  OnInit{
  title = environment.title;

  ngOnInit(): void {
  //  $('#btn-burger, #mask').on('click', function(){
    //  $('nav, main, body, #mask, #btn-burger, nav>a').toggleClass('open');
   // });

    }





}
