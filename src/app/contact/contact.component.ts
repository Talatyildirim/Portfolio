import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('textField') textField!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  disableForm() {
    this.nameField.nativeElement.disabled = true;
    this.emailField.nativeElement.disabled = true;
    this.textField.nativeElement.disabled = true;
    this.button.nativeElement.disabled = true;
  }

  enableForm() {
    this.nameField.nativeElement.disabled = false;
    this.emailField.nativeElement.disabled = false;
    this.textField.nativeElement.disabled = false;
    this.button.nativeElement.disabled = false;
    setTimeout(() => {
      document.getElementById('successful')?.classList.add('opacity-0');
    }, 4000);

    this.inputValueNull();
  }

  async sendMail() {
    this.disableForm();
    let fd = new FormData();
    fd.append('name', this.nameField.nativeElement.value);
    fd.append('email', this.emailField.nativeElement.value);
    fd.append('message', this.textField.nativeElement.value);
    //senden
    const response = await fetch(
      'https://talatyildirim.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );

    if (response.ok) {
      document.getElementById('successful')?.classList.remove('opacity-0');
      setTimeout(() => {
        this.enableForm();
      }, 4000);
    } else {
      document.getElementById('fail')?.classList.remove('opacity-0');
    }
  }

  inputValueNull() {
    this.nameField.nativeElement.value = '';
    this.nameField.nativeElement.placeholder = 'Your name';
    this.emailField.nativeElement.value = '';
    this.emailField.nativeElement.placeholder = 'Your email';
    this.textField.nativeElement.value = '';
    this.textField.nativeElement.placeholder = 'Your text';
  }
}
