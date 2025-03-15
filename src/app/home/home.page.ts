import { Component } from '@angular/core';

interface AuthorInfo{
  aName: string
  aBirth: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  pageName = "Николай"
  books = ["Пушкин", "Лермонтов", "Толстой"]
  authors: AuthorInfo[] = [
    {aName:"Пушкин", aBirth:1799},
    {aName:"Лермонтов", aBirth:1814}
  ]
  constructor() {}

btnClick(){
  this.pageName = this.pageName + "!"
}

}
