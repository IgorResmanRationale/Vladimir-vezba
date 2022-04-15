import { getAttrsForDirectiveMatching } from "@angular/compiler/src/render3/view/util";

export class Account {
  id!: number ;
  name!: string ;
  lastName!: string;
  position!: string;
  email!: string;
  username!: string;
  password!: string;
  altEmail!: string;
  status!: string;
  company!: string;
  designaton!: string;
  initials!: string;
  workPhone!: number;
  mobilPhone!: number;
  profile! : Profile;
}

export class Profile{
  name!:string;
  permission!: string;
  }









