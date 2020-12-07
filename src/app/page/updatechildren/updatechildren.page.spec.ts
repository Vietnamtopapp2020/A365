import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatechildrenPage } from './updatechildren.page';

describe('UpdatechildrenPage', () => {
  let component: UpdatechildrenPage;
  let fixture: ComponentFixture<UpdatechildrenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatechildrenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatechildrenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
