import React from 'react'
import { cn } from "../../lib/utils";
export const Star = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7.23642 6.84114L0.856418 7.76614L0.743418 7.78914C0.572357 7.83455 0.416413 7.92455 0.29151 8.04994C0.166608 8.17534 0.0772217 8.33163 0.0324804 8.50287C-0.0122609 8.67411 -0.0107545 8.85415 0.0368458 9.02462C0.0844462 9.19508 0.176435 9.34986 0.303418 9.47314L4.92542 13.9721L3.83542 20.3271L3.82242 20.4371C3.81195 20.6141 3.84868 20.7906 3.92887 20.9486C4.00905 21.1067 4.1298 21.2406 4.27875 21.3367C4.42771 21.4327 4.59951 21.4874 4.77657 21.4953C4.95363 21.5031 5.12958 21.4637 5.28642 21.3811L10.9924 18.3811L16.6854 21.3811L16.7854 21.4271C16.9505 21.4922 17.1299 21.5121 17.3052 21.4849C17.4805 21.4577 17.6454 21.3844 17.783 21.2724C17.9206 21.1604 18.026 21.0139 18.0883 20.8478C18.1505 20.6817 18.1675 20.502 18.1374 20.3271L17.0464 13.9721L21.6704 9.47214L21.7484 9.38714C21.8598 9.24991 21.9329 9.0856 21.9601 8.91094C21.9874 8.73628 21.9678 8.55752 21.9035 8.39287C21.8392 8.22823 21.7323 8.08358 21.5939 7.97366C21.4555 7.86374 21.2904 7.79248 21.1154 7.76714L14.7354 6.84114L11.8834 1.06114C11.8009 0.893678 11.6731 0.752658 11.5146 0.654048C11.3561 0.555437 11.1731 0.503174 10.9864 0.503174C10.7997 0.503174 10.6168 0.555437 10.4582 0.654048C10.2997 0.752658 10.1719 0.893678 10.0894 1.06114L7.23642 6.84114Z" fill="#FC950F"/>
</svg>
)


const RiviewCard = ({name, image, type, active, onclick}) => {
  return (
    <>
       <button onClick={onclick} className={cn(
        'inline-flex justify-start items-center border border-primary rounded-[20px] py-[1px] px-5 gap-[13px] w-full md:w-[300px] lg:w-[400px] xl:w-[491px]',
        active  && 'bg-gradient-primary',
       )}>
            <img src={image} alt="img"/>
               <div className={cn('font-semibold text-accent', active && 'text-white')}>
                  <h4>{name}</h4>
                  <p>{type}</p>
               </div>
        </button>
    </>
  )
}

export default RiviewCard
