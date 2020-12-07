import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MchatrguestPage } from './mchatrguest.page';

describe('MchatrguestPage', () => {
  let component: MchatrguestPage;
  let fixture: ComponentFixture<MchatrguestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MchatrguestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MchatrguestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
