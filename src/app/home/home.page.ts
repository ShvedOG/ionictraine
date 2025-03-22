import { Component } from '@angular/core';
import { HomeService } from './home.service'

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
  ]

  constructor(private data: HomeService) {}
  btnClick(){
    this.pageName = this.pageName + "!"
  }
  ngOnInit(){
    this.data.getData().subscribe((responce: any) => {
      this.books = responce
    });
  }
}
