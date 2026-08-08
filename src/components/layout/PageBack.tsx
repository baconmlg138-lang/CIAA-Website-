import { Link } from 'react-router-dom'

export default function PageBack() {
  return (
    <div className="page-back">
      <Link className="btn btn--dark" to="/">
        Back to home
      </Link>
    </div>
  )
}
