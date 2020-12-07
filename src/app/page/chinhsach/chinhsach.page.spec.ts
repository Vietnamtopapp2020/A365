import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChinhsachPage } from './chinhsach.page';

describe('ChinhsachPage', () => {
  let component: ChinhsachPage;
  let fixture: ComponentFixture<ChinhsachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinhsachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChinhsachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
