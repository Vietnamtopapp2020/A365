import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CauhoithuonggapPage } from './cauhoithuonggap.page';

describe('CauhoithuonggapPage', () => {
  let component: CauhoithuonggapPage;
  let fixture: ComponentFixture<CauhoithuonggapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauhoithuonggapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CauhoithuonggapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
