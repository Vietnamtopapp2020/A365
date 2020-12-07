import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup18Page } from './followup18.page';

describe('Followup18Page', () => {
  let component: Followup18Page;
  let fixture: ComponentFixture<Followup18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup18Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
