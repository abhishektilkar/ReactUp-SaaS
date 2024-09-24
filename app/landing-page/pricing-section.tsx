import React from 'react'

export type PricingPlan = {
    title: string;
    price: number;
    description: string;
    isPopular: boolean;
    features: string[]; 
}

export const pricingPlans: PricingPlan[] = [
    {
        title: 'Free',
        price: 0,
        description: 'For small teams just getting started',
        isPopular: false,
        features: [
            '3 projects',
            'Unlimited Users',
            '2GB storage',
            'Priority support'
        ]
    }
]

const PricingSection = () => {
  return (
    <div className='text-center'>
        {/* PricingSection */}
        <h1 className='capitalize text-3xl'>Pricing</h1>
        <h2 className='font-extrabold text-3xl mb-8 pt-3'>
            Flexible Pricing to Fit Your Needs
        </h2>
    </div>
  )
}

export default PricingSection