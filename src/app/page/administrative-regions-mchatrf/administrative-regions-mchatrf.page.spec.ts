import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministrativeRegionsMCHATRFPage } from './administrative-regions-mchatrf.page';

describe('AdministrativeRegionsMCHATRFPage', () => {
  let component: AdministrativeRegionsMCHATRFPage;
  let fixture: ComponentFixture<AdministrativeRegionsMCHATRFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeRegionsMCHATRFPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrativeRegionsMCHATRFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
