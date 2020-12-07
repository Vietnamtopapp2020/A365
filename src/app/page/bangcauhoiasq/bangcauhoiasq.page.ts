import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ServiceService } from 'src/app/providers/service.service';
@Component({
  selector: 'app-bangcauhoiasq',
  templateUrl: './bangcauhoiasq.page.html',
  styleUrls: ['./bangcauhoiasq.page.scss'],
})
export class BangcauhoiasqPage implements OnInit {

  constructor(
    private router: Router,
    public service : ServiceService
    ) {  this.service.Page = "";
 }

  ngOnInit() {
  }
  backpage(){
    this.router.navigate(['/ketquaasq'])
  }
}
