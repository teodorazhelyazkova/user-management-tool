export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
  permissions: {
    id: string;
    label: string;
    status: boolean;
    subpermissions?: {
      id: string;
      label: string;
      status: boolean;
    }[];
  }[];
}
