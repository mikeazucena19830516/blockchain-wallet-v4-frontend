import { ExtractSuccess } from 'core/types'
import { lift } from 'ramda'
import { selectors } from 'data'

export const getData = state => {
  const cardsR = selectors.components.simpleBuy.getSBCards(state)
  const eligibilityR = selectors.components.simpleBuy.getSBFiatEligible(state)
  const paymentMethodsR = selectors.components.simpleBuy.getSBPaymentMethods(
    state
  )

  return lift(
    (
      cards: ExtractSuccess<typeof cardsR>,
      eligibility: ExtractSuccess<typeof eligibilityR>,
      paymentMethods: ExtractSuccess<typeof paymentMethodsR>
    ) => ({
      cards,
      eligibility,
      paymentMethods
    })
  )(cardsR, eligibilityR, paymentMethodsR)
}