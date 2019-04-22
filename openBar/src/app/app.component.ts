import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private notifier: NotifierService;
  connexionForm: FormGroup;
  username: FormControl;
  password: FormControl;

  public constructor( notifier: NotifierService ) {
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
    if(this.connexionForm.value.username === "user" || "User" && this.connexionForm.value.password === "user"){
      this.notifier.notify( 'success', 'Connexion réussi !');
    }
    else{
      this.notifier.notify( 'error', 'Connexion refusée !');

    }
    this.connexionForm.reset();
  }
}
