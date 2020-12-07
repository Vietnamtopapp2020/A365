import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup8Page } from './followup8.page';

describe('Followup8Page', () => {
  let component: Followup8Page;
  let fixture: ComponentFixture<Followup8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
