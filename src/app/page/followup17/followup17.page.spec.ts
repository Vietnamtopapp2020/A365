import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup17Page } from './followup17.page';

describe('Followup17Page', () => {
  let component: Followup17Page;
  let fixture: ComponentFixture<Followup17Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup17Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
