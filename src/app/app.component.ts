
import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  studentForm: NgForm;
  @ViewChild('studentForm') currentForm: NgForm;

  onSubmit(data: NgForm){
    console.log(data.value)
    console.log(this.model)
  }

  model: object = {
    first_name: "Landen",
    last_name: "Wasserstrom"
  }

  //Boiler plate, change the form name
  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    //if the form didn't change then do nothing
    if (this.currentForm === this.studentForm) { return; }
    //set the form to the current form for comparison
    this.studentForm = this.currentForm;
    //subscribe to form changes and send the changes to the onValueChanged method
    this.studentForm.valueChanges
      .subscribe(data => this.onValueChanged());
  }

  onValueChanged() {
    let form = this.studentForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  //validations to be changed depending on your form
  formErrors = {
    'first_name': '',
    'last_name': ''
  };
  validationMessages = {
    'first_name': {
      'required':      'First name is required.',
      'minlength':     'Name must be at least 2 characters long.'
    },
    'last_name': {
      'minlength':     'Name must be at least 2 characters long.'
    }

  };


}
