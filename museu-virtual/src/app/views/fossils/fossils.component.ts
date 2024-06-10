import { Component } from '@angular/core';

@Component({
  selector: 'app-fossils',
  standalone: true,
  imports: [],
  templateUrl: './fossils.component.html',
  styleUrl: './fossils.component.scss'
})

export class FossilsComponent {
  bigFrameImage : string = "../../../assets/images/art/art-display1.jpg"; //default big frame image

  // Método chamado quando uma imagem em small-frames é clicada
  updateBigFrameImage(imagePath: string): void {
    this.bigFrameImage = imagePath; // Atualiza o caminho da imagem do big-frame com o caminho da imagem clicada
  }
}