import { Injectable } from '@angular/core';
import { TableData } from '../table/types/tableData.type';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
   constructor() {
    console.log("Table data", this.data);
   }
    private data!: TableData[];

   async init() {
     await this.fetchTableData();
    }

    getById(id: string): any {
      return this.data.find((item)=> item['id']==id);
    }
    update(id: string, key: string, value: any) {
      const item = this.getById(id);
      if (item) {
        (item as any)[key] = value;
      }
    }
    public async fetchTableData() {
      const response = await fetch("https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json");
      this.data = await response.json();
    }
    public getData(): TableData[] {
      return this.data;
    }
}
