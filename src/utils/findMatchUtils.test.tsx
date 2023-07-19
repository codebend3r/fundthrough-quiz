import { findMatchById } from './findMatchUtils'

describe('findMatchById', () => {
  it('should return TRUE if setup and punchline matches', () => {
    const setup = {
      id: 234,
      setup: "Why can't your nose be 12 inches long?",
    }

    const punchline = {
      id: 234,
      punchline: "Because then it'd be a foot!",
    }

    const result = findMatchById({
      setup,
      punchline,
    })

    expect(result).toBe(true)
  })

  it('should return FALSE if setup and punchline matches', () => {
    const setup = {
      id: 145,
      setup: "Why can't your nose be 12 inches long?",
    }

    const punchline = {
      id: 434,
      punchline: "Because then it'd be a foot!",
    }

    const result = findMatchById({
      setup,
      punchline,
    })

    expect(result).toBe(false)
  })
})
