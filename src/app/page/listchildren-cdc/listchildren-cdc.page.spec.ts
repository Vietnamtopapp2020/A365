import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListchildrenCDCPage } from './listchildren-cdc.page';

describe('ListchildrenCDCPage', () => {
  let component: ListchildrenCDCPage;
  let fixture: ComponentFixture<ListchildrenCDCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListchildrenCDCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListchildrenCDCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
