import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, BooleanValueAccessor, NavParams, MenuController } from '@ionic/angular';
import { ServiceService } from 'src/app/providers/service.service';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-cauhoithuonggap',
  templateUrl: './cauhoithuonggap.page.html',
  styleUrls: ['./cauhoithuonggap.page.scss'],
})
export class CauhoithuonggapPage implements OnInit {
  Ch = [
    {
      bo: 'Các câu hỏi về đăng ký, đăng nhập, khôi phục mật khẩu',
      img: "assets/icon/login.png",
      hexCode: "CssBorder0",
      ListQuest: [
        {
          tencauhoi: 'Không có email, tôi có thể đăng ký tài khoản trên A365 không?',
          traloi: 'Không có email bạn vẫn có thể đăng ký tài khoản thông qua tài khoản Facebook. Bạn thực hiện như sau: Bước 1: Từ trang chủ, bạn chọn mục “ĐĂNG NHẬP” từ menu.Bước 2: Chọn “ĐĂNG NHẬP BẰNG FACEBOOK”.Bước 3. Chọn đồng ý cung cấp thông tin',
          img: "assets/imgs/plus.png",
          checkOpen: false
        },
        {
          tencauhoi: 'Tôi đã đăng ký tài khoản, tôi làm thế nào để đăng nhập vào hệ thống?',
          traloi: 'Sau khi đăng ký, bạn cần đăng nhập để có thể trải nghiệm tất cả các chức năng trên A365. Có hai cách đăng nhập tài khoản trên A365 là đăng nhập bằng email và đăng nhập qua facebook. Để đăng nhập qua email, bạn là cho cách sau: Bước 1: Từ trang chủ, bạn chọn mục “ĐĂNG NHẬP” từ menu.Bước 2: Điền Email hoặc số điện thoại đã đăng ký và mật khẩu đã đăng ký.Bước 3: Chọn “ĐĂNG NHẬP”',
          checkOpen: false
        },
        {
          tencauhoi: 'Tại sao A365 yêu cầu đăng nhập?',
          traloi: 'Giúp cho A365 có thể theo dõi hỗ trợ các phụ huynh có con nguy cơ sau khi có kết quả sàng lọc. Giúp cho các phụ huynh có con tham gia vào trong các video can thiệp yên tâm hơn về tính riêng tư của hình ảnh. Có số liệu để theo dõi chương trình: ví dụ số trẻ làm sàng lọc, số trẻ can thiệp để có thể điều chỉnh các hoạt động nhằm đáp ứng được tốt hơn nhu cầu của phụ huynh. Những số liệu này cũng là các chỉ số báo cáo cho nhà tài trợ về tiến độ và hiệu quả dự án, đảm bảo tính minh bạch, cũng như là cơ sở để xây dựng các chương trình tiếp theo với những cơ quan nghiên cứu, quĩ tài trợ tiềm năng. Số liệu nghiên cứu phục vụ cho ra quyết định về chính sách. Ví dụ như số liệu về các trẻ được theo dõi phát triển, kết quả sàng lọc cũng được công bố trong các bài báo, hội nghị khoa học và là cơ sở để Bệnh viện Nhi Trung Ương và Bộ Y tế thẩm định cho công tác thử nghiệm và xây dựng hướng dẫn quốc gia về phát hiện sớm can thiệp sớm cho trẻ và là cơ sở để mở rộng. Tất cả các số liệu khi báo cáo ra bên ngoài đều đảm bảo tính ẩn danh, nghĩa là các thông tin cá nhân về tên của trẻ, của gia đình trẻ, đều sẽ được bỏ ra ngoài',
          checkOpen: false
        },
        {
          tencauhoi: 'Tại sao khi đăng ký tài khoản tôi đã xác nhận tài khoản qua email những giao diện tại “trang của tôi” vẫn báo tài khoản chưa được đăng ký?',
          traloi: 'Khi gặp hiện tượng trên, Đầu tiên bạn thẻ refresh lại trình duyệt web (chrome, safari…) của thiết bị. Nếu hiện tượng trên vẫn còn, bạn hãy kiểm tra lại tài khoản mình đang sử dụng – nếu bạn có nhiều hơn 1 tài khoản. Nếu bạn đã đăng nhập đúng tài khoản, Thực hiện lần lượt các bước sau: Bước 1: update trình duyệt web trong trong thiết bị của mình lên phiên bản mới nhất rồi thử đăng nhập lạiBước 2: Nếu hiện tượng trên vẫn còn, thử đăng nhập lại với trình duyệt web khác trong thiết bị của mình hoặc đăng nhập trên thiết bị khác.Bước 3: Nếu hiện thượng trên vẫn còn phiền bạn liên hệ hotline 0346757440 để được hướng dẫn chi tiết.',
          checkOpen: false
        },
        {
          tencauhoi: 'Tại sao tôi gặp thông báo số điện thoại, email đã được sử dụng khi đăng ký tài khoản?',
          traloi: 'Khi bạn đăng ký tài khoản, bạn gặp phải thông báo “số điện thoại, email này đã được sử dụng”. Trường hợp này xảy ra khi email bạn đăng ký tồn tại trong hệ thống. Nguyên nhân có thể là do bạn “quên mất” mình đã sử dụng email này để đăng ký hoặc do đăng ký thất bại 1 lần hoặc do bất ký một lý do nào đó, email này đã được sử dụng trên hệ thống.Để giải quyết tình trạng này:Cách 1: Bạn dùng một email khác để tiến hành việc đăng ký.Cách 2: Trao đổi lại với người thân, hoặc bạn bè, đồng nghiệp để xin lại mật khẩu tài khoản trên A365, hoặc tham khảo hướng dẫn thiết lập lại mật khẩu.',
          checkOpen: false
        },
        {
          tencauhoi: 'Tôi quên mật khẩu, là thế nào để tôi thiết lập lại mật khẩu?',
          traloi: 'Những lý do chính bao gồm: nhớ sai nhớ sai mật khẩu hoặc không nhớ mật khẩu. trong trường hợp bạn quên mật khẩu bạn thực hiện theo các bước sau để khôi phục lại mật khẩu.Bước 1: Từ phần “ĐĂNG NHẬP”, bạn chọn “BẠN QUEN MẬT KHẨU?LẤY LẠI MẬT KHẨU”Bước 2: Điền email đã đăng ký rồi chọn tiếp tục.Bước 3: Tìm trong email của mình mail có tiêu đề “Khôi phục mật khẩu đăng nhập hệ thống a365” trong hòm thư của bạn. Mở Email và chọn “KHÔI PHỤC MẬT KHẨU”Bước 4: Điền mật khẩu mới. Rồi chọn “OK”.',
          checkOpen: false
        },
        {
          tencauhoi: 'Tại sao tôi khi thực hiện lấy lại mật khẩu, tôi đã hoàn thành bước khai mật khẩu mới nhưng lại không sử dụng mật khẩu mới này để đăng nhập được?',
          traloi: 'Nguyên nhân của hiện tượng trên là do khi nhập email để khôi phục mật khẩu, bạn đã nhập sai email đăng ký tài khoản – bạn nhập email hay sử dụng thay vì email đăng ký tài khoản. Điều này dẫn tới bạn không thể đổi mật khẩu cho tài khoản trên A365. Để khắc phục bạn nhập lại đúng email đăng ký tài khoản và thực hiện lại các bước khôi phục mật khẩu. Nếu email đăng ký tài khoản bạn đã ngừng hoặc không thể sử dụng, hãy sử dụng lại email mới để đăng ký tài khoản.',
          checkOpen: false
        },
        {
          tencauhoi: 'Khi đăng ký, tại sao tôi không tìm thấy email xác nhận tài khoản?',
          traloi: 'Khi bạn thực hiện các bước đăng ký tài khoản, A365 sẽ gửi về email bạn đã đăng ký 1 thư có tiêu đề “Xác thực email đăng nhập hệ thống a365”. Bạn cần click vào nút xác nhận email để hoàn tất các bước đăng ký tài khoản. Nếu bạn không tìm thấy email trên, bạn thực hiện lần lượt các bước sau: Bước 1: Kiểm tra xem email bạn đăng ký và email bạn đang sử dụng có giống nhau không (kiểm tra cả chữ in hoa và in thường) . Việc nhập sai email đăng ký sẽ dẫn tới không có email xác nhận được gửi về cho bạn. Hoặc cũng có thể bạn đang mở nhầm emai để kiểm tra. Nếu bạn gõ sai email đăng ký, bạn thực hiện lại các bước đăng ký với email đúng .  Nếu bạn mở sai email, hãy kiểm tra lại email đúng.  Bước 2. Nếu email bạn nhập đúng, bạn hãy kiểm tra mục “THÙNG RÁC” hoặc "SPAM” trong hòm thư của bạn.  Bước 3. Nếu vẫn không thấy email xác nhận, bạn đăng nhập vào tài khoản A365 với email và mật khẩu đã đăng ký. Sau khi đăng nhập, bạn vào mục “TRANG CỦA TÔI”, bạn chọn “GỬI LẠI EMAIL KÍCH HOẠT”. Sau đó vào lại email để tìm thư xác nhận tài khoản.  Bước 4. Nếu vẫn không thấy thư xác nhận tài khoản, bạn liên hệ với chúng tôi theo đường dây nóng 0346757440 hoặc fanpage “A365 - Chăm sóc thông minh cho trẻ” để được hướng dẫn chi tiết (https://www.facebook.com/a365.vn/)',
          checkOpen: false
        },
        {
          tencauhoi: 'Tại sao khi click vào nút xác nhận email trong thư xác nhận tài khoản A365 tôi lại thấy báo lỗi?',
          traloi: 'Khi bạn chọn “XÁC NHẬN EMAIL” trong email “Xác thực email đăng nhập hệ thống a365”, bạn thấy thông báo lỗi, điều này xảy ra khi bạn thực hiện bước kich hoạt email quá lâu so với thời điểm thực hiện các bước đăng ký trên A365. Để có thể hoàn tất việc đăng ký, bạn thực hiện như sau: bạn đăng nhập vào tài khoản A365 với email và mật khẩu đã đăng ký. Sau khi đăng nhập, bạn vào mục “TRANG CỦA TÔI”, bạn chọn “GỬI LẠI EMAIL KÍCH HOẠT”. Sau đó vào lại email để tìm thư xác nhận tài khoản.  Nếu vẫn tiếp tục thấy lỗi, bạn liên hệ với chúng tôi theo đường dây nóng 0346757440 hoặc fanpage “A365 - Chăm sóc thông minh cho trẻ” để được hướng dẫn chi tiết (https://www.facebook.com/a365.vn/)',
          checkOpen: false
        }

      ]
    },
    {
      bo: 'Một số câu hỏi về cập nhật/thay đổi thông tin cá nhân, thông tin của trẻ',
      img: "assets/icon/Group 856.png",
      hexCode: "CssBorder1",
      ListQuest: [
        {
          tencauhoi: 'Làm cách nào để tôi muốn cập nhật/ thay đổi thông tin của mình?',
          traloi: ' Chức năng này chi thực hiện khi bạn có tài khoản trên A365, nếu chưa có bạn nên đăng ký tài khoản . Bạn cập nhật thông tin người dùng, bạn thực hiện theo các bước sau.Bước 1: Đăng nhập hệ thống. Nếu bạn đã đăng nhập thì có thể bỏ qua bước này.Bước 2: Nhấp vào ô account –“xin chào,…”, chọn cập nhật thông tin.Bước 3: Cập nhật thông tin và chọn “LƯU”.',
          checkOpen: false
        },
        {
          tencauhoi: 'Tôi muốn sửa thông tin của trẻ bằng cách nào?',
          traloi: 'Chức năng này chỉ thực hiện khi bạn có tài khoản trên A365, nếu chưa có bạn nên đăng ký tài khoản. Bạn thực hiện theo các bước sau để chỉnh sửa, cập nhận thông tin của trẻ.Bước 1: Đăng nhập hệ thống. Nếu bạn đã đăng nhập thì có thể bỏ qua bước này.Bước 2: Vào “ TRANG CỦA TÔI” bằng cách chọn trên menuBước 3: Ở mục hồ sơ trẻ, chọn xem danh sách.Bước 4: Trong “HỒ SƠ TRẺ”, trong dòng danh sách trẻ, chọn mục hành động rồi chọn “SỬA”.Bước 5: Cập nhật đầy đủ nội dung thông tin, đặc biệt là tình trạng chẩn đoán của trẻ.Bước 6. Chọn “LƯU”.',
          checkOpen: false
        },
        {
          tencauhoi: 'Làm cách nào để tôi cập nhật tình trạng chẩn đoán của trẻ?',
          traloi: 'Chức năng này chi thực hiện khi bạn có tài khoản trên A365, nếu chưa có bạn nên đăng ký tài khoản. Việc cập nhận tình trạng chẩn đoán sẽ giúp bạn tiếp cận được với các chức năng can thiệp trên A365. Bạn cập nhật tình trạng chẩn đoán của trẻ theo các bước sau.Bước 1: Đăng nhập hệ thống. Nếu bạn đã đăng nhập thì có thể bỏ qua bước này.Bước 2: Vào “TRANG CỦA TÔI” bằng cách chọn trên menuBước 3: Ở mục hồ sơ trẻ, chọn “CẬP NHẬT TÌNH TRANG CHUẨN ĐOÁN”.Bước 4: Chọn trẻ cần cập nhật và chọn tiếp tục.Bước 5: Điền đầy đủ nội dung và chọn “LƯU”',
          checkOpen: false
        },
      ],
    },
    {
      bo: 'Một số câu hỏi về sử dụng chức năng sàng lọc',
      img: "assets/icon/group.png",
      hexCode: "CssBorder2",
      ListQuest: [
        {
          tencauhoi: 'Không đăng ký tài khoản, tôi có thể thực hiện chức năng nào?',
          traloi: 'Khi không đăng ký tài khoản, nếu bạn là người chăm sóc trẻ, bạn chỉ có thể thực hiện các bài test trong phần chức năng sàng lọc/theo dõi phát triển, và truy cập kiến thức cơ bản. Bạn sẽ không thể sử dụng các chức năng về theo dõi, lưu trữ kết quả, tiếp cận các kiến thức, bài tập về dạy trẻ trên hệ thông. Kết quả bài test sẽ không được lưu trên hệ thống. Bạn phải tự lưu trữ kết quả để tiến hành so sanh trong lần sau. Khi muốn thực hiện sàng lọc, theo dõi can thiệp, bạn tiến hành như sau:Bước 1: Từ menu chọn “THEO DÕI PHÁT TRIỂN”Bước 2: Chọn đối tượng là “PHỤ HUYNH”Bước 3: chọn làm bài sàng lọc trong mục “Người dùng không đăng nhập”Bước 4: Điền thông tin và chọn bài test ASQ để theo dõi sự phát triển, test MCHAT-R để test sàng lọc nguy cơ tự kỷ.',
          checkOpen: false
        },
        {
          tencauhoi: 'Tại sao tôi đăng đăng ký trẻ nhưng khi làm bài MCHAT-R hoặc MCHAT-R/F hoặc ASQ® -3 vẫn yêu cầu tôi đăng ký trẻ mới?',
          traloi: 'A365.vn cung cấp chức năng sàng lọc với 2 bộ công cụ chính. Bộ công cụ ASQ®-3 dành cho trẻ từ 1-66 tháng để theo dõi sự phát triển của trẻ. Bộ công cụ MCHAT-R/MCHAT-R/F dành cho trẻ từ (16-30 tháng) dùng để sàng lọc nguy cơ tự kỷ của trẻ.Trong trường hợp tài khoản người dùng chỉ đăng ký 1 trẻ và trẻ đó có tuổi ngoài khoảng quy định sử dụng bộ công cụ sàng lọc thì sẽ xuất hiện tình trạng yêu cầu đăng ký thêm trẻ mới',
          checkOpen: false
        },
        {
          tencauhoi: 'Tôi đã có tài khoản, làm thế nào để tôi sử dụng chức năng theo dõi sự phát triển của trẻ?',
          traloi: 'Để theo dõi sự phát triển của trẻ, bạn cần thực hiện theo các bước sau:Bước 1: Đăng nhập hệ thống. Nếu bạn đã đăng nhập thì có thể bỏ qua bước này.Bước 2: Vào “TRANG CỦA TÔI” bằng cách chọn trên menuBước 3: Trong mục theo dõi sự phát triển chọn test ASQ®-3. Nếu bạn đăng nhập với tư cách của cán bộ y tế. Bạn có thể chọn test CDC để theo dõi dự phát triển của trẻ. Lưu ý: Bộ ASQ chỉ thực hiện khi tuổi của trẻ trong khoảng 1 tháng tới 66 tháng; bộ CDC chỉ thực hiện được khi tuổi của trẻ làm trong khoảng 1 tháng tới 45 tháng. Nếu trẻ lớn hơn 45 tháng và dưới 66 tháng thì cán bộ y tế thực hiện test ASQ thay thế cho test CDC.Bước 4: Chọn trẻ cần thực hiện bài test và chọn tiếp tục để bắt đầu thực hiện bài test.',
          checkOpen: false
        },
        {
          tencauhoi: 'Tôi đã có tài khoản, làm cách nào để tôi có thể sàng lọc được nguy cơ tự kỷ của con mình?',
          traloi: 'Bước 1: Đăng nhập hệ thống. Nếu bạn đã đăng nhập thì có thể bỏ qua bước này.  Bước 2: Chọn trẻ hiển thị trên màn hình, khi hình ảnh thể hiện trẻ đổi màu thì ấn vào bài M-CHAT-R hoặc chọn vào bài sàng lọc M-CHAT-R sau đó chọn trẻ trong danh sách để làm.  Lưu ý: Bài M-CHAT-R chỉ thực hiện khi tuổi của trẻ thuộc khoảng 16-30 tháng.',
          checkOpen: false
        },
        {
          tencauhoi: 'Làm thế nào để tôi có thể xem lại kết quả những bài test mà tôi đã hoàn thành trước đây?',
          traloi: 'Chức năng này chỉ có thể thực hiện với những người dùng đã đăng ký tài khoản. Nếu chưa có tài khoản, xin mời đăng ký. Nếu đã có tài khoản thì bạn cần tiến hành các bước sau:Bước 1: Đăng nhập hệ thống. Nếu bạn đã đăng nhập thì có thể bỏ qua bước này. Bước 2: Vào “TRANG CỦA TÔI” bằng cách chọn trên menuBước 3: Trong mục xem lịch sử bài làm chọn test tương ứng (ASQ, MCHAT-R hoặc MCHAT-R/F), ATEC, CDC)Bước 4: Dựa vào thời gian làm bài và tên trẻ lựa chọn kết quả đã thực hiện trước đây.Bước 5: Chọn “XEM KẾT QUẢ” nếu test đã hoàn thành, nếu test chưa hoàn thành mình có thể làm tiếp.',
          checkOpen: false
        },
      ],
    },
    {
      bo: 'Một số câu hỏi về sử dụng chức năng can thiệp',
      img: "assets/icon/team.png",
      hexCode: "CssBorder3",
      ListQuest: [
        {
          tencauhoi: 'Tôi muốn đánh giá sự tiến bộ của trẻ thì tôi làm thế nào?',
          traloi: 'Bộ câu hỏi ATEC (bảng kiểm đánh giá can thiệp rối loạn phổ tự kỷ) gồm 77 câu hỏi chia làm 4 lĩnh vực:-        Lời nói/ngôn ngữ/giao tiếp-        Kỹ năng xã hội-        Nhận thức-        Sức khỏe/thể chất/hành viATEC giúp đánh giá sự tiến bộ của trẻ trong quá trình can thiệp. Bạn cần thực hiện bài ATEC trước để lấy thông tin về tình trạng của trẻ tại thời điểm này để so sánh. Sau một thời gian khoảng 3 tháng, bạn làm lại bài ATEC một lần nữa. Kết quả bài ATEC lần sau sẽ được so sánh với kết quả bài lần trước. Nếu điểm ATEC sau thấp hơn điểm ATEC trước thì chứng tỏ trẻ đang có sự cải thiện. Các bước để thực hiện bài ATEC như sau:Bước 1: Đăng nhập hệ thống. Nếu bạn đã đăng nhập thì có thể bỏ qua bước này. Bước 2: Vào “TRANG CỦA TÔI” bằng cách chọn trên menuBước 3: Trong mục hướng dẫn can thiệp chọn “ĐÁNH GIÁ SỰ TIẾN BỘ CỦA TRẺ”. . Chọn “LÀM BÀI ATEC”Bước 4: Thực hiện bài test ATECBước 5: Tiến hành xem lịch sử test ATEC đã thực hiện trước đó để tiến hành so sánh kết quả. Bạn Thực hiện bằng cách tại “TRANG CỦA TÔI” chọn “LỊCH SỬ BÀI LÀM”, chọn “XEM LỊCH SỬ BÀI ATEC” sau đó chọn bài để so sánh',
          checkOpen: false
        },
        {
          tencauhoi: 'Làm thế nào để tôi có thể xem được các bài trong mục "HƯỚNG DẪN CAN THIỆP"?',
          traloi: 'Để xem được các video mẫu, các bài viết trong phần "HƯỚNG DẪN CAN THIỆP", bạn cần phải đăng ký trẻ.Bước 1: Đăng nhập tài khoản trên A365. Nếu bạn đã đăng ký tài khoản thì cần đăng nhập tài khảonBước 2: Tại “TRANG CỦA TÔI”, chọn mục “HỒ SƠ TRẺ”. Chọn mục “Đăng ký trẻ mới” trong mục “HỒ SƠ TRẺ” và điền các thông tin của con như họ tên, ngày tháng năm sinh ..., sau đó ấn “LƯU”. Nếu bạn đã đăng ký trẻ thì có thể bỏ qua bước này.Bước 4: Để xem được các nội dung can thiệp, bạn cần cập nhật tình trạng chẩn đoán của trẻ bằng cách: Quay lại mục “HỒ SƠ TRẺ” và chọn mục “Cập nhật tình trạng chẩn đoán”, sau đó ấn “LƯU” . Bạn chỉ cần cập nhật tình trạng chẩn đoán của trẻ 1 lần.Bước 5: Chọn “HƯỚNG DẪN CAN THIỆP” và xem các nội dung',
          checkOpen: false
        },
        {
          tencauhoi: 'Bạn chưa biết nâng cao/dạy trẻ kỹ năng nào?',
          traloi: 'Bạn có thể tìm bài hướng dẫn tương ứng trong phần can thiệp trong A365. Hoặc tham gia vào group NHÓM CHA MẸ SỬ DỤNG A365 để được các chuyên gia hỗ trợ, hướng dẫn chi tiết.',
          checkOpen: false
        },
        {
          tencauhoi: 'Gặp khó khăn trong quá trình đăng ký, đăng nhập, sử dụng chức năng trên A365?',
          traloi: 'Liên hệ hỗ trợ kỹ thuật:0344365229 hoăc 0346 757 440 (8h00 - 17.00 | Thứ 2- Thứ 6)Email: support.a365@ccihp.org',
          checkOpen: false
        },
      ],
    }
  ]
  Listicon = [{
    imge: ('../assets/imgs/searchbook.png'),
  },
  {
    imge: ('../assets/imgs/person.png'),
  },
  {
    imge: ('../assets/imgs/key.png'),
  },
  {
    imge: ('../assets/imgs/plus.png'),
  }



  ]
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
    // this.service.Page = "";
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
  listcauhoi(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: data
    };
    this.router.navigate(['/bocauhoi'], navigationExtras);
  }
}
