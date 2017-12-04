import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export interface StreamWrapper<T extends Observable<any>> {
  $: T;
}

export class SubjectWrapper<T> implements StreamWrapper<Subject<T>> {
  $: Subject<T>;

  constructor() {
    this.$ = new Subject();
  }
}

export class BehaviorSubjectWrapper<T> implements StreamWrapper<Subject<T>> {
  $: BehaviorSubject<T>;

  constructor(value: T) {
    this.$ = new BehaviorSubject(value);
  }
}

export class ReplaySubjectWrapper<T> implements StreamWrapper<Subject<T>> {
  $: ReplaySubject<T>;

  constructor() {
    this.$ = new ReplaySubject(1);
  }
}

export function mockStream<T extends Observable<any>>($: T): StreamWrapper<T> {
  return { $ };
}
