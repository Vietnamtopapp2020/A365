import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup20Page } from './followup20.page';

describe('Followup20Page', () => {
  let component: Followup20Page;
  let fixture: ComponentFixture<Followup20Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup20Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
