import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _value: string;

  constructor() { }

  get value(): string {
    return this._value;
  }

  set value(v: string) {
    this._value = v;
  }
}
