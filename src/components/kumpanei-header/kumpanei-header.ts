import { Component } from '@angular/core';

/**
 * Generated class for the KumpaneiHeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'kumpanei-header',
  templateUrl: 'kumpanei-header.html'
})
export class KumpaneiHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello KumpaneiHeaderComponent Component');
    this.text = 'Hello World';
  }

}
