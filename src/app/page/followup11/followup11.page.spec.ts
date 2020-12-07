import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup11Page } from './followup11.page';

describe('Followup11Page', () => {
  let component: Followup11Page;
  let fixture: ComponentFixture<Followup11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
