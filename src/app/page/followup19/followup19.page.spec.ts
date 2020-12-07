import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup19Page } from './followup19.page';

describe('Followup19Page', () => {
  let component: Followup19Page;
  let fixture: ComponentFixture<Followup19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup19Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
