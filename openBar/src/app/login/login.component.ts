import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private notifier: NotifierService;
  connexionForm: FormGroup;
  username: FormControl;
  password: FormControl;

  public constructor(notifier: NotifierService) {
    this.notifier = notifier;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.connexionForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  connexion() {
    if (this.connexionForm.value.username === "anthony" || "kenny" || "ludovic" && this.connexionForm.value.password === "password") {
      this.notifier.notify('success', 'Login successful !');
    }
    else {
      this.notifier.notify('error', 'Username or Password is wrong !');
    }
    this.connexionForm.reset();
  }
}
