import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit, OnDestroy {
  form: FormGroup;
  sub: Subscription;

  constructor(
    private service: AppService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      value: [null]
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
