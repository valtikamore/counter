import React, {FC, useState} from "react";


type TablePropsType = {
    counter: number
    maxValue: number
    startValue: number
    startText: boolean
    setStartText: (value: boolean) => void
}

export const Table: FC<TablePropsType> = ({counter, maxValue, startValue,...props}) => {

    const tableClassName = startValue < 0 || startValue === maxValue ||
    counter === maxValue || startValue > maxValue
        ? 'errorMessage'
        : ''

    return (

        <div className={tableClassName}>
            {
                props.startText
                    ? <div  className='table'>set value</div>
                    :
                startValue < 0 || startValue === maxValue || startValue > maxValue

                ? <div className='table'>Error</div>
                    : <div className='table'> {counter}</div>
            }
        </div>
    )
}



