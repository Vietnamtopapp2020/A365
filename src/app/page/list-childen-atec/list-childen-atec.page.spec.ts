import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListChildenAtecPage } from './list-childen-atec.page';

describe('ListChildenAtecPage', () => {
  let component: ListChildenAtecPage;
  let fixture: ComponentFixture<ListChildenAtecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChildenAtecPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListChildenAtecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
