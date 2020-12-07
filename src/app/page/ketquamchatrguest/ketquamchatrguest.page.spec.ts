import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KetquamchatrguestPage } from './ketquamchatrguest.page';

describe('KetquamchatrguestPage', () => {
  let component: KetquamchatrguestPage;
  let fixture: ComponentFixture<KetquamchatrguestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetquamchatrguestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KetquamchatrguestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
