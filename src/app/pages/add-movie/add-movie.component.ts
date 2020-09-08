import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
 
  model: Partial<Movie>;

  constructor() { }

  ngOnInit(): void {
    this.model = {title: 'Jakiś film'};
  }

  send(movieForm: NgForm){
    console.log(movieForm)
  }

}
