
export interface Request{
    requestId: number,
    dateSubmitted: Date,
    dateOfTransaction: Date,
    employeeId: number,
    expenseType: string,
    amount: number,
    status: string,
    dateResolved: Date,
    merchantName: string
}