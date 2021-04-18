import * as React from 'react'

interface OwnProps {
  currency: string;
  amount: string;
  display: string;
}

const PriceFormatter: React.FC<OwnProps> = ( {currency, amount, display} ) => {

  const getCurrencySymbol = (currency: string): string => {
    switch(currency) {
      case 'USD': return '$' // US Dollar
      case 'EUR': return '€' // Euro
      case 'GBP': return '£' // British Pound Sterling
      default: return '£'
    }
  }

  const getPriceFormatted = (currency: string, amount: string, display: string): string => {
    const symbol = getCurrencySymbol(currency)

    if (display === 'before') {
      return `${symbol}${amount}`
    }
    return `${amount}${symbol}`
  }
  
  

  return (
    <>
      {getPriceFormatted(currency, amount, display)}
    </>
  )
}

export default PriceFormatter;
