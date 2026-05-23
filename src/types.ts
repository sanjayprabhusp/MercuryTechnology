export interface Employee {
  id: string;
  name: string;
  role: string;
  image?: string;
  attendance?: string;
  bloodGroup?: string;
  address: string;
  phone: string;
}

export type ScreenName = 'home' | 'service' | 'product' | 'about' | 'contact' | 'employees';

