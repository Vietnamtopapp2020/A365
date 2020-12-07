import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListhistoryQOLPage } from './listhistory-qol.page';

describe('ListhistoryQOLPage', () => {
  let component: ListhistoryQOLPage;
  let fixture: ComponentFixture<ListhistoryQOLPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListhistoryQOLPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListhistoryQOLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
