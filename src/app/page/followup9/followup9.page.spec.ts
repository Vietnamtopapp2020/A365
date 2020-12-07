import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup9Page } from './followup9.page';

describe('Followup9Page', () => {
  let component: Followup9Page;
  let fixture: ComponentFixture<Followup9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
