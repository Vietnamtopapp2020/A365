import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup2Page } from './followup2.page';

describe('Followup2Page', () => {
  let component: Followup2Page;
  let fixture: ComponentFixture<Followup2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
