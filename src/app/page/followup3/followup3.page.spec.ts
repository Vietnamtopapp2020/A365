import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup3Page } from './followup3.page';

describe('Followup3Page', () => {
  let component: Followup3Page;
  let fixture: ComponentFixture<Followup3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
