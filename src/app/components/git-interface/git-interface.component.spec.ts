import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInterfaceComponent } from './git-interface.component';

describe('GitInterfaceComponent', () => {
  let component: GitInterfaceComponent;
  let fixture: ComponentFixture<GitInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
