import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, BooleanValueAccessor, NavParams, MenuController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-huongdansudung',
  templateUrl: './huongdansudung.page.html',
  styleUrls: ['./huongdansudung.page.scss'],
})
export class HuongdansudungPage implements OnInit {
  Listhuongdan = [
    {
      Chap: 'Hướng dẫn cách đăng ký tài khoản trên website A365.vn.',
      text: 'Bước 1. Truy cập trang A365.vn. Bạn có thể truy cập theo 2 cách:Cách 1: Từ các trang tìm kiếm như Google, Yahoo... gõ từ khóa A365.vn, nhấn tìm kiếm. Sau đó chọn trang A365.vn.Cách 2: Từ trình duyệt internet, gõ https://a365.vn/Bước 2. Từ góc trên, bên phải màn hình, chọn “Đăng ký”Bước 3. Nhập thông tin đăng ký bao gồm mật khẩu, email. Chọn loại tài khoản (người chăm sóc, cán bộ y tế, giáo viên) trong mục "Bạn Là". Sau đó chọn “Đăng ký”.Bước 4. Nhập thông tin hồ sơ của người dùng. Bạn cần nhập đủ các trường có dấu sao , rồi chọn “Hoàn tất”. Sau khi hoàn thành bước này, bạn cần kích hoạt tài khoản để tiếp cận được hết các chức năng trên A365.vn.Bước 5. Xác nhận tài khoản. Để thực hiện bước này, bạn cần vào email bạn dùng để đăng ký tài khoản trên A365. Ban cần tìm thư có tiêu đề “Xác thực email đăng nhập hệ thống A365”, mở thư và chọn nút “xác nhận email”.Sau khi chọn, bạn sẽ thấy thông báo kích hoạt thành công tức là bạn đã hoàn tất đăng ký tài khoản trên A365.Lưu ý: nếu không tìm được email xác thực từ A365 trong hòm thư chính, bạn có thể kiểm tra ở mục Spam, hoặc Thùng rác. Nếu vẫn không tìm thấy email xác nhận, thì tại giao diện A365 bạn chọn “gửi lại email kích hoạt”. Sau đó, nếu vẫn không thấy email, bạn kiểm tra lại email bạn nhập để đăng ký tài khoản trên A365. Có thể có sự nhầm lẫn giữa email đăng ký và email bạn mở để tìm thư kích hoạt.Để kiểm tra lỗi này, tại giao diện chưa kích hoạt. Bạn chọn nút “Xin chào…” ở góc trên bên phải màn hình. Sau đó chọn cập nhật hồ sơ. Tại đây bạn kiểm tra xem email đăng ký taif khoản và email bạn đang sử dụng có đúng không (lưu ý: kiểm tra cả về chữ viết in hoa, chữ thường). Việc nhập sai email dẫn tới việc sẽ không có email kích hoạt gửi về cho bạn. Gặp trường hợp này, bạn thực hiện lại các bước đăng ký với email đúng.Trong quá trình thực hiện, nếu gặp khó khăn, bạn có thể liên hệ với chúng tôi qua đường dây nóng 0346747440 (từ thứ 2 tới thứ 6) hoặc qua email: support.a365@ccihp.org hoặc fanpage: A365 - Chăm sóc thông minh cho trẻ.',
      checkOpen: false,
    },
    {
      Chap: 'Hướng dẫn sử dụng chức năng sàng lọc, theo dõi phát triển trên website A365.vn.',
      text: 'Đối với người chăm sóc trẻ, A365.vn cung cấp 2 công cụ để sàng lọc chính là công cụ ASQ3 (dành cho trẻ từ 2 đến 66 tháng tuổi) nhằm đánh giá sự phát triển của trẻ, và bộ công cụ MCHAT-R để đánh giá nguy cơ rối loạn phổ tự kỷ của trẻ.Các bước thực hiện bao gồm:Bước 1. Đăng nhập: Tại trang chủ, chọn "đăng nhập" ở góc trên bên phải màn hình, Nhập email và mật khẩu để đăng nhập.Bước 2. Đăng ký trẻ: tại “Trang của tôi”, trong mục hồ sơ trẻ, chọn “Đăng ký trẻ mới”. Tại đây, bạn nhập đủ thông tin của trẻ rồi chọn lưu. Đối với mỗi trẻ, bạn chỉ phải đăng ký 1 lần. Sau đó bạn chọn “về trang trước” để quay lại trang của tôi.Bước 3. Chọn bài sàng lọc và thực hiện. Bạn chọn bài ASQ-3 để theo dõi sự phát triển, bài MCHAT-R để đánh giá nguy cơ rối loạn phổ tự kỷ của trẻ.Sau đó chọn trẻ để thực hiện và chọn “Tiếp tục” để thực hiện bài sàng lọc.Bước 4. Đọc kết quả: Sau khi thực hiện xong bài sàng lọc, bạn chọn “ Xem kết quả” để đọc kết quả của trẻ. A365.vn cung cấp 2 chức năng để bạn có lưu kết quả hoặc chia sẻ kết quả cho người thân, cán bộ y tế, giáo viên giáo dục đặc biệtTrong quá trình thực hiện, nếu gặp khó khăn, bạn có thể liên hệ với chúng tôi qua đường dây nóng 0346747440 (từ thứ 2 tới thứ 6) hoặc qua email: support.a365@ccihp.org hoặc fanpage: A365 - Chăm sóc thông minh cho trẻ.',
      checkOpen: false,
    },
    {
      Chap: 'Hướng dẫn khôi phục mật khẩu trên A365',
      text: 'Trong quá trình sử dụng các chức năng trên trang a365.vn, bạn có thể gặp một số khó khăn như quên mất mật khẩu của tài khoản bạn sử dụng, hoặc gặp phải thông báo “sai mật khẩu” khi đang đăng nhập.Bạn có thể tự lấy lại mật khẩu của mình theo các bước sau:Bước 1. Tại trang “Đăng nhập”, bạn kéo xuống dưới và chọn “Lấy lại mật khẩu”.Bước 2. Nhập email bạn dùng đăng ký tài khoản trên A365 và chọn tiếp tục.Bước 3. Bạn vào email của mình. Tìm thư có tiêu đề “Khôi phục mật khẩu hệ thống a365.”. Trong thư này, bạn chọn “khôi phục mật khẩu”.Bước 4. Nhập mật khẩu mới và chọn “Cập nhật”.Xuất hiện thông báo cập nhật mật khẩu thành công, Sau đó, bạn có thể đăng nhập theo mật khẩu mới vừa tạo.Lưu ý:Bạn cần nhập chính xác email đã đăng ký tài khoản để nhận được email hướng dẫn khôi phục mật khẩu gửi về.Nếu bạn không tìm thấy email hướng dẫn, bạn hãy kiểm tra các mục khác như Thùng rác hoặc SPAM.Trong quá trình thực hiện, nếu gặp khó khăn, bạn có thể liên hệ với chúng tôi qua đường dây nóng 0346747440 (từ thứ 2 tới thứ 6) hoặc qua email: support.a365@ccihp.org hoặc fanpage: A365 - Chăm sóc thông minh cho trẻ.',
      checkOpen: false,
    },
  ];
  data: any;
  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    private router: Router,
    private menuCtrl: MenuController,
    public navCtrl: NavController
  ) {
    this.data = this.router.getCurrentNavigation().extras.queryParams;
     this.service.Page = "";
  }

  ngOnInit() {
  }

  backPage() {
    var pageBack = "";
    if (this.service.PackRoot == "trangchu") {
      pageBack = "/trangchu";
    }
    if(this.service.PackRoot == "trangcuatoi"){
      pageBack = "/trangcuatoi"
    }
    if (this.data != undefined) {
      this.router.navigate([pageBack])
    }
    else {
      this.menuCtrl.open();
      if (this.service.Role == 1) {
        this.router.navigate([pageBack])
      }
      else if (this.service.Role == 2) {
        this.router.navigate([pageBack])
      }
      else if (this.service.Role == 3) {
        this.router.navigate([pageBack])
      }
      else {
        this.router.navigate(['/register'])
      }
    }
  }
  openQuest(data) {
    data.checkOpen = !data.checkOpen;
  }
}
