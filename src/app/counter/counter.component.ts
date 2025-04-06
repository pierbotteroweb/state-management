import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounter } from './state/counter.selectors';
import { decrement, increment, reset } from './state/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store) { 
    this.count$ = this.store.select(selectCounter)
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }



}
