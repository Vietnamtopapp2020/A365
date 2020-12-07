import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsqtestPage } from './asqtest.page';

describe('AsqtestPage', () => {
  let component: AsqtestPage;
  let fixture: ComponentFixture<AsqtestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsqtestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsqtestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
