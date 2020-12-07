import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuongdancanthiepBaivietPage } from './huongdancanthiep-baiviet.page';

describe('HuongdancanthiepBaivietPage', () => {
  let component: HuongdancanthiepBaivietPage;
  let fixture: ComponentFixture<HuongdancanthiepBaivietPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuongdancanthiepBaivietPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuongdancanthiepBaivietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
