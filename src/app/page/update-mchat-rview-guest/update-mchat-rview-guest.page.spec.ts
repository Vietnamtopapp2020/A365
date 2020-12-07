import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateMchatRViewGuestPage } from './update-mchat-rview-guest.page';

describe('UpdateMchatRViewGuestPage', () => {
  let component: UpdateMchatRViewGuestPage;
  let fixture: ComponentFixture<UpdateMchatRViewGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMchatRViewGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateMchatRViewGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
