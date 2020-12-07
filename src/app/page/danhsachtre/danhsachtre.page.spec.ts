import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DanhsachtrePage } from './danhsachtre.page';

describe('DanhsachtrePage', () => {
  let component: DanhsachtrePage;
  let fixture: ComponentFixture<DanhsachtrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachtrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DanhsachtrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
