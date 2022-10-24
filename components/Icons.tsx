import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'
import { FC } from 'react'
import { Props, State } from '../interfaces/interfaces'

const Icons: NextPage<Partial<Props>> = ({ datas, onHandleClick }): JSX.Element => {

  return (

    <ul className="container-icons flex flex-column-between">
      {
        datas && datas.map((data: State) => (
          <li
            onClick={() => onHandleClick!(data)}
            className={"icons-content flex flex-row-center"}
            key={data.title}
          >
            <FontAwesomeIcon icon={data.icon} color={data.color} size="xl" />
          </li>
        ))
      }
    </ul>
  )
}

export default Icons;
