import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewpostInterventionDataPage } from './viewpost-intervention-data.page';

describe('ViewpostInterventionDataPage', () => {
  let component: ViewpostInterventionDataPage;
  let fixture: ComponentFixture<ViewpostInterventionDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpostInterventionDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewpostInterventionDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
