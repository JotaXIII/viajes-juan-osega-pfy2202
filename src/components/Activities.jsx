export function Activities({ items }) {
  return (
    <ul className="activities" aria-label="Actividades populares">
      {items.map((activity) => <li key={activity}>{activity}</li>)}
    </ul>
  )
}
