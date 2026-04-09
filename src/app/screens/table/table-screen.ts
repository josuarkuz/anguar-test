import { Component } from '@angular/core';
import { DataTable } from '../../components/data-table/data-table';

@Component({
  selector: 'app-table-screen',
  imports: [DataTable],
  templateUrl: './table-screen.html',
  styleUrl: './table-screen.scss'
})
export class TableScreen {}
