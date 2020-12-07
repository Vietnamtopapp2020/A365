import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup1Page } from './followup1.page';

describe('Followup1Page', () => {
  let component: Followup1Page;
  let fixture: ComponentFixture<Followup1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
