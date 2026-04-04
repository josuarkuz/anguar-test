import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

type SortDirection = 'asc' | 'desc';

interface DataTableRow {
  id: number;
  name: string;
  role: string;
  team: string;
  status: string;
}

type SortColumn = 'name' | 'role' | 'team' | 'status';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
})
export class DataTable {
  readonly pageSize = 5;

  readonly rows = signal<DataTableRow[]>([
    { id: 1, name: 'Ana López', role: 'Frontend Developer', team: 'Platform', status: 'Active' },
    { id: 2, name: 'Marco Ruiz', role: 'QA Engineer', team: 'Accessibility', status: 'Active' },
    { id: 3, name: 'Sofía Torres', role: 'Project Manager', team: 'Delivery', status: 'On Leave' },
    { id: 4, name: 'Luis Mendoza', role: 'Backend Developer', team: 'Platform', status: 'Active' },
    { id: 5, name: 'Elena Castro', role: 'UX Designer', team: 'Design', status: 'Active' },
    { id: 6, name: 'Jorge Silva', role: 'DevOps Engineer', team: 'Infrastructure', status: 'Inactive' },
    { id: 7, name: 'Camila Vega', role: 'Business Analyst', team: 'Delivery', status: 'Active' },
    { id: 8, name: 'Diego Herrera', role: 'Frontend Developer', team: 'Accessibility', status: 'Active' },
    { id: 9, name: 'Valeria Gómez', role: 'QA Engineer', team: 'Platform', status: 'Active' },
    { id: 10, name: 'Ricardo Díaz', role: 'Product Owner', team: 'Delivery', status: 'Active' },
    { id: 11, name: 'Fernanda Pérez', role: 'UI Developer', team: 'Design', status: 'Inactive' },
    { id: 12, name: 'Gabriel Navarro', role: 'Scrum Master', team: 'Delivery', status: 'Active' },
  ]);

  readonly currentPage = signal(1);
  readonly sortColumn = signal<SortColumn>('name');
  readonly sortDirection = signal<SortDirection>('asc');

  readonly totalPages = computed(() => {
    return Math.ceil(this.rows().length / this.pageSize);
  });

  readonly sortedRows = computed(() => {
    const column = this.sortColumn();
    const direction = this.sortDirection();
    const sorted = [...this.rows()].sort((a, b) => {
      const valueA = a[column].toLowerCase();
      const valueB = b[column].toLowerCase();

      if (valueA < valueB) {
        return direction === 'asc' ? -1 : 1;
      }

      if (valueA > valueB) {
        return direction === 'asc' ? 1 : -1;
      }

      return 0;
    });

    return sorted;
  });

  readonly paginatedRows = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    const end = start + this.pageSize;

    return this.sortedRows().slice(start, end);
  });

  readonly pageStart = computed(() => {
    return (this.currentPage() - 1) * this.pageSize + 1;
  });

  readonly pageEnd = computed(() => {
    return Math.min(this.currentPage() * this.pageSize, this.rows().length);
  });

  sortBy(column: SortColumn): void {
    if (this.sortColumn() === column) {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortColumn.set(column);
      this.sortDirection.set('asc');
    }

    this.currentPage.set(1);
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update((page) => page - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((page) => page + 1);
    }
  }

  getAriaSort(column: SortColumn): 'ascending' | 'descending' | 'none' {
    if (this.sortColumn() !== column) {
      return 'none';
    }

    return this.sortDirection() === 'asc' ? 'ascending' : 'descending';
  }

  getSortLabel(column: SortColumn, label: string): string {
    if (this.sortColumn() !== column) {
      return `Sort by ${label}`;
    }

    const nextDirection = this.sortDirection() === 'asc' ? 'descending' : 'ascending';
    return `Sort by ${label}, currently ${this.sortDirection() === 'asc' ? 'ascending' : 'descending'}, activate to sort ${nextDirection}`;
  }

  getSortIndicator(column: SortColumn): string {
    if (this.sortColumn() !== column) {
      return '↕';
    }

    return this.sortDirection() === 'asc' ? '↑' : '↓';
  }
}
