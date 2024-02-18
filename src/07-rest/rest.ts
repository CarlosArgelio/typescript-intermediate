import { User, ROLES  } from "./../01-enums/enum";

const currentUser: User = {
  username: 'CarlosArgelio01',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

const rta = checkAdminRole()
console.log("🚀 ~ rta:", rta)

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
}

const rta1 = checkRole(ROLES.ADMIN, ROLES.SELLER)
console.log("🚀 ~ rta1:", rta1)

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta2 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER])
console.log("🚀 ~ rta2:", rta2)

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta3 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)
console.log("🚀 ~ rta3:", rta3)
