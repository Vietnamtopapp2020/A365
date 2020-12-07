import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup4Page } from './followup4.page';

describe('Followup4Page', () => {
  let component: Followup4Page;
  let fixture: ComponentFixture<Followup4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
