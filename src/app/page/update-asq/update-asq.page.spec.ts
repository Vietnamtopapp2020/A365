import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateASQPage } from './update-asq.page';

describe('UpdateASQPage', () => {
  let component: UpdateASQPage;
  let fixture: ComponentFixture<UpdateASQPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateASQPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateASQPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
