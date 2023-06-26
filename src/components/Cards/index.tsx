import { useContext, useEffect, useState } from 'react'
import { CardContext } from '../../contexts/CardContext'
import { CardContainer, CardItem } from './styled'
import { Loading } from '../loanding'
import { dateFormatter } from '../../utils/formatter'

export function Cards() {
  const { card, removeLoading } = useContext(CardContext)
  const [items, setItems] = useState(20)
  const [isLoading, setIsLoading] = useState(false)

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight - 20 && !isLoading) {
      setIsLoading(true)
      setTimeout(() => {
        setItems((prevVisibleItems) => prevVisibleItems + 20)
        setIsLoading(false)
      }, 1000)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      {removeLoading ? (
        <Loading />
      ) : (
        <CardContainer>
          {card.slice(0, items).map((item) => {
            return (
              <CardItem key={item.id}>
                <a href={item.game_url} target="_blank" rel="noreferrer">
                  <img src={item.thumbnail} alt="" />
                </a>

                <h1>{item.title}</h1>

                <p>
                  <strong>Gender:</strong> {item.genre}
                </p>
                <p>
                  <strong>Developer:</strong> {item.developer}
                </p>
                <p>
                  <strong>Launch:</strong>{' '}
                  {dateFormatter.format(new Date(item.release_date))}
                </p>

                <p>
                  <strong>Description:</strong> {item.short_description}
                </p>
              </CardItem>
            )
          })}
          {isLoading && <Loading />}
        </CardContainer>
      )}
    </div>
  )
}
