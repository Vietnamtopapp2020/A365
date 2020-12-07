import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KetquaviewasqPage } from './ketquaviewasq.page';

describe('KetquaviewasqPage', () => {
  let component: KetquaviewasqPage;
  let fixture: ComponentFixture<KetquaviewasqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetquaviewasqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KetquaviewasqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
