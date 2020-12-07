import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuongdancanthiepDetailPage } from './huongdancanthiep-detail.page';

describe('HuongdancanthiepDetailPage', () => {
  let component: HuongdancanthiepDetailPage;
  let fixture: ComponentFixture<HuongdancanthiepDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuongdancanthiepDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuongdancanthiepDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
