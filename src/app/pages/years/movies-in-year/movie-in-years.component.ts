import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-movie-in-years',
  templateUrl: './movie-in-years.component.html', 
  styleUrls: ['./movie-in-years.component.css'],
})
export class MoviesInYearsComponent implements OnInit {
  movies: Observable<Movie[]>;


  constructor(private http: HttpService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.movies = this.route.paramMap.pipe(
      switchMap(( params: ParamMap) => this.http.getMoviesFromYear(params.get('year'))
      )
    );
  }
}
