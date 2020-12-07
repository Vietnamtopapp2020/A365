import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateQOLPage } from './update-qol.page';

describe('UpdateQOLPage', () => {
  let component: UpdateQOLPage;
  let fixture: ComponentFixture<UpdateQOLPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateQOLPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateQOLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
