import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { SharedDataService } from '../service/shared-data.service';
import { Column } from './types/column.type';
import { TableData } from './types/tableData.type';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

const getHeaders = (data: TableData[]): Column[] =>
  data[0]
    ? Object.entries(data[0]).map(([key], idx) => ({
        id: String(idx),
        key,
        display: key.toUpperCase(),
        isLink: idx ==0,
      }))
    : [];

@Component({
  selector: 'app-table',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit, OnDestroy {
  public headers!: Column[];
  public data!: TableData[];
  constructor(private readonly tableService: SharedDataService, private readonly router: Router) {}

  async ngOnInit() {
    // await this.tableService.fetchTableData();
    this.data = this.tableService.getData();
    this.headers = getHeaders(this.data);
  }
  goToDetails(item: TableData) {
    this.router.navigate(['/details', item['id']]);
  }
  onEdit(id: string, key: string, event: any) {
    this.tableService.update(id, key, event.target.innerText.trim());
  }
  ngOnDestroy(): void {
  }
}
