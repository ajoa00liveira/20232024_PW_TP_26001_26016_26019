import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  bigFrameImage : string = "../../../assets/images/home/main_image_section2.png"; 

  // Método chamado quando uma imagem em small-frames é clicada
  updateBigFrameImage(imagePath: string): void {
    this.bigFrameImage = imagePath; // Atualiza o caminho da imagem do big-frame com o caminho da imagem clicada
  }
}
