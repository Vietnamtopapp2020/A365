import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListchildrenmchatrfPage } from './listchildrenmchatrf.page';

describe('ListchildrenmchatrfPage', () => {
  let component: ListchildrenmchatrfPage;
  let fixture: ComponentFixture<ListchildrenmchatrfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListchildrenmchatrfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListchildrenmchatrfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
