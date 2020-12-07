import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup13Page } from './followup13.page';

describe('Followup13Page', () => {
  let component: Followup13Page;
  let fixture: ComponentFixture<Followup13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
