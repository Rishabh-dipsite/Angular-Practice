import { Component, OnInit } from '@angular/core';
import { FormDataService } from "src/app/_services/form-data-service.service";
import { User } from "src/app/shared/user";

@Component({
  selector: 'app-ng-forms',
  templateUrl: './ng-forms.component.html',
  styleUrls: ['./ng-forms.component.scss']
})
export class NgFormsComponent implements OnInit {

  isSubmitted: boolean = false;
  constructor(private fds: FormDataService) { }
  user: User
  error: string
  ngOnInit(): void {
    this.user = new User('ARA', 9876543210, '', '');
  }

  onSubmit() {
    this.isSubmitted = true;
    this.fds.sendData(this.user)
      .subscribe(data => console.log(data),
        err => {
          if (err) {
            console.log(err)
            // this.error = err.error.message
            this.error = err.statusText;
          }
        }

      );
  }
}