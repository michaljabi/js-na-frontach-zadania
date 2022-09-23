import {User} from "../types/User";

type useAddressType = {
  hasAddress:(user: User) => boolean
}

export const useAddress = ():useAddressType => {
  function hasAddress(user:User) {
    return Boolean(user.address)
  }

  return {
    hasAddress
  }
}

