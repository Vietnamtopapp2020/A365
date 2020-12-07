import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListhistoryASQPage } from './listhistory-asq.page';

describe('ListhistoryASQPage', () => {
  let component: ListhistoryASQPage;
  let fixture: ComponentFixture<ListhistoryASQPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListhistoryASQPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListhistoryASQPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
