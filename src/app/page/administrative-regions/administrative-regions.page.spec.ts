import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministrativeRegionsPage } from './administrative-regions.page';

describe('AdministrativeRegionsPage', () => {
  let component: AdministrativeRegionsPage;
  let fixture: ComponentFixture<AdministrativeRegionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeRegionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrativeRegionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
