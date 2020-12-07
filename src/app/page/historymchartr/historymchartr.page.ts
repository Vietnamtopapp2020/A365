import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-historymchartr',
  templateUrl: './historymchartr.page.html',
  styleUrls: ['./historymchartr.page.scss'],
})
export class HistorymchartrPage implements OnInit {
  [x: string]: any;
  getlistquestion = [];
  skip = 0;
  take = 50;
  sort = '';
  query = '';
  Data: any;
  data = null;
  answers = [];
  OptionsData = null;
  DataquestionData = null;
  childrenlist: any;
  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public router: Router,
    public netWork: Network
  ) {
    this.service.Page = "";

    this.GetpostASQ();
  }
  ngOnInit() {

  }
  GetpostASQ() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.postGet(this.service.getHost() + 'mchatr/answersheets?skip=' + this.skip + '&take=' + this.take + '&query=' + this.query).subscribe
        (rs => {
          if (this.service.CheckLoading) {
            this.service.CheckLoading = false;
            this.toast.DismissToast();
          };
          var result = rs.json();
          this.childrenlist = result.items;
          result.items.forEach(element => {
            var name = this.getSafehtml(element.child.name);
            this.answers.push({
              name: name,
              createdAt: element.createdAt,
              isCompleted: element.isCompleted,
            });
          })

        })
    }else{
if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  inputData(questionData, data, index) {
    var options = []
    data.question.options.forEach(optionsData => {
      options.push({
        content: this.getSafehtml(optionsData.content),
        hasInput: optionsData.hasInput,
        id: optionsData.id,
        inputType: optionsData.inputType,
        point: optionsData.point,
      })
    });
    this.getlistquestion.push({
      questionData: questionData,
      index: index,
      code: data.question.code,
      content: this.getSafehtml(data.question.content),
      createdAt: data.question.createdAt,
      id: data.question.id,
      isDeleted: data.question.isDeleted,
      options: options,
      sliderImages: data.question.sliderImages,
      type: data.question.type,
      updatedAt: data.question.updatedAt,
      selectedOptionId: data.selectedOptionId,
    });
  }
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html
    return txt.value;
  }
  backpage() {
    this.router.navigate(['/listchildren']);
  }
}