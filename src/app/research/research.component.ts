import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  src = 'assets/ICSE2023SUBMISSION.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
