import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { MovieCategoryComponent } from "../../components/movie-category/movie-category.component";
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../types/movies';
import { tmdbConfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-browse',
  standalone: true,
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
  imports: [CommonModule, HeaderComponent, MovieCategoryComponent]
})
export class BrowseComponent {
  movieService = inject(MovieService);
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcommingMovies: Movie[] = [];
  nowPlayingMovies: Movie[] = [];
  bannerMovie!: Movie;
  tmdbConfig = tmdbConfig;
  public domSanitise=inject(DomSanitizer);
  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((result: any) => {
      console.log(result);
      this.popularMovies = result.results;
      this.bannerMovie = this.popularMovies[0];
      this.movieService
        .getMovieVideos(this.bannerMovie.id)
        .subscribe((res: any) => {
          this.bannerMovie.videoKey = res.results.find(
            (x: any) => (x.site = 'YouTube')
          ).key;
          console.log(this.bannerMovie)
        });
    });
    this.movieService.getTopRatedMovies().subscribe((result: any) => {
      this.topRatedMovies = result.results;
    });
    this.movieService.getNowPlayingMovies().subscribe((result: any) => {
      this.nowPlayingMovies = result.results;
    });
    this.movieService.getUpcomingMovies().subscribe((result: any) => {
      this.upcommingMovies = result.results;
    });
  }
}
