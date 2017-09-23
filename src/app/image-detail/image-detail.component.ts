import { Component, OnInit } from '@angular/core';
import {ImageService} from '../image.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  image: any;
  constructor(private _imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {

    this._imageService.getImage(
      this.route.snapshot.params['id']
    ).subscribe( res => {
      console.log(res);
      this.image = res;
    });

  }




}
