import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtecviewPage } from './atecview.page';

describe('AtecviewPage', () => {
  let component: AtecviewPage;
  let fixture: ComponentFixture<AtecviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtecviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtecviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
