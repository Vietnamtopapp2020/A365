import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListChildrenAsqPage } from './list-children-asq.page';

describe('ListChildrenAsqPage', () => {
  let component: ListChildrenAsqPage;
  let fixture: ComponentFixture<ListChildrenAsqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChildrenAsqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListChildrenAsqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
