import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/providers/service.service';
import { ModalController, NavController, MenuController, LoadingController, IonRouterOutlet, Platform } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Network } from '@ionic-native/network/ngx';
import { MessageConfirmPage } from '../message-confirm/message-confirm.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  imgBanner = "assets/slide/slider-1.jpg";
  listImgBanner = [
    "assets/slide/slider-1.jpg",
    "assets/slide/slider-2.jpg",
    "assets/slide/slider-3.jpg",
    "assets/slide/slider-4.jpg"
  ];
  OpenVideo() {
    if (this.slideOptsUrl.autoplayDisableOnInteraction)
      this.slideOptsUrl.autoplayDisableOnInteraction = false;
    else
      this.slideOptsUrl.autoplayDisableOnInteraction = true;
  }

  slideOptsUrl = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 2000,
    autoplayDisableOnInteraction: true,
  };
  slideOptsImg = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 1000,
  };
  constructor(
    public service: ServiceService,
    public router: Router,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    private menuCtrl: MenuController,
    public toast: ToastServiceService,
    public loadingCtrl: LoadingController,
    public platform: Platform,
    private routerOutlet: IonRouterOutlet,
    public netWork: Network

  ) {
    platform.ready().then(() => {

      if (platform.is('cordova')) {

        //Subscribe on pause
        this.platform.pause.subscribe(() => {
          //Hello pause
        });

        //Subscribe on resume
        this.platform.resume.subscribe(() => {
          window['paused'] = 0;
        });
      }
    });
    this.service.PlatFormData = this.platform.backButton.subscribeWithPriority(0, () => {
      if (this.service.Page == "followup") {
        this.service.message("Vui lòng trả lời câu hỏi");
      }
      else if (this.service.Page == "ketqua") {
        this.router.navigate([this.service.backPage])
      }
      else if (this.service.Page == "postTestTraiNghiem") {
        this.backpagePost();
      }
      else {
        this.navCtrl.pop();
      }
    });

    this.service.Page = "";
    this.menuCtrl.enable(true);
  }
  GetSlide(index) {
    setTimeout(() => {
      this.imgBanner = this.listImgBanner[index];
      index++
      if (index == this.listImgBanner.length) {
        index = 0;
      };
      this.GetSlide(index)
    }, 1000);
  }

  ListchildrenASQguest() {
    this.router.navigate(['/createchildrenguest']);
  }
  listchildrenMchatrguest() {
    this.router.navigate(['/createchildrenguestmchatr']);
  }
  Dangky() {
    this.router.navigate(['/dangki']);
  }
  backPage() {
    this.router.navigate(['/login']);
  }
  OpenPagePhatTrien() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "children": [
          {
            "order": 1,
            "children": [],
            "_id": "5e72e7f9c204ab003cfb1667",
            "title": "Sàng lọc phát triển cho trẻ",
            "slug": "sang-loc-phat-trien-cho-tre-b5e0206a1c",
            "description": "Sàng lọc phát triển là gì? Vì sao trẻ cần sàng lọc phát triển?",
            "hexCode": "#000000",
            "parent": "5e72e645c381bb0020d13f66",
            "createdAt": "2020-03-19T03:33:13.658Z",
            "updatedAt": "2020-03-25T10:40:28.678Z",
            "__v": 0,
            "key": "5e72e7f9c204ab003cfb1667",
            "id": "5e72e7f9c204ab003cfb1667"
          },
          {
            "order": 2,
            "children": [],
            "_id": "5e72e840c204ab003cfb1669",
            "title": "Bộ công cụ theo dõi sự phát triển của trẻ ASQ-3",
            "slug": "bo-cong-cu-theo-doi-su-phat-trien-cua-tre-asq-3-96064f7090",
            "description": "Bộ công cụ để theo dõi sự phát triển của trẻ từ 1 đến 66 tháng tuổi ở 5 lĩnh vực: giao tiếp, vận động thô, vận động tinh, cá nhân xã hội và giải quyết vấn đề",
            "hexCode": "#000000",
            "parent": "5e72e645c381bb0020d13f66",
            "createdAt": "2020-03-19T03:34:24.652Z",
            "updatedAt": "2020-03-25T10:41:22.478Z",
            "__v": 0,
            "key": "5e72e840c204ab003cfb1669",
            "id": "5e72e840c204ab003cfb1669"
          },
          {
            "order": 3,
            "children": [],
            "_id": "5e72e859c204ab003cfb166b",
            "title": "Bộ công cụ sàng lọc nguy cơ tự kỷ M-CHAT-R",
            "slug": "bo-cong-cu-sang-loc-nguy-co-tu-ky-m-chat-r-6d0a3f1355",
            "description": "Bộ công cụ giúp sàng lọc nguy cơ tự kỷ cho trẻ từ 16 -30 tháng tuổi",
            "hexCode": "#000000",
            "parent": "5e72e645c381bb0020d13f66",
            "createdAt": "2020-03-19T03:34:49.344Z",
            "updatedAt": "2020-03-25T10:41:47.494Z",
            "__v": 0,
            "key": "5e72e859c204ab003cfb166b",
            "id": "5e72e859c204ab003cfb166b"
          }
        ],
        "createdAt": "2020-03-19T03:25:57.446Z",
        "description": "Sàng lọc phát triển định kỳ cho trẻ theo từng độ tuổi là rất quan trọng để nhận biết sớm các dấu hiệu chậm phát triển",
        "hexCode": "CssBorder1",
        "id": "5e72e645c381bb0020d13f66",
        "key": 2,
        "order": [
          {
            "order": 1,
            "children": [],
            "_id": "5e72e7f9c204ab003cfb1667",
            "title": "Sàng lọc phát triển cho trẻ",
            "slug": "sang-loc-phat-trien-cho-tre-b5e0206a1c",
            "description": "Sàng lọc phát triển là gì? Vì sao trẻ cần sàng lọc phát triển?",
            "hexCode": "#000000",
            "parent": "5e72e645c381bb0020d13f66",
            "createdAt": "2020-03-19T03:33:13.658Z",
            "updatedAt": "2020-03-25T10:40:28.678Z",
            "__v": 0,
            "key": "5e72e7f9c204ab003cfb1667",
            "id": "5e72e7f9c204ab003cfb1667"
          },
          {
            "order": 2,
            "children": [],
            "_id": "5e72e840c204ab003cfb1669",
            "title": "Bộ công cụ theo dõi sự phát triển của trẻ ASQ-3",
            "slug": "bo-cong-cu-theo-doi-su-phat-trien-cua-tre-asq-3-96064f7090",
            "description": "Bộ công cụ để theo dõi sự phát triển của trẻ từ 1 đến 66 tháng tuổi ở 5 lĩnh vực: giao tiếp, vận động thô, vận động tinh, cá nhân xã hội và giải quyết vấn đề",
            "hexCode": "#000000",
            "parent": "5e72e645c381bb0020d13f66",
            "createdAt": "2020-03-19T03:34:24.652Z",
            "updatedAt": "2020-03-25T10:41:22.478Z",
            "__v": 0,
            "key": "5e72e840c204ab003cfb1669",
            "id": "5e72e840c204ab003cfb1669"
          },
          {
            "order": 3,
            "children": [],
            "_id": "5e72e859c204ab003cfb166b",
            "title": "Bộ công cụ sàng lọc nguy cơ tự kỷ M-CHAT-R",
            "slug": "bo-cong-cu-sang-loc-nguy-co-tu-ky-m-chat-r-6d0a3f1355",
            "description": "Bộ công cụ giúp sàng lọc nguy cơ tự kỷ cho trẻ từ 16 -30 tháng tuổi",
            "hexCode": "#000000",
            "parent": "5e72e645c381bb0020d13f66",
            "createdAt": "2020-03-19T03:34:49.344Z",
            "updatedAt": "2020-03-25T10:41:47.494Z",
            "__v": 0,
            "key": "5e72e859c204ab003cfb166b",
            "id": "5e72e859c204ab003cfb166b"
          }
        ],
        "parent": null,
        "slug": "theo-doi-va-sang-loc-phat-trien-cho-tre-8fcbce0de7",
        "title": "THEO DÕI VÀ SÀNG LỌC PHÁT TRIỂN CHO TRẺ",
        "updatedAt": "2020-04-06T16:30:53.534Z",
        "icon": "assets/icon/briefcase.png"
      }
    };
    this.router.navigate(['/kienthucchude'], navigationExtras);
  }
  OpenPageTuky() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "children": [
          {
            "order": 1,
            "children": [],
            "_id": "5d50ccc907b9dc0c5c5b92e6",
            "title": "Rối loạn phổ tự kỷ",
            "slug": "roi-loan-pho-tu-ky-b800c82835",
            "parent": "5e72e656c381bb0020d13f67",
            "createdAt": "2019-08-12T02:19:53.367Z",
            "updatedAt": "2020-03-25T10:42:47.806Z",
            "__v": 4,
            "description": "Rối loạn phổ tự kỷ là một dạng rối loạn phát triển phức tạp với các đặc trưng gồm khiếm khuyết về tương tác xã hội, khó khăn về giao tiếp ngôn ngữ và phi ngôn ngữ cùng vớ những hành vi, sở thích và hoạt động mang tính hạn hẹp và lặp đi lặp lại.",
            "hexCode": "#4e150f",
            "key": "5d50ccc907b9dc0c5c5b92e6",
            "id": "5d50ccc907b9dc0c5c5b92e6"
          },
          {
            "order": 2,
            "children": [],
            "_id": "5d50cdbb07b9dc0c5c5b92e8",
            "title": "Các dạng khuyết tật phát triển khác",
            "slug": "cac-dang-khuyet-tat-phat-trien-khac-a80a92f1df",
            "parent": "5e72e656c381bb0020d13f67",
            "createdAt": "2019-08-12T02:23:55.099Z",
            "updatedAt": "2020-03-25T10:43:09.808Z",
            "__v": 0,
            "description": "Một số dạng khuyết tật phát triển khác thường gặp ở trẻ",
            "hexCode": "#9c9b3b",
            "key": "5d50cdbb07b9dc0c5c5b92e8",
            "id": "5d50cdbb07b9dc0c5c5b92e8"
          },
          {
            "order": 3,
            "children": [],
            "_id": "5e72e931c204ab003cfb166f",
            "title": "Chẩn đoán, can thiệp cho trẻ khuyết tật trí tuệ và khuyết tật phát triển",
            "slug": "chan-doan-can-thiep-cho-tre-khuyet-tat-tri-tue-va-khuyet-tat-phat-trien-942fe4a731",
            "description": "Chẩn đoán, can thiệp cho trẻ khuyết tật trí tuệ và khuyết tật phát triển",
            "hexCode": "#000000",
            "parent": "5e72e656c381bb0020d13f67",
            "createdAt": "2020-03-19T03:38:25.381Z",
            "updatedAt": "2020-03-19T03:38:25.381Z",
            "__v": 0,
            "key": "5e72e931c204ab003cfb166f",
            "id": "5e72e931c204ab003cfb166f"
          },
          {
            "order": 4,
            "children": [],
            "_id": "5e72e942c204ab003cfb1671",
            "title": "Hỗ trợ tâm lý cho phụ huynh",
            "slug": "ho-tro-tam-ly-cho-phu-huynh-91e6a17673",
            "description": "Bạn là phụ huynh của trẻ có rối loạn phát triển, a365 là điểm tựa cho bạn trên từng chặng đường cùng con.",
            "hexCode": "#000000",
            "parent": "5e72e656c381bb0020d13f67",
            "createdAt": "2020-03-19T03:38:42.782Z",
            "updatedAt": "2020-03-25T10:44:21.952Z",
            "__v": 0,
            "key": "5e72e942c204ab003cfb1671",
            "id": "5e72e942c204ab003cfb1671"
          },
          {
            "order": 5,
            "children": [],
            "_id": "5e72e95ac204ab003cfb1673",
            "title": "Các vấn đề khác ở trẻ",
            "slug": "cac-van-de-khac-o-tre-ee01a9dce7",
            "description": "Một số vấn đề khác có thể gặp phải ở trẻ.",
            "hexCode": "#000000",
            "parent": "5e72e656c381bb0020d13f67",
            "createdAt": "2020-03-19T03:39:06.422Z",
            "updatedAt": "2020-03-25T10:44:44.779Z",
            "__v": 0,
            "key": "5e72e95ac204ab003cfb1673",
            "id": "5e72e95ac204ab003cfb1673"
          }
        ],
        "createdAt": "2020-03-19T03:26:14.809Z",
        "description": "Khuyết tật phát triển là gì? Trẻ có nguy cơ gặp phải dạng khuyết tật phát triển nào nhất?",
        "hexCode": "CssBorder2",
        "id": "5e72e656c381bb0020d13f67",
        "key": 3,
        "order": [
          {
            "order": 1,
            "children": [],
            "_id": "5d50ccc907b9dc0c5c5b92e6",
            "title": "Rối loạn phổ tự kỷ",
            "slug": "roi-loan-pho-tu-ky-b800c82835",
            "parent": "5e72e656c381bb0020d13f67",
            "createdAt": "2019-08-12T02:19:53.367Z",
            "updatedAt": "2020-03-25T10:42:47.806Z",
            "__v": 4,
            "description": "Rối loạn phổ tự kỷ là một dạng rối loạn phát triển phức tạp với các đặc trưng gồm khiếm khuyết về tương tác xã hội, khó khăn về giao tiếp ngôn ngữ và phi ngôn ngữ cùng vớ những hành vi, sở thích và hoạt động mang tính hạn hẹp và lặp đi lặp lại.",
            "hexCode": "#4e150f",
            "key": "5d50ccc907b9dc0c5c5b92e6",
            "id": "5d50ccc907b9dc0c5c5b92e6"
          },
          {
            "order": 2,
            "children": [],
            "_id": "5d50cdbb07b9dc0c5c5b92e8",
            "title": "Các dạng khuyết tật phát triển khác",
            "slug": "cac-dang-khuyet-tat-phat-trien-khac-a80a92f1df",
            "parent": "5e72e656c381bb0020d13f67",
            "createdAt": "2019-08-12T02:23:55.099Z",
            "updatedAt": "2020-03-25T10:43:09.808Z",
            "__v": 0,
            "description": "Một số dạng khuyết tật phát triển khác thường gặp ở trẻ",
            "hexCode": "#9c9b3b",
            "key": "5d50cdbb07b9dc0c5c5b92e8",
            "id": "5d50cdbb07b9dc0c5c5b92e8"
          },
          {
            "order": 3,
            "children": [],
            "_id": "5e72e931c204ab003cfb166f",
            "title": "Chẩn đoán, can thiệp cho trẻ khuyết tật trí tuệ và khuyết tật phát triển",
            "slug": "chan-doan-can-thiep-cho-tre-khuyet-tat-tri-tue-va-khuyet-tat-phat-trien-942fe4a731",
            "description": "Chẩn đoán, can thiệp cho trẻ khuyết tật trí tuệ và khuyết tật phát triển",
            "hexCode": "#000000",
            "parent": "5e72e656c381bb0020d13f67",
            "createdAt": "2020-03-19T03:38:25.381Z",
            "updatedAt": "2020-03-19T03:38:25.381Z",
            "__v": 0,
            "key": "5e72e931c204ab003cfb166f",
            "id": "5e72e931c204ab003cfb166f"
          },
          {
            "order": 4,
            "children": [],
            "_id": "5e72e942c204ab003cfb1671",
            "title": "Hỗ trợ tâm lý cho phụ huynh",
            "slug": "ho-tro-tam-ly-cho-phu-huynh-91e6a17673",
            "description": "Bạn là phụ huynh của trẻ có rối loạn phát triển, a365 là điểm tựa cho bạn trên từng chặng đường cùng con.",
            "hexCode": "#000000",
            "parent": "5e72e656c381bb0020d13f67",
            "createdAt": "2020-03-19T03:38:42.782Z",
            "updatedAt": "2020-03-25T10:44:21.952Z",
            "__v": 0,
            "key": "5e72e942c204ab003cfb1671",
            "id": "5e72e942c204ab003cfb1671"
          },
          {
            "order": 5,
            "children": [],
            "_id": "5e72e95ac204ab003cfb1673",
            "title": "Các vấn đề khác ở trẻ",
            "slug": "cac-van-de-khac-o-tre-ee01a9dce7",
            "description": "Một số vấn đề khác có thể gặp phải ở trẻ.",
            "hexCode": "#000000",
            "parent": "5e72e656c381bb0020d13f67",
            "createdAt": "2020-03-19T03:39:06.422Z",
            "updatedAt": "2020-03-25T10:44:44.779Z",
            "__v": 0,
            "key": "5e72e95ac204ab003cfb1673",
            "id": "5e72e95ac204ab003cfb1673"
          }
        ],
        "parent": null,
        "slug": "cac-dang-khuyet-tat-phat-trien-thuong-gap-o-tre-b70383dc61",
        "title": "CÁC DẠNG KHUYẾT TẬT PHÁT TRIỂN THƯỜNG GẶP Ở TRẺ",
        "updatedAt": "2020-04-06T16:31:08.326Z",
        "icon": "assets/icon/layers.png"
      }
    };
    this.router.navigate(['/kienthucchude'], navigationExtras);
  }
  OpenIntroduce() {
    this.service.postGet("https://api.a365.vn/webConfigurations/getA365Introduction").subscribe(
      rs => {
        var resutl = rs.json();
        let navigationExtras: NavigationExtras = {
          queryParams: resutl
        };
        this.router.navigate(['/introduce'], navigationExtras);
      });
  }
  checkModal = true;
  async backpagePost() {
    if (this.checkModal) {
      this.checkModal = false;
      const myModal = await this.modalCtrl.create({
        component: MessageConfirmPage,
        componentProps: {
          p: "Dữ liệu bạn vừa nhập chưa được lưu lại. Bạn có thực sự muốn thoát?"
        },
        cssClass: "modalmesss"
      });
      myModal.onDidDismiss().then((rs) => {
        this.checkModal = true;
        if (rs.data) {
          this.router.navigate([this.service.backPage])
        }
      });
      return await myModal.present();
    }
  }
  ViewVideo(data) {
    debugger
    let navigationExtras: NavigationExtras = {
      queryParams: data
    };
    this.router.navigate(['/video-view'], navigationExtras);
  }
  ionViewWillLeave() {
  }
}
