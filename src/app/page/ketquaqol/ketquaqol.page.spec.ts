import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KetquaqolPage } from './ketquaqol.page';

describe('KetquaqolPage', () => {
  let component: KetquaqolPage;
  let fixture: ComponentFixture<KetquaqolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetquaqolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KetquaqolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
