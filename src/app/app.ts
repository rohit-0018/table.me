import { Component, signal } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { Table } from "./table/table";
import { DetailsComponent } from './details-component/details-component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Table, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('table.me');
}
