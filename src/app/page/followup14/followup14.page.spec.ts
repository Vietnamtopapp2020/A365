import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup14Page } from './followup14.page';

describe('Followup14Page', () => {
  let component: Followup14Page;
  let fixture: ComponentFixture<Followup14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup14Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
