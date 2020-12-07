import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatechildrenguestPage } from './createchildrenguest.page';

describe('CreatechildrenguestPage', () => {
  let component: CreatechildrenguestPage;
  let fixture: ComponentFixture<CreatechildrenguestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatechildrenguestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatechildrenguestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
