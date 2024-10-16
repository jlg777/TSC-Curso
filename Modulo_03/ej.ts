interface Loan {
    principal : number,
    interestRate: number
}

interface ConventionalLoan extends Loan {
    months: number
}

