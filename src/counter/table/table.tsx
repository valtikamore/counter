import React, {FC} from "react";
import classNames from  'classnames'

type TablePropsType = {
    counter: number
    maxValue: number
    startValue: number
    startText: boolean

}

export const Table: FC<TablePropsType> = ({counter, maxValue, startValue,startText,}) => {

    const tableClassName = startValue < 0 || startValue === maxValue ||
      startValue > maxValue
    const counterMax = counter === maxValue ? 'maxCounter' : ''

    return (

        <div className={counterMax}>
            {
                startText
                    ? <div  className='table'>set value</div>
                    :
                    tableClassName
                ? <div className={classNames('table' , {
                    'errorTable' : tableClassName
                        })}>Error</div>
                    : <div className='table'> {counter}</div>
            }
        </div>
    )
}



