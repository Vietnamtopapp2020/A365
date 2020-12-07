import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboadteacherPage } from './dashboadteacher.page';

describe('DashboadteacherPage', () => {
  let component: DashboadteacherPage;
  let fixture: ComponentFixture<DashboadteacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboadteacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboadteacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
