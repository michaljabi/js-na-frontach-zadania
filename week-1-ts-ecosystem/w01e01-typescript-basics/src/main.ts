import {user} from "./constants/user";
import {useAddress} from "./hooks/useAddress";
import {useUser} from "./hooks/useUser";

const {hasAddress} = useAddress()
const {hasGivenAge} = useUser()
const isAdult = hasGivenAge(12)

console.log(`User ${user.name} is ${isAdult(user) ? 'adult' : 'minor'}`)
console.log(`and has${hasAddress(user) ? '' : ' no'} address`)
