import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onSubmit(data: NgForm){
    console.log(this.model)
  }

model: object = {
  first_name: "Landen",
  last_name: "Wasserstrom"
}


}
