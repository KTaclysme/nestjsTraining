import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World<br> <br>Bienvenu: http://localhost:3000/bienvenu/{insérer un nom !}`;
  }

  getMsg(param: string): string {
    return `Bienvenu ${param} ! <br> <br> <a href="http://localhost:3000/apropos">MENU</a><br> <a href="http://localhost:3000/menu">MENU</a><br> <a href="http://localhost:3000/menu">MENU</a>`;
  }
  
  getPropos() :string {
     return `
    <h1>Salut</h1>
    <p>C'est le "à propos", la fameuse page que personne ne lit donc OUST !</p>
    <p>Merci de votre visite !</p>
  `;
  }
}
