import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NhatkycanthiepPage } from './nhatkycanthiep.page';

describe('NhatkycanthiepPage', () => {
  let component: NhatkycanthiepPage;
  let fixture: ComponentFixture<NhatkycanthiepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhatkycanthiepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NhatkycanthiepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
