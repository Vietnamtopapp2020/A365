import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';

@Component({
  selector: 'app-list-healthfaciliti',
  templateUrl: './list-healthfaciliti.page.html',
  styleUrls: ['./list-healthfaciliti.page.scss'],
})
export class ListHealthfacilitiPage implements OnInit {
  data: any;
  viewContent :any;
  constructor(
    public navCtrl: NavController,
    public service: ServiceService
  ) { }

  ngOnInit() {
    this.getData();
  }
  backPage() {
    this.navCtrl.pop();
  }
  getData() {
    this.service.GetanswersheetsMchartR(this.service.getHost() + 'knowledge/posts/getByIdOrSlug?idOrSlug=danh-sach-mot-so-co-so-y-te-duoc-tap-huan-va-hien-dang-co-thuc-hien-danh-gia-va-chan-doan-tu-ky-13580a686b&')
      .subscribe(rs => {
        var result = rs.json();
        this.data = result;
        this.viewContent = this.getSafehtml(result.content);
      });
  }
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html
    return txt.value;
  }
}
