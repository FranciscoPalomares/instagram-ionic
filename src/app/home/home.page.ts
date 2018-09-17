import { Component } from '@angular/core';

declare var window: any;
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  elemento: any;
  keyboard: boolean;

  public IsKeyboardOpen: boolean = false;
  constructor(public ngZ: NgZone) {
    this.keyboard = true;

    var innerHeight = window.innerHeight;
    window.onresize = (e) => {
      this.ngZ.run(() => {


        if (window.innerHeight < innerHeight) {
          this.IsKeyboardOpen = true;
        }
        else {
          this.IsKeyboardOpen = false;
        }
      });
    };



  }
  onSubmit(data: any) {


    console.log(data)
  }

  quitarfooter() {
    this.keyboard = false;
  }

  ponerfooter() {
    this.keyboard = true;
  }
}
