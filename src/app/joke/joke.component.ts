import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  joke$: Observable<string>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchJoke();
  }

  fetchJoke(): void {
    this.joke$ = this.http.get<any>('https://official-joke-api.appspot.com/random_joke').pipe(
      map(response => response.setup + ' ' + response.punchline)
    );
  }
}
