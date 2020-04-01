import { Component } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  signupForm: FormGroup;
  passwordPattern: any = new RegExp(environment.passwordPattern);

  constructor(private auth: AuthenticationService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(environment.alphanumericPattern)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)])
    });
  }

  register() {
    this.auth.register(this.signupForm.value).subscribe(
      () => {
        this.router.navigateByUrl("/profile");
      },
      err => {
        console.error(err);
      }
    );
  }
}
