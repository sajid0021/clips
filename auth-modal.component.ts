import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../../shared/modal/modal.component";

@Component({
    selector: 'app-auth-modal',
    standalone: true,
    templateUrl: './auth-modal.component.html',
    styleUrl: './auth-modal.component.css',
    imports: [CommonModule, ModalComponent]
})
export class AuthModalComponent {

}
