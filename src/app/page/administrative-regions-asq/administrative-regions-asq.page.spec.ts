import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministrativeRegionsASQPage } from './administrative-regions-asq.page';

describe('AdministrativeRegionsASQPage', () => {
  let component: AdministrativeRegionsASQPage;
  let fixture: ComponentFixture<AdministrativeRegionsASQPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeRegionsASQPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrativeRegionsASQPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
