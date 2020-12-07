import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup16Page } from './followup16.page';

describe('Followup16Page', () => {
  let component: Followup16Page;
  let fixture: ComponentFixture<Followup16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup16Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
