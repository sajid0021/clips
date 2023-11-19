import { Component, NgModule } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthModalComponent } from "./user/auth-modal/auth-modal.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl:'./app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, AuthModalComponent]
})

export class AppComponent {
  title = 'clips';
}
