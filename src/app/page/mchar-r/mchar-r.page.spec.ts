import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McharRPage } from './mchar-r.page';

describe('McharRPage', () => {
  let component: McharRPage;
  let fixture: ComponentFixture<McharRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McharRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McharRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
