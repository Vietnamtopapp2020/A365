import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup15Page } from './followup15.page';

describe('Followup15Page', () => {
  let component: Followup15Page;
  let fixture: ComponentFixture<Followup15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup15Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
