import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MchatrFPage } from './mchatr-f.page';

describe('MchatrFPage', () => {
  let component: MchatrFPage;
  let fixture: ComponentFixture<MchatrFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MchatrFPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MchatrFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
