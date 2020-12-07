import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QolPage } from './qol.page';

describe('QolPage', () => {
  let component: QolPage;
  let fixture: ComponentFixture<QolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
