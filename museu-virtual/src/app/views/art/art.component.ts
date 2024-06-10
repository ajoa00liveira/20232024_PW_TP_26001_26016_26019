import { Component } from '@angular/core';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [],
  templateUrl: './art.component.html',
  styleUrl: './art.component.scss'
})

export class ArtComponent {
  bigFrameImage : string = "../../../assets/images/art/art-display1.jpg"; //default big frame image

  // Método chamado quando uma imagem em small-frames é clicada
  updateBigFrameImage(imagePath: string): void {
    this.bigFrameImage = imagePath; // Atualiza o caminho da imagem do big-frame com o caminho da imagem clicada
  }
}


