import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit, OnDestroy {
  form: FormGroup;
  sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private service: AppService
  ) {
    this.form = this.fb.group({
      value: [this.service.value]
    });
  }

  ngOnInit(): void {
    this.sub = this.form.valueChanges.subscribe(({ value }) => {
      this.service.value = value;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
