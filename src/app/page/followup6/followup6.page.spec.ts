import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Followup6Page } from './followup6.page';

describe('Followup6Page', () => {
  let component: Followup6Page;
  let fixture: ComponentFixture<Followup6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Followup6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Followup6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
