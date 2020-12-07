import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DanhgiahieuquaPage } from './danhgiahieuqua.page';

describe('DanhgiahieuquaPage', () => {
  let component: DanhgiahieuquaPage;
  let fixture: ComponentFixture<DanhgiahieuquaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhgiahieuquaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DanhgiahieuquaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
