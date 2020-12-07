import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListhistoryCDCPage } from './listhistory-cdc.page';

describe('ListhistoryCDCPage', () => {
  let component: ListhistoryCDCPage;
  let fixture: ComponentFixture<ListhistoryCDCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListhistoryCDCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListhistoryCDCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
