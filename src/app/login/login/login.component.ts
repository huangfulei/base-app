import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '@src/app/shared/service/authentication.service';
import {first} from 'rxjs/operators';


@Component({
    selector: 'petbros-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private static REDIRECT_ROUTE = ['/home'];
    public email = 'test@email.com';
    public password = 'seba1234';
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';


    public displayName = 'Sebastian';

    constructor(
        private fb: FormBuilder,
        private authenticationService: AuthenticationService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        const user = this.route.snapshot.data['user.ts'];
        if (user) {
            this.redirect();
        }
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login({username: this.f.username.value, password: this.f.password.value})
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

/*    async login(isValid: boolean) {
        if (isValid) {
            await this.userService.signIn(this.email, this.password);

            this.redirect();
        }
    }*/

/*    async register(isValid: boolean) {
        if (isValid) {
            await this.userService.register(this.email, this.password, this.displayName);

            this.redirect();
        }
    }

    reset() {
        this.userService.resetPassword('sebawita@gmail.com');
    }*/

    private redirect() {
        this.router.navigate(LoginComponent.REDIRECT_ROUTE, {clearHistory: true} as NavigationExtras);
    }
}
