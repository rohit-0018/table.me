import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Table } from "./table/table";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Table],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('table.me');
}
