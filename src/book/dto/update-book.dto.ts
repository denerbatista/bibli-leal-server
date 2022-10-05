export interface UpdateBookDto {
  _register?: Number;
  _title?: String;
  _publishingCompany?: String;
  _ilustrator?: String;
  _picture?: String;
  _registrationDate?: Date;
  _status?: String;
  _historic?: [
    {
      _user: {
        _name: String;
        _gang: String;
        _teacher: Boolean;
      };
      _loanDate: Date;
      _returnDate?: Date | string;
    }
  ];
}
