import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  // {
  //   path: 'forgot-pass',
  //   loadChildren: () => import('./page/forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule)
  // },
  {
    path: 'language',
    loadChildren: () => import('./page/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'dangki',
    loadChildren: () => import('./page/dangki/dangki.module').then( m => m.DangkiPageModule)
  },
  {
    path: 'mchar-r',
    loadChildren: () => import('./page/mchar-r/mchar-r.module').then( m => m.McharRPageModule)
  },
  {
    path: 'qol',
    loadChildren: () => import('./page/qol/qol.module').then( m => m.QolPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./page/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'listchildren',
    loadChildren: () => import('./page/listchildren/listchildren.module').then( m => m.ListchildrenPageModule)
  },
 
  {
    path: 'createchildren',
    loadChildren: () => import('./page/createchildren/createchildren.module').then( m => m.CreatechildrenPageModule)
  },
  {
    path: 'cdc',
    loadChildren: () => import('./page/cdc/cdc.module').then( m => m.CdcPageModule)
  },
  {
    path: 'listchildren-qol',
    loadChildren: () => import('./page/listchildren-qol/listchildren-qol.module').then( m => m.ListchildrenQOLPageModule)
  },
  {
    path: 'listchildren-cdc',
    loadChildren: () => import('./page/listchildren-cdc/listchildren-cdc.module').then( m => m.ListchildrenCDCPageModule)
  },
  {
    path: 'historymchartr',
    loadChildren: () => import('./page/historymchartr/historymchartr.module').then( m => m.HistorymchartrPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./page/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'updatechildren',
    loadChildren: () => import('./page/updatechildren/updatechildren.module').then( m => m.UpdatechildrenPageModule)
  },
  {
    path: 'danhsachtre',
    loadChildren: () => import('./page/danhsachtre/danhsachtre.module').then( m => m.DanhsachtrePageModule)
  },
  {
    path: 'list-childen-atec',
    loadChildren: () => import('./page/list-childen-atec/list-childen-atec.module').then( m => m.ListChildenAtecPageModule)
  },
  {
    path: 'list-children-asq',
    loadChildren: () => import('./page/list-children-asq/list-children-asq.module').then( m => m.ListChildrenAsqPageModule)
  },
  {
    path: 'atecview',
    loadChildren: () => import('./page/atecview/atecview.module').then( m => m.AtecviewPageModule)
  },
  {
    path: 'asqtest',
    loadChildren: () => import('./page/asqtest/asqtest.module').then( m => m.AsqtestPageModule)
  },
 
  {
    path: 'mchatr-f',
    loadChildren: () => import('./page/mchatr-f/mchatr-f.module').then( m => m.MchatrFPageModule)
  },
  {
    path: 'listchildrenmchatrf',
    loadChildren: () => import('./page/listchildrenmchatrf/listchildrenmchatrf.module').then( m => m.ListchildrenmchatrfPageModule)
  },
  {
    path: 'cauhoithuonggap',
    loadChildren: () => import('./page/cauhoithuonggap/cauhoithuonggap.module').then( m => m.CauhoithuonggapPageModule)
  },
  {
    path: 'bocauhoi',
    loadChildren: () => import('./page/bocauhoi/bocauhoi.module').then( m => m.BocauhoiPageModule)
  },
  {
    path: 'chinhsach',
    loadChildren: () => import('./page/chinhsach/chinhsach.module').then( m => m.ChinhsachPageModule)
  },
  {
    path: 'huongdansudung',
    loadChildren: () => import('./page/huongdansudung/huongdansudung.module').then( m => m.HuongdansudungPageModule)
  },
  {
    path: 'termconditions',
    loadChildren: () => import('./page/termconditions/termconditions.module').then( m => m.TermconditionsPageModule)
  },
  {
    path: 'video-reference',
    loadChildren: () => import('./page/video-reference/video-reference.module').then( m => m.VideoReferencePageModule)
  },
  {
    path: 'kienthucchuyenmon',
    loadChildren: () => import('./page/kienthucchuyenmon/kienthucchuyenmon.module').then( m => m.KienthucchuyenmonPageModule)
  },
  {
    path: 'kienthucchude',
    loadChildren: () => import('./page/kienthucchude/kienthucchude.module').then( m => m.KienthucchudePageModule)
  },
  {
    path: 'listhistory-asq',
    loadChildren: () => import('./page/listhistory-asq/listhistory-asq.module').then( m => m.ListhistoryASQPageModule)
  },
  {
    path: 'listhistory-cdc',
    loadChildren: () => import('./page/listhistory-cdc/listhistory-cdc.module').then( m => m.ListhistoryCDCPageModule)
  },
  {
    path: 'listhistory-mchat-r',
    loadChildren: () => import('./page/listhistory-mchat-r/listhistory-mchat-r.module').then( m => m.ListhistoryMchatRPageModule)
  },
  {
    path: 'listhistory-mchat-rf',
    loadChildren: () => import('./page/listhistory-mchat-rf/listhistory-mchat-rf.module').then( m => m.ListhistoryMchatRFPageModule)
  },
  {
    path: 'listhistory-atec',
    loadChildren: () => import('./page/listhistory-atec/listhistory-atec.module').then( m => m.ListhistoryATECPageModule)
  },
  {
    path: 'listhistory-qol',
    loadChildren: () => import('./page/listhistory-qol/listhistory-qol.module').then( m => m.ListhistoryQOLPageModule)
  },
  {
    path: 'update-asq',
    loadChildren: () => import('./page/update-asq/update-asq.module').then( m => m.UpdateASQPageModule)
  },
  {
    path: 'update-cdc',
    loadChildren: () => import('./page/update-cdc/update-cdc.module').then( m => m.UpdateCDCPageModule)
  },
  {
    path: 'update-mchat-r',
    loadChildren: () => import('./page/update-mchat-r/update-mchat-r.module').then( m => m.UpdateMchatRPageModule)
  },
  {
    path: 'update-mchat-rf',
    loadChildren: () => import('./page/update-mchat-rf/update-mchat-rf.module').then( m => m.UpdateMchatRFPageModule)
  },
  {
    path: 'update-qol',
    loadChildren: () => import('./page/update-qol/update-qol.module').then( m => m.UpdateQOLPageModule)
  },
  {
    path: 'update-atec',
    loadChildren: () => import('./page/update-atec/update-atec.module').then( m => m.UpdateATECPageModule)
  },
  {
    path: 'nhatkycanthiep',
    loadChildren: () => import('./page/nhatkycanthiep/nhatkycanthiep.module').then( m => m.NhatkycanthiepPageModule)
  },
  {
    path: 'createchildrenguest',
    loadChildren: () => import('./page/createchildrenguest/createchildrenguest.module').then( m => m.CreatechildrenguestPageModule)
  },
  {
    path: 'createchildrenguestmchatr',
    loadChildren: () => import('./page/createchildrenguestmchatr/createchildrenguestmchatr.module').then( m => m.CreatechildrenguestmchatrPageModule)
  },
  {
    path: 'doashboadparent',
    loadChildren: () => import('./page/doashboadparent/doashboadparent.module').then( m => m.DoashboadparentPageModule)
  },
  {
    path: 'dashboadteacher',
    loadChildren: () => import('./page/dashboadteacher/dashboadteacher.module').then( m => m.DashboadteacherPageModule)
  },
  {
    path: 'asqtest-guest',
    loadChildren: () => import('./page/asqtest-guest/asqtest-guest.module').then( m => m.AsqtestGuestPageModule)
  },
  {
    path: 'mchatrguest',
    loadChildren: () => import('./page/mchatrguest/mchatrguest.module').then( m => m.MchatrguestPageModule)
  },
  {
    path: 'profile-answesguest',
    loadChildren: () => import('./page/profile-answesguest/profile-answesguest.module').then( m => m.ProfileAnswesguestPageModule)
  },
  {
    path: 'ketquaviewasq',
    loadChildren: () => import('./page/ketquaviewasq/ketquaviewasq.module').then( m => m.KetquaviewasqPageModule)
  },
  {
    path: 'administrative-regions',
    loadChildren: () => import('./page/administrative-regions/administrative-regions.module').then( m => m.AdministrativeRegionsPageModule)
  },
  {
    path: 'ketquacdc',
    loadChildren: () => import('./page/ketquacdc/ketquacdc.module').then( m => m.KetquacdcPageModule)
  },
  {
    path: 'ketquamchatr',
    loadChildren: () => import('./page/ketquamchatr/ketquamchatr.module').then( m => m.KetquamchatrPageModule)
  },
  {
    path: 'ketquamchatrf',
    loadChildren: () => import('./page/ketquamchatrf/ketquamchatrf.module').then( m => m.KetquamchatrfPageModule)
  },
  {
    path: 'ketquaqol',
    loadChildren: () => import('./page/ketquaqol/ketquaqol.module').then( m => m.KetquaqolPageModule)
  },
  {
    path: 'ketqua-atec',
    loadChildren: () => import('./page/ketqua-atec/ketqua-atec.module').then( m => m.KetquaATECPageModule)
  },
  {
    path: 'administrative-regions-asq',
    loadChildren: () => import('./page/administrative-regions-asq/administrative-regions-asq.module').then( m => m.AdministrativeRegionsASQPageModule)
  },
  {
    path: 'administrative-regions-mchatrf',
    loadChildren: () => import('./page/administrative-regions-mchatrf/administrative-regions-mchatrf.module').then( m => m.AdministrativeRegionsMCHATRFPageModule)
  },
  {
    path: 'ketquaasq',
    loadChildren: () => import('./page/ketquaasq/ketquaasq.module').then( m => m.KetquaasqPageModule)
  },
  {
    path: 'ketquaasqguest',
    loadChildren: () => import('./page/ketquaasqguest/ketquaasqguest.module').then( m => m.KetquaasqguestPageModule)
  },
  {
    path: 'updatestatuschildrent',
    loadChildren: () => import('./page/updatestatuschildrent/updatestatuschildrent.module').then( m => m.UpdatestatuschildrentPageModule)
  },
  {
    path: 'change-passwod',
    loadChildren: () => import('./page/change-passwod/change-passwod.module').then( m => m.ChangePasswodPageModule)
  },
  {
    path: 'viewpost-intervention-data',
    loadChildren: () => import('./page/viewpost-intervention-data/viewpost-intervention-data.module').then( m => m.ViewpostInterventionDataPageModule)
  },
  {
    path: 'postdetailkienthuc',
    loadChildren: () => import('./page/postdetailkienthuc/postdetailkienthuc.module').then( m => m.PostdetailkienthucPageModule)
  },
  {
    path: 'profileanswesguestmchatr',
    loadChildren: () => import('./page/profileanswesguestmchatr/profileanswesguestmchatr.module').then( m => m.ProfileanswesguestmchatrPageModule)
  },
  {
    path: 'ketquamchatrguest',
    loadChildren: () => import('./page/ketquamchatrguest/ketquamchatrguest.module').then( m => m.KetquamchatrguestPageModule)
  },
  {
    path: 'updateprofile',
    loadChildren: () => import('./page/updateprofile/updateprofile.module').then( m => m.UpdateprofilePageModule)
  },
  {
    path: 'bangcauhoiasq',
    loadChildren: () => import('./page/bangcauhoiasq/bangcauhoiasq.module').then( m => m.BangcauhoiasqPageModule)
  },
  {
    path: 'profileuser',
    loadChildren: () => import('./page/profileuser/profileuser.module').then( m => m.ProfileuserPageModule)
  },
  {
    path: 'danhgiahieuqua',
    loadChildren: () => import('./page/danhgiahieuqua/danhgiahieuqua.module').then( m => m.DanhgiahieuquaPageModule)
  },
  {
    path: 'update-cdc-view',
    loadChildren: () => import('./page/update-cdc-view/update-cdc-view.module').then( m => m.UpdateCdcViewPageModule)
  },
  {
    path: 'update-mchat-rf-view',
    loadChildren: () => import('./page/update-mchat-rf-view/update-mchat-rf-view.module').then( m => m.UpdateMchatRfViewPageModule)
  },
  {
    path: 'update-mchat-rview',
    loadChildren: () => import('./page/update-mchat-rview/update-mchat-rview.module').then( m => m.UpdateMchatRViewPageModule)
  },
  {
    path: 'update-mchat-rview-guest',
    loadChildren: () => import('./page/update-mchat-rview-guest/update-mchat-rview-guest.module').then( m => m.UpdateMchatRViewGuestPageModule)
  },
  {
    path: 'update-qol-view',
    loadChildren: () => import('./page/update-qol-view/update-qol-view.module').then( m => m.UpdateQolViewPageModule)
  },
  {
    path: 'update-atec-view',
    loadChildren: () => import('./page/update-atec-view/update-atec-view.module').then( m => m.UpdateAtecViewPageModule)
  },
  {
    path: 'dangky-chinhsach',
    loadChildren: () => import('./page/dangky-chinhsach/dangky-chinhsach.module').then( m => m.DangkyChinhsachPageModule)
  },
  {
    path: 'message-modal',
    loadChildren: () => import('./page/message-modal/message-modal.module').then( m => m.MessageModalPageModule)
  },
  {
    path: 'forgot-pass',
    loadChildren: () => import('./page/forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule)
  },
  {
    path: 'nhatkycanthiep-hoatdong',
    loadChildren: () => import('./page/nhatkycanthiep-hoatdong/nhatkycanthiep-hoatdong.module').then( m => m.NhatkycanthiepHoatdongPageModule)
  },
  {
    path: 'nhatkycanthiep-danhgia',
    loadChildren: () => import('./page/nhatkycanthiep-danhgia/nhatkycanthiep-danhgia.module').then( m => m.NhatkycanthiepDanhgiaPageModule)
  },
  {
    path: 'video-view',
    loadChildren: () => import('./page/video-view/video-view.module').then( m => m.VideoViewPageModule)
  },
  {
    path: 'followup1',
    loadChildren: () => import('./page/followup1/followup1.module').then( m => m.Followup1PageModule)
  },
  {
    path: 'followup2',
    loadChildren: () => import('./page/followup2/followup2.module').then( m => m.Followup2PageModule)
  },
  {
    path: 'followup3',
    loadChildren: () => import('./page/followup3/followup3.module').then( m => m.Followup3PageModule)
  },
  {
    path: 'followup4',
    loadChildren: () => import('./page/followup4/followup4.module').then( m => m.Followup4PageModule)
  },
  {
    path: 'followup5',
    loadChildren: () => import('./page/followup5/followup5.module').then( m => m.Followup5PageModule)
  },
  {
    path: 'followup6',
    loadChildren: () => import('./page/followup6/followup6.module').then( m => m.Followup6PageModule)
  },
  {
    path: 'followup7',
    loadChildren: () => import('./page/followup7/followup7.module').then( m => m.Followup7PageModule)
  },
  {
    path: 'followup8',
    loadChildren: () => import('./page/followup8/followup8.module').then( m => m.Followup8PageModule)
  },
  {
    path: 'followup9',
    loadChildren: () => import('./page/followup9/followup9.module').then( m => m.Followup9PageModule)
  },
  {
    path: 'followup10',
    loadChildren: () => import('./page/followup10/followup10.module').then( m => m.Followup10PageModule)
  },
  {
    path: 'followup11',
    loadChildren: () => import('./page/followup11/followup11.module').then( m => m.Followup11PageModule)
  },
  {
    path: 'followup12',
    loadChildren: () => import('./page/followup12/followup12.module').then( m => m.Followup12PageModule)
  },
  {
    path: 'followup13',
    loadChildren: () => import('./page/followup13/followup13.module').then( m => m.Followup13PageModule)
  },
  {
    path: 'followup14',
    loadChildren: () => import('./page/followup14/followup14.module').then( m => m.Followup14PageModule)
  },
  {
    path: 'followup15',
    loadChildren: () => import('./page/followup15/followup15.module').then( m => m.Followup15PageModule)
  },
  {
    path: 'followup16',
    loadChildren: () => import('./page/followup16/followup16.module').then( m => m.Followup16PageModule)
  },
  {
    path: 'followup17',
    loadChildren: () => import('./page/followup17/followup17.module').then( m => m.Followup17PageModule)
  },
  {
    path: 'followup18',
    loadChildren: () => import('./page/followup18/followup18.module').then( m => m.Followup18PageModule)
  },
  {
    path: 'followup19',
    loadChildren: () => import('./page/followup19/followup19.module').then( m => m.Followup19PageModule)
  },
  {
    path: 'followup20',
    loadChildren: () => import('./page/followup20/followup20.module').then( m => m.Followup20PageModule)
  },
  {
    path: 'introduce',
    loadChildren: () => import('./page/introduce/introduce.module').then( m => m.IntroducePageModule)
  },
  {
    path: 'list-healthfaciliti',
    loadChildren: () => import('./page/list-healthfaciliti/list-healthfaciliti.module').then( m => m.ListHealthfacilitiPageModule)
  },
  {
    path: 'huongdancanthiep',
    loadChildren: () => import('./page/huongdancanthiep/huongdancanthiep.module').then( m => m.HuongdancanthiepPageModule)
  },
  {
    path: 'huongdancanthiep-detail',
    loadChildren: () => import('./page/huongdancanthiep-detail/huongdancanthiep-detail.module').then( m => m.HuongdancanthiepDetailPageModule)
  },
  {
    path: 'huongdancanthiep-baiviet',
    loadChildren: () => import('./page/huongdancanthiep-baiviet/huongdancanthiep-baiviet.module').then( m => m.HuongdancanthiepBaivietPageModule)
  },
  {
    path: 'trangcuatoi',
    loadChildren: () => import('./page/trangcuatoi/trangcuatoi.module').then( m => m.TrangcuatoiPageModule)
  },
  {
    path: 'trangchu',
    loadChildren: () => import('./page/trangchu/trangchu.module').then( m => m.TrangchuPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./page/news/news.module').then( m => m.NewsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
