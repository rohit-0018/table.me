import { Component, signal } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { Table } from './table/table';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('table.me');
}
