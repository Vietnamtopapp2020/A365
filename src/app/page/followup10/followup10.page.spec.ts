import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup10Page } from './followup10.page';

describe('Followup10Page', () => {
  let component: Followup10Page;
  let fixture: ComponentFixture<Followup10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
