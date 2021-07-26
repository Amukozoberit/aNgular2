import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDesignComponent } from './repo-design.component';

describe('RepoDesignComponent', () => {
  let component: RepoDesignComponent;
  let fixture: ComponentFixture<RepoDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
