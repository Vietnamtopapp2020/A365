import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BocauhoiPage } from './bocauhoi.page';

describe('BocauhoiPage', () => {
  let component: BocauhoiPage;
  let fixture: ComponentFixture<BocauhoiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BocauhoiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BocauhoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
