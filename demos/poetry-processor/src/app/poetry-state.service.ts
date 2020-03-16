import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import { Command } from './command';

@Injectable({
  providedIn: 'root'
})
export class PoetryStateService {
  private readonly _content$ = new BehaviorSubject<string>('Default poem');
  public readonly content$ = this._content$.asObservable().pipe(
    distinctUntilChanged()
  );

  public handle<T>(command:Command<T>){
    console.log(`Handling: ${command.payload}`);
    this._content$.next(<string><unknown>command.payload);
  }


  constructor() { 

  }


}
