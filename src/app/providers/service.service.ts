import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastServiceService } from './toast-service.service';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Network } from '@ionic-native/network/ngx';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  showList = false;
  MenuApp: any;
  userName: string;
  checkModal: boolean;
  flagSet: number = 0;
  setTake: number;
  setApi: boolean;
  tokenDeceive: string;
  displayName: any;
  Host: any = "https://stage.api.a365.vn/";
  id: any;
  Email: any;
  phone: any;
  img: any;
  TypeStaff: any;
  Password: any;
  txtPinCode: string = null;
  checkpass: boolean;
  language: string = "vi";
  Role: number;
  stopIntervalGps: any;
  Gender: any;
  ShiftCode: any;
  listPage = [];
  profile: any;
  /////
  menuLinks = [
    { component: "/trangchu", name: " Trang chủ", uri: 'assets/icon/11.png', id: 3 },
    { component: "/danhsachtre", name: "Hồ sơ trẻ", uri: 'assets/icon/29.png', id: 4 },
  ];
  menuLinksTrangchu = [
    { component: "/trangcuatoi", name: " Trang của tôi", uri: 'assets/icon/11.png', id: 3 },
    { component: "/danhsachtre", name: "Hồ sơ trẻ", uri: 'assets/icon/29.png', id: 4 },
  ];
  uuid: any;
  listFileShare = [];
  tokenId = "";
  address: any;
  area: any;
  areaOrder: any;
  birthYear: any;
  createdAt: any;
  district: any;
  email: any;
  ethnic: any;
  gender: any;
  isDeleted: any;
  job: any;
  name: any;
  phoneNumber: any;
  pid: any;
  referSource: any;
  updatedAt: any;
  user: any;
  ward: any;
  workplace: any;
  Page: string;
  //cau hoi follow
  ListFollowup = [];
  countFollowp: number;
  BackDataFollow = null;
  PlatFormData = null;
  ////
  CheckLoading = false;
  backPage = "";
  /////
  total = 0;
  ApiDeleteTest = "";
  PostTestId = "";
  PackRoot = "";
  constructor(public http: Http,
    public nativeStorage: NativeStorage,
    public modalCtrl: ModalController,
    public toast: ToastServiceService,
    public router: Router,
    public netWork: Network
  ) {
  }
  changeSet() {
    this.flagSet = 1;
  }

  getHost() {
    return this.Host;
  }
  postDeleteTokenId(url, body) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var result = this.http.post(url, body, { headers: headers });
    return result

  }
  postPushNotification(url) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.tokenId);
    var result = this.http.get(url, { headers: headers });
    return result;
  }

  getAPINoJson(url) {
    var response = this.http.get(url);
    return response;
  }
  getDataNativeStore(msg) {
    var data = this.nativeStorage.getItem(msg)
    return data;
  }
  setDataNativeStore(msg) {
    var data = this.nativeStorage.setItem(msg, {})
    return data;
  }
  removeDataNativeStore(msg) {
    console.log('msg :' + msg)
    var data = this.nativeStorage.remove(msg)
    return data;
  }
  GetAPI(url) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var result = this.http.get(url, { headers: headers });
    return result;
  }
  postAPILogin(url, body) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var result = this.http.post(url, body, { headers: headers });
    return result;
  }
  postAPILogin1(url, body) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    var result = this.http.post(url, body, { headers: headers });
    return result;
  }
  postAPIregister(url, body) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    var result = this.http.post(url, body, { headers: headers });
    return result;
  }
  postGet(url) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.tokenId)
    var result = this.http.get(url, { headers: headers });
    return result;
  }
  postAPI(url, body) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Bearer ' + this.tokenId)
    var result = this.http.post(url, body, { headers: headers });
    return result;
  }
  PutAPImachartRsatus(url, body) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.tokenId)
    var result = this.http.put(url, body, { headers: headers });
    return result;
  }
  PutAPI(url, body) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Bearer ' + this.tokenId)
    var result = this.http.put(url, body, { headers: headers });
    return result;
  }

  PutAPIcr(url) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Bearer ' + this.tokenId)
    var result = this.http.put(url, { headers: headers });
    return result;
  }


  //[ ******************** MachartR******************* ]
  // service put API answersheetmchartR
  PutAPIanswersheetMchartR(url, body) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.tokenId);
    var result = this.http.put(url, body, { headers: headers });
    return result;
  }

  // service post API 
  postAPIquestionmchatR(url, body) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.tokenId);
    var result = this.http.post(url, body, { headers: headers });
    return result;
  }
  GetanswersheetsMchartR(url) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.tokenId)
    var result = this.http.get(url, { headers: headers });
    return result;
  }
  //[ END******************** MachartR******************* ]

  Getchildren(url) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.tokenId)
    var result = this.http.get(url, { headers: headers });
    return result;
  }
  //[ ******************** CDC******************* ]
  // service put API answersheetmchartR
  PutAPIanswersheetCDC(url, body) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.tokenId);
    var result = this.http.put(url, body, { headers: headers });
    return result;
  }
  // service post API 
  postAPIquestionCDC(url, body) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.tokenId);
    var result = this.http.post(url, body, { headers: headers });
    return result;
  }
  postAPIpw(url) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.tokenId);
    var result = this.http.post(url, { headers: headers });
    return result;
  }
  postAPIDelete(url) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.tokenId);
    var result = this.http.delete(url, { headers: headers });
    return result;
  }
  GetanswersheetsCDC(url) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.tokenId)
    var result = this.http.get(url, { headers: headers });
    return result;
  }


  GetanswersheetQOL(url) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer' + this.tokenId);
    var result = this.http.get(url, { headers: headers });
    return result;
  }
  PostanswersheetQOL(url, body) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Content-Allow-Methods', 'POST,GET,OPTIONS,PUT');
    headers.append('Access', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer' + this.tokenId);
    var result = this.http.post(url, body, { headers: headers });
    return result;
  }

  PutanswersheetQOL(url, body) {
    var headers = new Headers();
    headers.append('Accept-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
    headers.append('Access', 'application/json');
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', 'Bearer' + this.tokenId);
    var result = this.http.put(url, body, { headers: headers });
    return result;
  }
  //[ ******************** QOL******************* ]
  postAPI1(url, body) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer' + this.tokenId);
    var result = this.http.post(url, body, { headers: headers });
    return result;
  }
  putAPI1(url, body) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer' + this.tokenId);
    var result = this.http.put(url, body, { headers: headers });
    return result;
  }
  CheckInternet() {
    console.log(this.netWork.type.toUpperCase());
    if (this.netWork.type.toUpperCase() == "NONE") {
      return false;
    }
    else {
      return true;
    }
  }

  message(p) {
    this.toast.showToast(p);
  }
  messageErorr(p) {
    this.toast.showToast(p);
  }
  async openMenuPage(p) {
    this.router.navigate([p.component]);
  }
  CloseMenu() {
    this.showList = false;
  }
}