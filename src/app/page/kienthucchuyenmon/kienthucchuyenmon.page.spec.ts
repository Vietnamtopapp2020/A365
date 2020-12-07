import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KienthucchuyenmonPage } from './kienthucchuyenmon.page';

describe('KienthucchuyenmonPage', () => {
  let component: KienthucchuyenmonPage;
  let fixture: ComponentFixture<KienthucchuyenmonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KienthucchuyenmonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KienthucchuyenmonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
