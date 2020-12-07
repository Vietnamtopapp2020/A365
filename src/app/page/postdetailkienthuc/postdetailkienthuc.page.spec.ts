import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostdetailkienthucPage } from './postdetailkienthuc.page';

describe('PostdetailkienthucPage', () => {
  let component: PostdetailkienthucPage;
  let fixture: ComponentFixture<PostdetailkienthucPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostdetailkienthucPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostdetailkienthucPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
