import { Component, Input } from '@angular/core';
import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent {
  @Input() book?: Book;
}
