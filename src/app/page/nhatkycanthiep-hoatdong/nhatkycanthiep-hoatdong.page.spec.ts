import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NhatkycanthiepHoatdongPage } from './nhatkycanthiep-hoatdong.page';

describe('NhatkycanthiepHoatdongPage', () => {
  let component: NhatkycanthiepHoatdongPage;
  let fixture: ComponentFixture<NhatkycanthiepHoatdongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhatkycanthiepHoatdongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NhatkycanthiepHoatdongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
