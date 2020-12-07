import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateATECPage } from './update-atec.page';

describe('UpdateATECPage', () => {
  let component: UpdateATECPage;
  let fixture: ComponentFixture<UpdateATECPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateATECPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateATECPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
