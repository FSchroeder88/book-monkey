import { Component } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-monkey';

  // Wenn kein Buch ausgewählt ist, ist der Wert null. Ist auch der Standardwert zu Anfang.
  // Klicken wir auf showDetails ist es nicht mehr null sondern book

  book: Book | null = null;

  showList() {
    this.book = null;
  }

  showDetails(book: Book) {
    this.book = book;
  }
}
