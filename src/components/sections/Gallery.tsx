import { gallery } from '../../data/content'
import Rail from '../ui/Rail'

export default function Gallery() {
  return (
    <Rail
      id="stories"
      title="Explore the stories"
      subtitle="From the field to the huddle — this is what it looks like when athletes chase more."
      learnMoreHref="/connect"
      viewAllHref="/connect"
    >
      {gallery.map((item) => (
        <figure className="story-card" key={item.src}>
          <img src={item.src} alt={item.caption} loading="lazy" />
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </Rail>
  )
}
