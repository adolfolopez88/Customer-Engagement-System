
export class User {
  id: number;
  url = '';
  avatar = null;
  username: string;
  email:  string;
  first_name = '';
  last_name = '';
  password: string;
  firebase_uid: string;
  groups: any = [];
  address = '';
  lat = 0;
  lng = 0;
}
