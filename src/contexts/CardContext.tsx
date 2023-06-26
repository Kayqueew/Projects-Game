import axios, { AxiosRequestConfig } from 'axios'
import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import Swal from 'sweetalert2'

interface Card {
  developer: string
  game_url: string
  genre: string
  id: number
  release_date: number
  short_description: string
  thumbnail: string
  title: string
}

interface CardContextType {
  card: Card[]
  fetchCard: (query?: string) => Promise<void>
  removeLoading: boolean
  // eslint-disable-next-line no-undef
  setRemoveLoading: React.Dispatch<React.SetStateAction<boolean>>
}

interface CardProviderProps {
  children: ReactNode
}

export const CardContext = createContext({} as CardContextType)

export function CardProvider({ children }: CardProviderProps) {
  const [card, setCard] = useState<Card[]>([])
  const [removeLoading, setRemoveLoading] = useState(true)

  const fetchCard = useCallback(async (query?: string) => {
    const email = 'kayque.jjj@gmail.com'
    const url = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/'

    const config: AxiosRequestConfig = {
      headers: {
        'dev-email-address': email,
      },
    }

    const response = await axios.get(url, config)
    const games: Card[] = response.data
    console.log(games)

    if (response.status === 200) {
      try {
        if (query) {
          const filteredGames = games.filter(
            (game: Card) =>
              game.title.toLowerCase().includes(query.toLowerCase()) || // o includes determina se um arrau inclui um determindado valor entre suas entredas e retonar true ou false
              game.genre.toLowerCase().includes(query.toLowerCase()),
          )

          if (filteredGames.length === 0) {
            Swal.fire({
              icon: 'error',
              title: 'Palavra não encontrada ',
              text: 'Não houve jogos correspondentes à sua pesquisa. Tente novamente com palavras-chave diferentes.!',
            })
            setCard([])
          } else {
            setCard(filteredGames)
          }

          setRemoveLoading(false)
        } else {
          setCard(games)
          setRemoveLoading(false)
        }
      } catch (error) {
        console.error('Ocorreu um erro ao buscar os dados:', error)
      }
    } else if (
      response.status === 500 ||
      response.status === 502 ||
      response.status === 503 ||
      response.status === 504 ||
      response.status === 507 ||
      response.status === 508 ||
      response.status === 509
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'O servidor fahou em responder, tente recarregar a página!',
      })
      console.log('foi')
      setRemoveLoading(true)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde',
      })
    }
  }, [])

  useEffect(() => {
    let isResponse = false

    const timeout = setTimeout(() => {
      if (!isResponse) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'O servidor demorou para responder, tente novamente mais tarde.',
        })
      }
    }, 5000)

    fetchCard()
      .then(() => {
        isResponse = true
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao buscar os dados', error)
        isResponse = true
      })

    return () => {
      clearTimeout(timeout)
    }
  }, [fetchCard])

  return (
    <CardContext.Provider
      value={{
        card,
        fetchCard,
        removeLoading,
        setRemoveLoading,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}
