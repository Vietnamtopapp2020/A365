import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroducePage } from './introduce.page';

describe('IntroducePage', () => {
  let component: IntroducePage;
  let fixture: ComponentFixture<IntroducePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroducePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
