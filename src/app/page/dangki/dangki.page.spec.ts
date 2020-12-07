import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DangkiPage } from './dangki.page';

describe('DangkiPage', () => {
  let component: DangkiPage;
  let fixture: ComponentFixture<DangkiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangkiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DangkiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
