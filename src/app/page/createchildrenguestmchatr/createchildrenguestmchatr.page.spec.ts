import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatechildrenguestmchatrPage } from './createchildrenguestmchatr.page';

describe('CreatechildrenguestmchatrPage', () => {
  let component: CreatechildrenguestmchatrPage;
  let fixture: ComponentFixture<CreatechildrenguestmchatrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatechildrenguestmchatrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatechildrenguestmchatrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
