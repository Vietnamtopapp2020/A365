import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileAnswesguestPage } from './profile-answesguest.page';

describe('ProfileAnswesguestPage', () => {
  let component: ProfileAnswesguestPage;
  let fixture: ComponentFixture<ProfileAnswesguestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAnswesguestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileAnswesguestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
