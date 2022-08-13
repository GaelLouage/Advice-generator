import { Component } from '@angular/core';

import { RootObject } from './models/root-object';
import { Slip } from './models/slip';

import { AdviceService } from './services/advice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Advicegenerator';
 public slipAdvice:RootObject = new RootObject();
 public adviceList:RootObject[] = [] as RootObject[];
 public spinner:string = "fa fa-refresh";
 public adviceChanged:boolean = false;
 public tempAdvice:RootObject= new RootObject();

  constructor(public adivceService:AdviceService) {
    this.getAdvice();
    this.tempAdvice = this.slipAdvice;
  }
  changeAdvice(){  
    this.getAdvice();
  }

  private getAdvice() {
    this.adivceService.getAdvice().subscribe(data => {
      this.slipAdvice  = data;
  
    })
  }

}
