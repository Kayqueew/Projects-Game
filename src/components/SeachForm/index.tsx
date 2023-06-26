import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SeachFormContainer, SelectGenres, Test } from './styles'
import { useContext } from 'react'
import { CardContext } from '../../contexts/CardContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SeachCard() {
  const { fetchCard, /* card, */ setRemoveLoading } = useContext(CardContext)

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const genres1 = [
    'Shooter',
    'MMOARPG',
    'ARPG',
    'Fighting',
    'Action RPG',
    'Battle Royale',
    'MMORPG',
    'MOBA',
    'Sports',
    'Racing',
    'Card Game',
    'Strategy',
    'MMO',
    'Social',
    'Fantasy',
  ]

  /* const genres = card.map((item) => item.genre)

  const genreOption: string[] = genres.filter(
    (genre, index) => genres.indexOf(genre) === index,
  ) */

  const genreOptions = genres1.map((genre, index) => (
    <option key={index} value={genre}>
      {genre}
    </option>
  ))

  async function handleSeachCard(data: SearchFormInputs) {
    try {
      setRemoveLoading(true)
      await fetchCard(data.query)
      reset()
    } catch (error) {
      console.error(error)
    } finally {
      setRemoveLoading(false)
    }
  }

  // eslint-disable-next-line no-undef
  async function handleGenre(event: React.ChangeEvent<HTMLSelectElement>) {
    try {
      setRemoveLoading(true)
      await fetchCard(event.target.value)
    } catch (error) {
      console.error(error)
    } finally {
      setRemoveLoading(false)
    }
  }

  return (
    <SeachFormContainer onSubmit={handleSubmit(handleSeachCard)}>
      <Test>
        <input type="text" placeholder="Search Game" {...register('query')} />

        <button type="submit">
          <MagnifyingGlass size={20} />
          Search
        </button>
      </Test>

      <SelectGenres onChange={handleGenre}>
        <option>Categories</option>
        {genreOptions}
      </SelectGenres>
    </SeachFormContainer>
  )
}
