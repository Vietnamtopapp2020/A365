import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'
import { ServiceService } from 'src/app/providers/service.service';
@Component({
  selector: 'app-danhgiahieuqua',
  templateUrl: './danhgiahieuqua.page.html',
  styleUrls: ['./danhgiahieuqua.page.scss'],
})
export class DanhgiahieuquaPage implements OnInit {
  data: any
  constructor(
    public router: Router,
    public service: ServiceService
  ) {
    this.service.Page = "";

    this.data = this.router.getCurrentNavigation().extras.queryParams;
  }

  ngOnInit() {
  }
  backpage() {
    this.router.navigate(['/nhatkycanthiep']);
  }
  Atectes() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: this.data.id,
      }
    }
    this.router.navigate(['/atecview'], navigationExtras);
  };
}
