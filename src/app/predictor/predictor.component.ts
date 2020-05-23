import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { HeartStats } from '../models/heart_stats';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.scss']
})
export class PredictorComponent implements OnInit {

  hearDetailForm: any;

  constructor(private http: HttpClient, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.hearDetailForm = this._formBuilder.group({

      age: ["", Validators.required],
      sex: ["", Validators.required],
      cp: ["", Validators.required],
      trestbps: ["", Validators.required],
      chol: ["", Validators.required],
      fbs: ["", Validators.required],
      restecg: ["", Validators.required],
      thalach: ["", Validators.required],
      exang: ["", Validators.required],
      oldpeak: ["", Validators.required],
      slope: ["", Validators.required],
      ca: ["", Validators.required],
      thal: ["", Validators.required]
    })

    let temp = {
      "age": "65",
      "sex":"1",
      "cp":"0",
      "trestbps":"132",
      "chol":"353",
      "fbs":"0",
      "restecg": "1",
      "thalach":"132",
      "exang":"1",
      "oldpeak":"1.2",
      "slope":"1",
      "ca":"1",
      "thal":"3"
    }
 this.hearDetailForm.patchValue(temp);
  }



  predict() {
    let heartStats = new HeartStats(55, 1, 0, 132, 353, 0, 1, 132, 1, 1.2, 1, 1, 3);
    console.log(heartStats);

    this.http.post(environment.apiUrl + '/predict', heartStats, { observe: 'body' }).toPromise().then(result => {
      console.log(result);
    });
  }

}
