import { involve } from '../../data/content'
import Rail from '../ui/Rail'

export default function Involve() {
  return (
    <Rail
      id="involve"
      title="How to get involved"
      subtitle="Train with us, shadow the ministry, or serve on the team."
      learnMoreHref="#connect"
      viewAllHref="#connect"
      tone="surface"
    >
      {involve.map((item) => (
        <article className="involve-tile" key={item.title}>
          <img src={item.image} alt="" />
          <div className="involve-tile__body">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <a className="text-link" href={item.href}>
              {item.action}
            </a>
          </div>
        </article>
      ))}
    </Rail>
  )
}
