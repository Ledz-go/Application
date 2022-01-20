import {Component, OnInit} from '@angular/core';

import {NetworkService} from '../../services/network.service';

@Component({
  selector: 'app-chappe',
  templateUrl: './chappe.page.html',
  styleUrls: ['./chappe.page.scss'],
})
export class ChappePage implements OnInit {

  constructor(
    private networkService: NetworkService,
  ) {
  }

  ngOnInit() {
  }

  async sendMood(mood: string) {
    await this.networkService.sendMood(mood);
  }
}
