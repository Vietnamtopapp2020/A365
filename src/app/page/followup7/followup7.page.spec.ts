import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup7Page } from './followup7.page';

describe('Followup7Page', () => {
  let component: Followup7Page;
  let fixture: ComponentFixture<Followup7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
