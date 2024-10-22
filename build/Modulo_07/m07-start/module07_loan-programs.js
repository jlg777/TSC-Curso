"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
exports.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
function calculateInterestOnlyLoanPayment(loanTerms) {
    let payment;
    payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
/*  TODO Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(loanTerms) {
    let interest = calculateInterestRate(loanTerms.interestRate);
    let payment;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
function calculateInterestRate(interestRate) {
    let interest = interestRate / 1200;
    return interest;
}
