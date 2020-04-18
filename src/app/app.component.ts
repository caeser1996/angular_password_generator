import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator';
  //properties
  password = '';
  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;
  length = 0;
  buttonData=true

  getPassword() {
    return this.password;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }

  onUserNumberChange() {
    this.includeNumbers = !this.includeNumbers
  }

  onUseSymbolChange() {
    this.includeSymbols = !this.includeSymbols
  }

  onChangeLength(event: string) {
    const parsedValue = parseInt(event)
    if (!isNaN(parsedValue)) {
      this.buttonData=false
      this.length = parsedValue
    }
  }

  onButtonClick() {
    console.log(`Following options are selected
    Letters : ${this.includeLetters}
    Numbers : ${this.includeNumbers}
    Symbols : ${this.includeSymbols}
    `);

    const numbers ='1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols ='!@#$%^&*()'

    let validChars='';
    if(this.includeLetters){
      validChars+=letters
    }
    else if (this.includeNumbers){
      validChars+=numbers
    }
    else if(this.includeSymbols){
      validChars+=symbols
    }
    let generatedPassword = ''
    for(let i =0; i<=validChars.length;i++){
      const index=Math.floor(Math.random()*validChars.length)
      generatedPassword+=validChars[index]
    }
    this.password = generatedPassword
  }
}
