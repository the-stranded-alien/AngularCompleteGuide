import {Component, computed, inject, Input, input} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // results = input();
  // @Input({ required: true }) results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  // results = input <{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[]>();
  private investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.resultsData;
  // }

  results = computed(() => this.investmentService.resultsData());
  // or
  // results = this.investmentService.resultsData.asReadonly();
}
