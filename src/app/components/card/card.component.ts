import { Component, Input } from '@angular/core';

interface District {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})


export class CardComponent {
  @Input() data: any[] =[];

}
