import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KetquamchatrPage } from './ketquamchatr.page';

describe('KetquamchatrPage', () => {
  let component: KetquamchatrPage;
  let fixture: ComponentFixture<KetquamchatrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetquamchatrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KetquamchatrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
