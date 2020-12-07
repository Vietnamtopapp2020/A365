import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup12Page } from './followup12.page';

describe('Followup12Page', () => {
  let component: Followup12Page;
  let fixture: ComponentFixture<Followup12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
