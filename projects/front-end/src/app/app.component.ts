import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements  OnInit{
  title = 'front-end';

  ngOnInit(): void {
    $('#btn-burger, #mask').on('click', function(){
      $('nav, main, body, #mask, #btn-burger, nav>a').toggleClass('open');
    });

    }





}
