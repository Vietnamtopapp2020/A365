import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CdcPage } from './cdc.page';

describe('CdcPage', () => {
  let component: CdcPage;
  let fixture: ComponentFixture<CdcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CdcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
