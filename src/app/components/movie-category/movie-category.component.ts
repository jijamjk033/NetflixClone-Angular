import { Component, Input } from '@angular/core';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { Movie } from '../../types/movies';

@Component({
  selector: 'app-movie-category',
  standalone: true,
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.scss',
  imports: [MovieCardComponent]
})
export class MovieCategoryComponent {
  @Input() title = "";
  @Input() movieList:Movie[] = [];
}
