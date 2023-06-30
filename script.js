function calculateMonthlyPayment() {
    var loanAmount = document.getElementById('loanAmount').value;
    var interestRate = document.getElementById('interestRate').value;
    var loanTerm = document.getElementById('loanTerm').value;

    var monthlyInterestRate = (interestRate / 100) / 12;
    var totalPayments = loanTerm * 12;
    var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), totalPayments);
    var monthlyPayment = (loanAmount * monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

    document.getElementById('result').innerHTML = '$' + monthlyPayment.toFixed(2);
}
