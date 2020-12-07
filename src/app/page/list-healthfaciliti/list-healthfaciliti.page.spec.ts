import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListHealthfacilitiPage } from './list-healthfaciliti.page';

describe('ListHealthfacilitiPage', () => {
  let component: ListHealthfacilitiPage;
  let fixture: ComponentFixture<ListHealthfacilitiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHealthfacilitiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListHealthfacilitiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
