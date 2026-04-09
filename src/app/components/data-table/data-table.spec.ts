import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTable } from './data-table';

describe('DataTable', () => {
  let component: DataTable;
  let fixture: ComponentFixture<DataTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTable],
    }).compileComponents();

    fixture = TestBed.createComponent(DataTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start on page 1', () => {
    expect(component.currentPage()).toBe(1);
  });

  it('should sort by selected column', () => {
    component.sortBy('role');

    expect(component.sortColumn()).toBe('role');
    expect(component.sortDirection()).toBe('asc');
  });

  it('should toggle sort direction when sorting same column', () => {
    component.sortBy('name');

    expect(component.sortDirection()).toBe('desc');
  });

  it('should go to next page when possible', () => {
    component.nextPage();

    expect(component.currentPage()).toBe(2);
  });

  it('should go to previous page when possible', () => {
    component.currentPage.set(2);

    component.previousPage();

    expect(component.currentPage()).toBe(1);
  });

  it('should render table element', () => {
    const element: HTMLElement = fixture.nativeElement;
    const table = element.querySelector('table');

    expect(table).toBeTruthy();
  });

  it('should return neutral indicator for unsorted columns', () => {
    component.sortColumn.set('name');
    component.sortDirection.set('asc');

    expect(component.getSortIndicator('role')).toBe('unsorted');
  });

  it('should return ascending and descending indicators for active column', () => {
    component.sortColumn.set('name');
    component.sortDirection.set('asc');
    expect(component.getSortIndicator('name')).toBe('asc');

    component.sortDirection.set('desc');
    expect(component.getSortIndicator('name')).toBe('desc');
  });

  it('should reset to page 1 when sorting', () => {
    component.currentPage.set(2);

    component.sortBy('role');

    expect(component.currentPage()).toBe(1);
  });
  it('should return correct aria-sort for active and inactive columns', () => {
    component.sortColumn.set('name');
    component.sortDirection.set('asc');

    expect(component.getAriaSort('name')).toBe('ascending');
    expect(component.getAriaSort('role')).toBe('none');

    component.sortDirection.set('desc');
    expect(component.getAriaSort('name')).toBe('descending');
  });
});
