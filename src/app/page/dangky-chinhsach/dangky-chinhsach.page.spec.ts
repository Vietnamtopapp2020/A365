import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DangkyChinhsachPage } from './dangky-chinhsach.page';

describe('DangkyChinhsachPage', () => {
  let component: DangkyChinhsachPage;
  let fixture: ComponentFixture<DangkyChinhsachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangkyChinhsachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DangkyChinhsachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
