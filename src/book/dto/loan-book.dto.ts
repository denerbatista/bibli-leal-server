export interface LoanBook {
  _id: string;
  _user: {
    _id: string;
    _name: String;
    _gang: String;
    _teacher: Boolean;
  };
  _loanDate: Date;
  _returnDate: Date | string;
}
