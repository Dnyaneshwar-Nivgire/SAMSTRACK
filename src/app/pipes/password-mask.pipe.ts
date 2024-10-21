import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordMask'
})
export class PasswordMaskPipe implements PipeTransform {

  transform(password: string): string {
    if (!password) {
      return '';
    }
    // Replace the first 3 characters with '***' and append the rest of the password
    return password.length > 4 ? '****' + password.substring(4) : '****';
  }

}
