import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListchildrenPage } from './listchildren.page';

describe('ListchildrenPage', () => {
  let component: ListchildrenPage;
  let fixture: ComponentFixture<ListchildrenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListchildrenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListchildrenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
