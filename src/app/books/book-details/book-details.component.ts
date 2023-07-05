import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from "../../shared/book";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  @Input() book?: Book;
  @Output() leave = new EventEmitter<void>();

  doLeave() {
    this.leave.emit();
  }
}
