import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatechildrenPage } from './createchildren.page';

describe('CreatechildrenPage', () => {
  let component: CreatechildrenPage;
  let fixture: ComponentFixture<CreatechildrenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatechildrenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatechildrenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
