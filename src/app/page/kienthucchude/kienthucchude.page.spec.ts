import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KienthucchudePage } from './kienthucchude.page';

describe('KienthucchudePage', () => {
  let component: KienthucchudePage;
  let fixture: ComponentFixture<KienthucchudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KienthucchudePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KienthucchudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
