import '@testing-library/jest-dom'
import { render } from 'utils/testUtils'
import Auth from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const query = {}

useRouter.mockImplementation(() => ({
  query
}))

describe('<Auth />', () => {
  it('should render Auth with Logo', () => {
    const { getByText } = render(<Auth />)

    expect(getByText('examina')).toBeInTheDocument()
    expect(getByText('bem')).toBeInTheDocument()
  })
  it('should render Auth with inputs', () => {
    const { getByLabelText } = render(<Auth />)

    expect(getByLabelText('email')).toBeInTheDocument()
    expect(getByLabelText('password')).toBeInTheDocument()
  })

  it('should render Auth with forgot password link', () => {
    const { getByRole } = render(<Auth />)

    expect(getByRole('link')).toHaveAttribute('href', '/forgot-password')
  })

  it('should render Auth with button', () => {
    const { getByRole } = render(<Auth />)
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('should match with snapshot ', () => {
    const { container } = render(<Auth />)

    expect(container).toMatchSnapshot()
  })
})
