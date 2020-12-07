import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BangcauhoiasqPage } from './bangcauhoiasq.page';

describe('BangcauhoiasqPage', () => {
  let component: BangcauhoiasqPage;
  let fixture: ComponentFixture<BangcauhoiasqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangcauhoiasqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BangcauhoiasqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
