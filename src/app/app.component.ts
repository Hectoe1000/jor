import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplatesModule } from './templates/templates.module';
import { TemplatesRoutingModule } from './templates/templates-routing.module';
import { TemplateHeaderComponent } from './templates/template-header/template-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemplateHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cevicheria-app';
}
