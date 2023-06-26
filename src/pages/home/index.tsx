import { useContext } from 'react'
import { CardContext } from '../../contexts/CardContext'
import { Loading } from '../../components/loanding'

import { Cards } from '../../components/Cards'

export function Home() {
  const { removeLoading } = useContext(CardContext)

  return <div>{removeLoading ? <Loading /> : <Cards />}</div>
}
