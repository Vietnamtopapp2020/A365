import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsqtestGuestPage } from './asqtest-guest.page';

describe('AsqtestGuestPage', () => {
  let component: AsqtestGuestPage;
  let fixture: ComponentFixture<AsqtestGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsqtestGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsqtestGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
