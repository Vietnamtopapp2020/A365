import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KetquaasqPage } from './ketquaasq.page';

describe('KetquaasqPage', () => {
  let component: KetquaasqPage;
  let fixture: ComponentFixture<KetquaasqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetquaasqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KetquaasqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
