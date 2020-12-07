import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListchildrenQOLPage } from './listchildren-qol.page';

describe('ListchildrenQOLPage', () => {
  let component: ListchildrenQOLPage;
  let fixture: ComponentFixture<ListchildrenQOLPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListchildrenQOLPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListchildrenQOLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
