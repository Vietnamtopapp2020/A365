import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router'
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-postdetailkienthuc',
  templateUrl: './postdetailkienthuc.page.html',
  styleUrls: ['./postdetailkienthuc.page.scss'],
})
export class PostdetailkienthucPage implements OnInit {
  dataView = '<p class="ql-align-justify">Ở độ tuổi này, hầu hết trẻ làm được những điều sau:</p><p class="ql-align-justify"><strong>Về mặt xã hội/cảm xúc:</strong></p><ul><li class="ql-align-justify">Nhận biết được những khuôn mặt quen thuôc và bắt đầu nhận biết người lạ;</li><li class="ql-align-justify">Thích chơi với người khác, đặc biệt là bố;</li><li class="ql-align-justify">Đáp ứng lại biểu hiện cảm xúc của người khác và luôn biểu hiện vui vẻ;</li><li class="ql-align-justify">Thích tự nhìn vào bản thân ở trong gương.</li></ul><p class="ql-align-justify"><strong>Về mặt ngôn ngữ/giao tiếp:</strong></p><ul><li class="ql-align-justify">Phản ứng lại âm thanh bằng cách tạo ra âm thanh;</li><li class="ql-align-justify">Nói được nguyên âm khi bập bẹ (VD: a, ê, ô) và thích tạo âm thanh với bố mẹ theo lượt;</li><li class="ql-align-justify">Đáp ứng khi được gọi tên;</li><li class="ql-align-justify">Tạo âm thanh, thể hiện vui hay không hài lòng;</li><li class="ql-align-justify">Bắt đầu phát âm được phụ âm (âm bắt đầu với “m” hoặc “b”).</li></ul><p class="ql-align-justify"><strong>Nhận thức (học, suy nghĩ, giải quyết vấn đề):</strong></p><ul><li class="ql-align-justify">Nhìn xung quanh vào những vật ở gần;</li><li class="ql-align-justify">Cho đồ vật vào mồm;</li><li class="ql-align-justify">Tỏ ra tò mò về mọi vật và cố gắng lấy những thứ ngoài tầm tay;</li><li class="ql-align-justify">Bắt đầu chuyển đồ vật từ tay này sang tay khác;</li></ul><p class="ql-align-justify"><strong>Vận động / phát triển thể chất:</strong></p><ul><li class="ql-align-justify">Lật người theo hai hướng (lật từ nằm ngửa sang nằm sấp và ngược lại);</li><li class="ql-align-justify">Bắt đầu ngồi mà không cần trợ giúp;</li><li class="ql-align-justify">Khi đứng, trẻ dồn lực lên chân và có thể nhảy bật lên (bounce);</li><li class="ql-align-justify">Đung đưa từ trước sau, đôi khi trẻ biết bò lùi trước khi biết bò tiến.</li></ul><p class="ql-align-justify"><strong>Hãy nói chuyện sớm với bác sĩ hoặc làm&nbsp;</strong><a href="https://a365.vn/theo-doi-phat-trien" target="_blank" style="color: rgb(20, 120, 185);"><strong>bộ câu hỏi sàng lọc phát triển ASQ-3</strong></a>&nbsp;<strong>nếu con bạn:</strong></p><ul><li class="ql-align-justify">Không cố gắng lấy đồ vật trong tầm tay;</li><li class="ql-align-justify">Không thể hiện cảm xúc với người chăm sóc;</li><li class="ql-align-justify">Không đáp ứng lại âm thanh xung quanh;</li><li class="ql-align-justify">Gặp khó khăn trong việc đưa đồ vật vào trong miệng;</li><li class="ql-align-justify">Không nói được nguyên âm (a, ê, ô);</li><li class="ql-align-justify">Không lăn người theo hướng nào được;</li><li class="ql-align-justify">Không cười hoặc hò hét;</li><li class="ql-align-justify">Chân tay có vẻ cứng, cơ bắp cứng đơ;</li><li class="ql-align-justify">Chân tay rất mềm như búp bê vải.</li></ul><p class="ql-align-justify"><br></p><p class="ql-align-justify"><strong>Tài liệu tham khảo:&nbsp;</strong></p><p class="ql-align-justify">Centers for Disease Control and prevention. USA; 2015. Learn the Signs. Act Early.</p><p class="ql-align-justify"><em>Không được phép sử dụng video và các bài viết trên trang&nbsp;</em><a href="http://a365.vn/" target="_blank" style="color: rgb(20, 120, 185);"><em>a365.vn</em></a><em>&nbsp;mà chưa có sự đồng ý từ a365</em></p><p><br></p>"'
  data: any;
  title: any;
  conten: any;
  video: any;
  img: any;
  createat: any;
  textSplit: any[] = [];
  textSplit1: any[] = [];
  textSplit2: any[] = [];
  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    public modalCtrl: ModalController,
    public router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.service.Page = "";


    this.data = this.router.getCurrentNavigation().extras.queryParams;
    this.title = this.data.list.title;
    // var n = this.data.conten.search('<li class="ql-align-justify">');
    // if (n == -1) {
    //   this.conten = this.data.conten;
    // }
    // else {
    //   var textView = "";
    //   var textView1 = "";
    //   var textView2 = "";
    //   this.textSplit = this.data.conten.split('<li class="ql-align-justify">')
    //   for (let i = 0; i < this.textSplit.length - 1; i++) {
    //     textView = textView + this.textSplit[i] + '<li class="ql-align-justify">* ';
    //   }
    //   this.conten = textView + this.textSplit[this.textSplit.length - 1];
    // }
     this.conten = this.data.conten;
    if (this.data.list.videos.length == 0) {
      this.video = ''
    }
    else {
      this.video = this.data.list.videos[0].url.replace("https://youtu.be/", "https://www.youtube.com/embed/")
    }

    this.img = this.data.list,
      this.createat = moment(this.data.list.updatedAt).format("DD-MM-YYYY")
  }
  transform(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video.replace("https://youtu.be/", "https://www.youtube.com/embed/"));
  }
  ngOnInit() {
  }
}
