import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KetquaasqguestPage } from './ketquaasqguest.page';

describe('KetquaasqguestPage', () => {
  let component: KetquaasqguestPage;
  let fixture: ComponentFixture<KetquaasqguestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetquaasqguestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KetquaasqguestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
