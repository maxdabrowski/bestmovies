import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';
import { YearsComponent } from './pages/years/years.component';
import { MoviesInYearsComponent } from './pages/years/movies-in-year/movie-in-years.component';
import { HttpTestComponent } from './pages/http-test/http-test.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';

const routes: Routes = [
  { path:'', redirectTo:'/movies', pathMatch:'full'},
  { path: 'movies', component: MoviesComponent},
  { path:'movie/:id', component: MovieDetailsComponent},
  { path:'add-movie', component: AddMovieComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'category/:category', component: MoviesInCategoryComponent},
  { path: 'years', component: YearsComponent},
  { path: 'year/:year', component: MoviesInYearsComponent},
  { path: 'http-test', component: HttpTestComponent },
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}