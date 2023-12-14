import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // uesers$ = new BehaviorSubject<UserInterface[]>([]);
  // subject$ = new Subject<UserInterface[]>();
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // console.log('getvalue', this.uesers$.getValue());
    // this.uesers$.subscribe((user) => {
    //   console.log('behavioursubject', user);
    // });
    // this.subject$.subscribe((user) => {
    //   console.log('subject', user);
    // });
    // setTimeout(() => {
    //   this.uesers$.next([{ id: 1, name: 'kushan' }]);
    //   this.subject$.next([{ id: 2, name: 'nimal' }]);
    //   console.log('getvalue', this.uesers$.getValue());
    // }, 1000);
  }


}
