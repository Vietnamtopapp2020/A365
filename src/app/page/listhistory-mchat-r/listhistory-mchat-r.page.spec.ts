import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListhistoryMchatRPage } from './listhistory-mchat-r.page';

describe('ListhistoryMchatRPage', () => {
  let component: ListhistoryMchatRPage;
  let fixture: ComponentFixture<ListhistoryMchatRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListhistoryMchatRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListhistoryMchatRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
