export enum ROLES {
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer"
}

export type User = {
  username: string;
  role: ROLES;
}

const carlosUser: User = {
  username: "carlos01",
  role: ROLES.ADMIN
}
