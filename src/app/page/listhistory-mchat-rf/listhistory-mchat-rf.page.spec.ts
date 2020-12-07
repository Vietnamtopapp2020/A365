import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListhistoryMchatRFPage } from './listhistory-mchat-rf.page';

describe('ListhistoryMchatRFPage', () => {
  let component: ListhistoryMchatRFPage;
  let fixture: ComponentFixture<ListhistoryMchatRFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListhistoryMchatRFPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListhistoryMchatRFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
