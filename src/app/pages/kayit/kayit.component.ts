import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { kayit } from 'src/app/models/kayit';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-kayit',
  templateUrl: './kayit.component.html',
  styleUrls: ['./kayit.component.scss']
})
export class KayitComponent implements OnInit {

  constructor( private service: ServiceService) { }
  _Giris = {} as kayit

  ngOnInit(): void {
  }
  gonder(){
    this.service.kayitOlustur(this._Giris).subscribe(sonuc => {
      console.log(sonuc)
    } )
  }

}
