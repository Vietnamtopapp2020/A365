import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuongdansudungPage } from './huongdansudung.page';

describe('HuongdansudungPage', () => {
  let component: HuongdansudungPage;
  let fixture: ComponentFixture<HuongdansudungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuongdansudungPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuongdansudungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
