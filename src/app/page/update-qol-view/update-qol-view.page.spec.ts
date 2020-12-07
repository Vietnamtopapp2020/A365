import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateQolViewPage } from './update-qol-view.page';

describe('UpdateQolViewPage', () => {
  let component: UpdateQolViewPage;
  let fixture: ComponentFixture<UpdateQolViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateQolViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateQolViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
