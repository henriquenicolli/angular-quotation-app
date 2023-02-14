import { Component } from '@angular/core';



@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

    displayRegisterForm = "none";
    displayPasswordRecoveryForm = "none";
    backgroundDisplay = "block";

    openPasswordRecoveryModal() {
        this.displayPasswordRecoveryForm = "block";
    }

    closePasswordRecoveryModal() {
        this.displayPasswordRecoveryForm = "none";
    }

    openRegisterFormModal() {
        this.displayRegisterForm = "block";
        this.backgroundDisplay = "none";
    }

    closeRegisterFormModal() {
        this.displayRegisterForm = "none";
        this.backgroundDisplay = "block";
    }

}
