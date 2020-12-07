import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-termconditions',
  templateUrl: './termconditions.page.html',
  styleUrls: ['./termconditions.page.scss'],
})
export class TermconditionsPage implements OnInit {
  Listdieukhoan = [
    {
      Chap: 'Việc sử dụng nội dung của người dùng',
      text: 'Nội dung chính trên trang web a365.vn được xây dựng từ chính các tài liệu nghiên cứu/chương trình/dự án của Trung tâm Sáng kiến Sức khỏe và Dân số, hoặc các tài liệu từ các tổ chức chính phủ, phi chính phủ uy tín trong và ngoài nước đã được chúng tôi xin phép đăng tải (với các tổ chức yêu cầu sự xin phép bản quyền).Mục tiêu của website A365.vn là tạo ra một cổng thông tin điện tử, cho phép người dùng được tiếp cận các kiến thức có bằng chứng khoa học về các mốc phát triển điển hình ở trẻ nhỏ, rối loạn phát triển và tự kỷ và giải pháp tâm lý cho cha mẹ có con tự kỷ. Bên cạnh đó, người dùng có thể làm các bài sàng lọc phát triển và tự kỷ cho trẻ nhỏ từ 9 đến 48 tháng thông qua những công cụ sàng lọc được sử dụng phổ biến trên thế giới. Một chức năng quan trọng của A365 là cung cấp các bài tập can thiệp tại nhà cho trẻ nhỏ dưới 6 tuổi. Ngoài ra, cán bộ y tế và cha mẹ cũng có thể tự đánh giá kiến thức và đánh giá hiệu quả của các bài tập can thiệp cho trẻ nhỏ. Tuy nhiên nội dung trên website không thay thế hoàn toàn được các dịch vụ tư vấn, chẩn đoán và can thiệp từ các đơn vị y tế chuyên nghiệp. Do đó, chúng tôi luôn khuyến khích bạn tìm đến các đơn vị y tế uy tín khi cần thiết.Đối với các tài liệu quốc tế, chúng tôi khẳng định việc dịch nguyên bản và hiệu chỉnh nhằm phù hợp hơn với người Việt Nam được thực hiện bởi đội ngũ nghiên cứu viên, biên dịch viên, và cộng tác viên chuyên môn của Trung tâm Sáng kiến Sức khỏe và Dân số. Trang web cố gắng đảm bảo các bài viết, công cụ, dịch vụ được đăng tải chính xác, cập nhật và hữu ích cho người đọc. Tuy nhiên, a365.vn không thể đảm bảo và không chịu trách nhiệm về độ chính xác và mức cập nhật của bất kì nội dung nào từ các nhà cung cấp.',
      checkOpen: false

    },
    {
      Chap: 'Thông tin liên hệ',
      text: 'Mọi câu hỏi về điều khoản và điều kiện sử dụng hoặc việc xin cấp phép sử dụng nội dung bản quyền của website www.a365.vn vui lòng gửi đến đại diện của chúng tôi:Địa chỉ: Trung tâm Sáng kiến Sức khỏe và Dân số (Số 48, ngõ 251/8 đường Nguyễn Khang, Cầu Giấy, Hà Nội)    Điện thoại: 84-4-3577 0261 (ấn máy lẻ 42)    Hotline: 0344365229Fax : 84-4-3577 0260    Email: hthoa@ccihp.org',
      checkOpen: false

    },
    {
      Chap: 'Nội dung do người dùng đăng tải',
      text: 'Người dùng phải chịu trách nhiệm với tất cả nội dung do họ cung cấp, đăng tải trên hoặc qua website. Khi chia sẻ thông tin, người dùng đã mặc nhiên thừa nhận và đảm bảo với a365.vn rằng các nội dung đó người dùng có toàn quyền cung cấp.',
      checkOpen: false

    },
    {
      Chap: 'Quyền sở hữu và Quyền sở hữu trí tuệ',
      text: 'Website này thuộc quyền sở hữu của Trung tâm Sáng kiến Sức khỏe và Dân số. Tất cả các quyền, quyền sở hữu và quyền lợi đối với nội dung trên website, giao diện và thiết kế, nhãn hiệu, ký hiệu dịch vụ, và thương hiệu hiển thị trên website và các địa chỉ (URL) của website là tài sản của Trung tâm Sáng kiến Sức khỏe và Dân số hoặc những cá nhân, tổ chức cấp bản quyền và được bảo vệ bởi luật bản quyền, nhãn hiệu, bằng sáng chế hoặc các quyền và luật sở hữu khác.',
      checkOpen: false

    },
    {
      Chap: 'Quyền sử dụng nội dung',
      text: 'Nghiêm cấm sao chép nội dung dưới mọi hình thức mà chưa được sự chấp thuận. Mọi hành động sử dụng nội dung đăng tải trên www.a365.vn đều phải xin phép bằng văn bản và có sự đồng ý bằng văn bản của Trung tâm Sáng kiến Sức khỏe và Dân số. Khi sử dụng hoặc đăng tải lại, cần công bố nguồn tài liệu thuộc về website www.a365.vn và Trung tâm Sáng kiến Sức khỏe và Dân số.',
      checkOpen: false


    },
    {
      Chap: 'Kết nối với bên thứ 3',
      text: 'Các giao dịch của người dùng với cá nhân, tổ chức đăng quảng cáo và các bên thứ ba khác trên hoặc được truy cập qua trang Web là vấn đề của riêng họ và bên thứ ba đó. A365.vn không kiểm soát nội dung hiển thị trên các trang web của bên thứ ba đó. Chúng tôi không cấp hoặc cho quyền sử dụng hoặc sao chép thông tin trên trang web của bên thứ ba. Ngoài ra, chúng tôi cũng không chịu trách nhiệm pháp lí về bất kỳ thiệt hại nào gây ra bởi các giao dịch giữa người dùng và bên thứ ba.Ngoài ra, chúng tôi có thể bao gồm bên thứ 3 hoặc cung cấp sản phẩm hoặc các dịch vụ của bên thứ ba trên trang web của chúng tôi. Những trang web của bên thứ ba có chính sách bảo mật riêng biệt và độc lập. Do đó, chúng tôi không có trách nhiệm đối với các nội dung và hoạt động của các trang web liên kết. Tuy nhiên, chúng tôi tìm cách bảo vệ tính trung thực/ trong sạch của website và đón nhận mọi phản hồi về trang web.',
      checkOpen: false


    },
    {
      Chap: 'Chúng tôi sử dụng cookie?',
      text: 'Vâng (Cookies là những tệp nhỏ mà một trang web hoặc nhà cung cấp dịch vụ của trang web chuyển vào ổ cứng máy tính của bạn thông qua trình duyệt web (nếu bạn cho phép)). Điều này cho phép hệ thống trang web hoặc nhà cung cấp dịch vụ của trang web nhận dạng các trang web hoặc chụp lại và ghi nhớ các thông tin nhất định.Chúng tôi sử dụng cookie để biên soạn, tổng hợp dữ liệu về chi tiết trang web, lưu lượng truy cập và tương tác trang web để chúng tôi có thể cho các bạn các trải nghiệm và bộ công cụ tốt hơn trong tương lai. Chúng tôi có thể ký hợp đồng hỗ trợ với nhà cung cấp dịch vụ bên thứ 3 để hiểu hơn về những người ghé thăm a365. Những người cung cấp dịch vụ này không được phép thay mặt a365 sử dụng các thông tin thu thập được, trừ việc giúp chúng tôi thực hiện và cải thiện hoạt động trên a365.',
      checkOpen: false


    },
    {
      Chap: 'Tài khoản của người dùng',
      text: 'Khi đăng ký làm thành viên của website www.a365.vn, người dùng cần đọc rõ và tuân thủ theo các Điều khoản thành viên của chúng tôi.',
      checkOpen: false


    },
    {
      Chap: 'Điều chỉnh và đình chỉ App',
      text: 'A365.vn có thể chỉnh sửa, tạm ngưng, hoặc đình chỉ hoạt động của App một cách tạm thời hoặc vĩnh viễn mà không cần thông báo cho người dùng.',
      checkOpen: false

    },
    {
      Chap: 'Luật áp dụng và giải quyết tranh chấp',
      text: 'Các điều khoản và điều kiện sử dụng hoặc bất kỳ tranh chấp, khiếu nại phát sinh liên quan đến các điều khoản đó hoặc các vấn đề hoặc các phần chính của các điều khoản đó (bao gồm những tranh chấp hoặc khiếu nại không được thỏa thuận) sẽ được điều chỉnh và xử lý theo pháp luật Việt Nam.',
      checkOpen: false
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
