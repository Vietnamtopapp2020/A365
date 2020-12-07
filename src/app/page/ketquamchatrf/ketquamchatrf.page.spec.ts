import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KetquamchatrfPage } from './ketquamchatrf.page';

describe('KetquamchatrfPage', () => {
  let component: KetquamchatrfPage;
  let fixture: ComponentFixture<KetquamchatrfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetquamchatrfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KetquamchatrfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
