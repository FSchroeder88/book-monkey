import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from "../../shared/book-store.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books: Book[] = [];
  @Output() selectBook = new EventEmitter<Book>();

  constructor(private service: BookStoreService) {
    this.service.getAll().subscribe(books => {
      this.books = books;
    });
  }

  doSelect(book: Book) {
    this.selectBook.emit(book);
  }
}
