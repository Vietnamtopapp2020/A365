import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrangcuatoiPage } from './trangcuatoi.page';

describe('TrangcuatoiPage', () => {
  let component: TrangcuatoiPage;
  let fixture: ComponentFixture<TrangcuatoiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangcuatoiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrangcuatoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
