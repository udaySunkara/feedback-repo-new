import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  feedbackData: any = null;
  @Input() assetId: number = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/mocks/feedback-mock.json').subscribe(
      (res) => {
        this.feedbackData = res;
      }
    );
  }

  selectOption(option) {
    this.feedbackData[this.assetId].questionDetails.optionList.forEach(_option => {
      if (option.name !== _option.name) {
        _option.isSelected = false;
      }
    });
    option.isSelected = !option.isSelected;
  }

}
