import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KetquaATECPage } from './ketqua-atec.page';

describe('KetquaATECPage', () => {
  let component: KetquaATECPage;
  let fixture: ComponentFixture<KetquaATECPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetquaATECPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KetquaATECPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
