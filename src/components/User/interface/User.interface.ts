export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
  permissions: {
    [key: string]: {
      status: boolean;
      subpermissions?: {
        label: string;
        value: boolean;
      }[];
    };
  };
}
