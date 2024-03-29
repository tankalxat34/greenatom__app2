export interface IItemsDocs {
  name: string;
}

export interface IDataRegisterEmployee {
  firstname: string;
  surname: string;
  patronymic: string;
  jobPosition: string;
  salary: number;
  email: string;
  phoneNumber: string;
  password: string;
  repeatPassword: string;
  role: object;
  address: string;
}

export interface IDataLogin {
  username: string;
  password: string;
}
export interface IDataRegister extends IDataLogin {
  confirmPassword: string;
  email: string;
}

export interface IUser {
  id: number;
  position: string;
  username: string;
  email: string;
  roles: [
    {
      name: string;
    }
  ];
  firstName: string;
  lastName: string;
}
