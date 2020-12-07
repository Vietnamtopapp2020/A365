import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileanswesguestmchatrPage } from './profileanswesguestmchatr.page';

describe('ProfileanswesguestmchatrPage', () => {
  let component: ProfileanswesguestmchatrPage;
  let fixture: ComponentFixture<ProfileanswesguestmchatrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileanswesguestmchatrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileanswesguestmchatrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
