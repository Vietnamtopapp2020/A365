import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, BooleanValueAccessor, NavParams, MenuController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-chinhsach',
  templateUrl: './chinhsach.page.html',
  styleUrls: ['./chinhsach.page.scss'],
})
export class ChinhsachPage implements OnInit {
  Listchinhsach = [
    {
      Chap: 'Chính sách bảo mật thông tin',
      text: 'Chính sách này được áp dụng khi người dùng truy cập website a365, tạo tài khoản trên website a365 và bất kỳ thời điểm nào người dùng truy cập, sử dụng website, tức là người dùng đồng ý và chịu ràng buộc với các điều khoản được quy định trong Chính sách này (bao gồm cả các phần bổ sung, sửa đồi tùy từng thời điểm)',
      checkOpen: false,
    },
    {
      Chap: 'Cam kết bảo mật thông tin',
      text: 'Chúng tôi tôn trọng và cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn. Xin vui lòng đọc bản Chính sách bảo mật dưới đây để hiểu hơn những cam kết mà chúng tôi thực hiện nhằm tôn trọng và bảo vệ quyền lợi của người truy cập.Bảo vệ dữ liệu cá nhân và gây dựng được niềm tin cho người dùng là một trong những ưu tiên hàng đầu của chúng tôi.Bạn sẽ không cần phải cung cấp thông tin cá nhân của bạn nếu chỉ truy cập vào website mà không đăng ký tài khoản. Tuy nhiên, nếu bạn sử dụng chức năng theo dõi phát triển, chúng tôi sẽ chỉ thu thập những thông tin cần thiết liên quan đến việc theo dõi phát triển cho trẻ như ngày sinh và tình trạng của trẻ.Chúng tôi sẽ chỉ thu thập thông tin cá nhân của bạn khi bạn đăng ký tài khoản',
      checkOpen: false,
    },
    {
      Chap: 'Phạm vi thu thập thông tin',
      text: 'Thuật ngữ “Thông tin cá nhân” trong chính sách này là thông tin có thể nhận diện hoặc có khả năng nhận diện danh tính cá nhân. Những thông tin cá nhân của bạn mà chúng tôi sẽ thu thập khi bạn đăng ký tài khoản trên website a365.vn bao gồm: tên, tuổi, địa chỉ, số điện thoại, email và các thông tin liên quan tới trẻ của bạn như họ tên của trẻ, ngày sinh của trẻ, tình trạng của trẻ.Nếu bạn đăng ký hoặc đăng nhập vào webiste a365 bằng cách sử dụng thông tin đăng nhập của bên thứ ba (ví dụ như Facebook, Google), chúng tôi sẽ nhập thông tin của bạn từ bên thứ ba đó để giúp bạn tạo lập tài khoản với chúng tôi',
      checkOpen: false,
    },
    {
      Chap: 'Phạm vi sử dụng thông tin',
      text: 'Chúng tôi sẽ dùng thông tin bạn đã cung cấp để hỗ trợ bạn quản lý tài khoản và thực hiện các hoạt động liên quan đến theo dõi phát triển và can thiệp cho trẻChúng tôi sẽ sử dụng thông tin bạn cung cấp để báo cáo cho nhà tài trợ và các đối tác khác cũng như tải các dữ liệu lên hệ thống báo cáo của nhà tài trợ, tuy nhiên những dữ liệu được sử dụng để báo cáo sẽ không có tên hay bất cứ thông tin cá nhân (những thông tin có thể nhận diện) của bạn để đảm bảo sự riêng tư và bảo mật của người sử dụng website này.Chúng tôi có thể dùng thông tin bạn cung cấp để thực hiên các nghiên cứu, tuy nhiên các thông tin cá nhân (những thông tin có thể nhận diện) sẽ được ẩn và chỉ được dùng để thống kê.Các thông tin cá nhân của bạn sẽ không được gửi cho bất kỳ bên thứ ba nào hiện không sử dụng trang a365.vn, ngoại trừ theo yêu cầu của các cơ quan tư pháp.Khi cần thiết, chúng tôi có thể sử dụng những thông tin cá nhân này để liên hệ trực tiếp với bạn nhằm hỗ trợ bạn trong quá trình sử dụng website a365 để sàng lọc và can thiệp cho trẻ cũng như thông báo về các hoạt động mới của websiteChúng tôi dùng thông tin bạn cung cấp để phân tích và đo lường nhằm hiểu rõ cách website của chúng tôi được sử dụng. Ví dụ: chúng tôi phân tích dữ liệu về các lần truy cập của bạn vào website của chúng tôi để thực hiện những việc như tối ưu hóa website. Chúng tôi có thể sử dụng các dịch vụ phân tích của bên thứ ba, như dịch vụ phân tích của Google Analytics. Những dịch vụ phân tích này giúp chúng tôi phân tích việc người dùng sử dụng a365 và cải thiện website. Chúng tôi có thể cung cấp một số thông tin của bạn cho các nhà cung cấp này và bên thứ ba liên quan, hoặc họ có thể trực tiếp thu thập những thông tin này để đánh giá việc sử dụng website, giúp quản lý webiste và giải quyết các vấn đề kỹ thuật.Để tìm hiểu về Google Analytics, vui lòng truy cập http://www.google.com/analytics/learn/privacy.html và https://www.google.com/policies/privacy/partners/.',
      checkOpen: false,
    },
    {
      Chap: 'Sự tự nguyện cung cấp thông tin',
      text: 'Việc cung cấp các thông tin cá nhân của bạn là hoàn toàn tự nguyện, điều này thể hiện qua việc đọc, hiểu và đồng ý với tuyên bố "Tôi đồng ý các điều khoản, điều kiện và chính sách bảo mật thông tin của tổ chức về quy định đăng ký tài khoản" khi bạn đăng ký tài khoản trên website a365.',
      checkOpen: false,
    }

  ];

  constructor(
    public navCtr: NavController,
    public modalController: ModalController,
    public service: ServiceService,
    public toast: ToastServiceService,
    private router: Router,
    private menuCtrl: MenuController,
  ) {
    // this.service.Page = "";

  }
  ngOnInit() {
  }
  backPage() {
    var pageBack = "";
    if (this.service.PackRoot == "trangchu") {
      pageBack = "/trangchu";
    }
    if (this.service.PackRoot == "trangcuatoi") {
      pageBack = "/trangcuatoi"
    }
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
  openQuest(data) {
    data.checkOpen = !data.checkOpen;
  }
}
