import { BUY_CAKE } from './cakeTypes'

export const buyCake = cakesToSell => {
  return {
    type: BUY_CAKE,
    payload: cakesToSell
  }
}
