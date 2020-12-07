import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ServiceService } from 'src/app/providers/service.service';
import { NavController } from '@ionic/angular';
import { ToastServiceService } from 'src/app/providers/toast-service.service';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-kienthucchude',
  templateUrl: './kienthucchude.page.html',
  styleUrls: ['./kienthucchude.page.scss'],
})
export class KienthucchudePage implements OnInit {
  data = null;
  listchude = [];
  index = 0;
  listPostschildren = [];
  constructor(
    private service: ServiceService,
    private router: Router,
    public navCtr: NavController,
    public toast: ToastServiceService,
    public netWork: Network

  ) {
    this.service.Page = "";
    this.data = this.router.getCurrentNavigation().extras.queryParams;

  }
  ngOnInit() {
    this.Getdetail();
  }
  getListPost() {
    setTimeout(() => {
      if (this.index < this.listchude.length) {
        this.service.Getchildren(this.service.getHost() + 'knowledge/posts/search?topic=' + this.listchude[this.index].id + '&take=20&').subscribe(rs => {
          var result = rs.json();
          this.listPostschildren.push({
            children: this.listchude[this.index].children,
            createdAt: this.listchude[this.index].createdAt,
            description: this.listchude[this.index].description,
            hexCode: this.listchude[this.index].hexCode,
            id: this.listchude[this.index].id,
            key: this.listchude[this.index].key,
            order: this.listchude[this.index].order,
            parent: this.listchude[this.index].parent,
            slug: this.listchude[this.index].slug,
            title: this.listchude[this.index].title,
            updatedAt: this.listchude[this.index].updatedAt,
            listPosts: result.items,
            checkViewPost: false,
          });
          this.listPostschildren.sort();
          this.index = this.index + 1;
          this.getListPost();
        });
     
      }
    }, 200);

  }
  Getdetail() {
    if (this.netWork.type.toUpperCase() != "NONE") {
      this.service.Getchildren(this.service.getHost() + 'knowledge/topics/' + this.data.slug).subscribe(rs => {
        var result = rs.json();
        this.listchude = result.children;
        this.getListPost();
      });
    } else {
      if (this.service.CheckLoading) {
        this.service.CheckLoading = false;
        this.toast.DismissToast();
      };
      this.service.message("Vui lòng kiểm tra đường truyền internet!");
    }
  }
  backpage() {
    this.navCtr.pop();
  }
  public getSafehtml(html: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html
    return txt.value;
  }
  ViewListPost(Postschildren) {
    Postschildren.checkViewPost = !Postschildren.checkViewPost;
  }
  getdetailPost(data) {
    this.service.GetanswersheetsMchartR(this.service.getHost() + "knowledge/posts/getByIdOrSlug?idOrSlug=" + data.slug).subscribe(rs => {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          list: data,
          conten: this.getSafehtml(data.content)
        }
      };
      this.router.navigate(['/postdetailkienthuc'], navigationExtras);
    }, error => {
    })

  }
}