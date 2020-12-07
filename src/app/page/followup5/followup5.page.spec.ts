import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup5Page } from './followup5.page';

describe('Followup5Page', () => {
  let component: Followup5Page;
  let fixture: ComponentFixture<Followup5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
