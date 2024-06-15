import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCard } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInput, MatCard, MatCardContent, FormsModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {
[x: string]: any;

sendForm(form: any) {
console.log(form);
}
}
