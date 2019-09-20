// old promise  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const greetingPoster = new Promise((resolve, reject) => {
//   console.log('Inside Promise (proof of being eager)');
//   resolve('Welcome! Nice to meet you.');
// });

// console.log('Before calling then on Promise');

// greetingPoster.then(res => console.log(`Greeting from promise: ${res}`));

// CASE Cold ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import { Observable } from 'rxjs';

// const observable = new Observable(observer => {
//   console.log('subscribed')
//   setTimeout(() => observer.next('hello from Observable!'), 1000);
// });
// console.log('sub1:')
// observable.subscribe(v => console.log('from 1:%s',v));
// console.log('sub2:')
// observable.subscribe(v => console.log('from 2:%s',v));

//Case Subject ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import { Subject } from 'rxjs';

// const subject = new Subject();

// console.log('sub1:')
// subject.subscribe(v => console.log('from 1:%s',v));

// subject.next('message 1');

// console.log('sub2:')
// subject.subscribe(v => console.log('from 2:%s',v));

// subject.next('message 2');

// Case ReplaySubject  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import { ReplaySubject } from 'rxjs';
// const N = 2 //size to store
// const subject = new ReplaySubject(N);

// subject.next('message 1');

// console.log('sub1:')
// subject.subscribe(v => console.log('from 1:%s',v));


// subject.next('message 2');
// subject.next('message 3');

// console.log('sub2:')
// subject.subscribe(v => console.log('from 2:%s',v));

// subject.next('message 4');

// Case BehaviorSubject  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import { BehaviorSubject } from 'rxjs';

// const subject = new BehaviorSubject('message 1');
// console.log('sub1:')
// subject.subscribe(v => console.log('from 1:%s',v));

// subject.next('message 2');

// console.log('sub2:')
// subject.subscribe(v => console.log('from 2:%s',v));
// subject.next('message 3');

// last case  เคสที่ไกล้เคียงกันมากที่สุด  +++++++++++++++++++++++++++++++++++++++++++++++++++
// import { Observable } from 'rxjs';
// const promiseFunc = () => new Promise((resolve, reject) => {
//   console.log('Inside Promise (proof of being eager)');
//   resolve('Welcome! Nice to meet you.');
// });


// const observableFunc = () => new Observable(observer => {
//   console.log('subscribed')
//   setTimeout(() => observer.next('hello from Observable!'), 1000);
// });

// promiseFunc();
// observableFunc();

// promiseFunc().then(c => console.log(c))
// observableFunc().subscribe(c => console.log(c))


// Extra --------------------

// import { of } from 'rxjs';
// import {withLatestFrom } from 'rxjs/operators'
// const getSomeThing = of(0);
// const getSomeThing2 =  of(1);

// getSomeThing.pipe(withLatestFrom(getSomeThing2)).subscribe(console.log)

// import { of, Subject } from 'rxjs';
// import {withLatestFrom } from 'rxjs/operators'
// const getSomeThing = of(0);
// const getSomeThing2 =  new Subject();

// getSomeThing.pipe(withLatestFrom(getSomeThing2)).subscribe(console.log)