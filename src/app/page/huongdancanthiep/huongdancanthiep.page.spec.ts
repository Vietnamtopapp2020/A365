import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuongdancanthiepPage } from './huongdancanthiep.page';

describe('HuongdancanthiepPage', () => {
  let component: HuongdancanthiepPage;
  let fixture: ComponentFixture<HuongdancanthiepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuongdancanthiepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuongdancanthiepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
