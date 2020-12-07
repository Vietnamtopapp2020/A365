import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NhatkycanthiepDanhgiaPage } from './nhatkycanthiep-danhgia.page';

describe('NhatkycanthiepDanhgiaPage', () => {
  let component: NhatkycanthiepDanhgiaPage;
  let fixture: ComponentFixture<NhatkycanthiepDanhgiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhatkycanthiepDanhgiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NhatkycanthiepDanhgiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
