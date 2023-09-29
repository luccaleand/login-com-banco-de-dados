import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "formsModule"
  databind = "databind2"
  constructor() { }

  Metodozinho(laranja: any) {
    console.log(laranja.value)
  }
  /* passagem de parâmetros */
}
