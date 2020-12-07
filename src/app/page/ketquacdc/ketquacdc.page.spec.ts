import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KetquacdcPage } from './ketquacdc.page';

describe('KetquacdcPage', () => {
  let component: KetquacdcPage;
  let fixture: ComponentFixture<KetquacdcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetquacdcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KetquacdcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
