const People = (props) => {
  const { people } = props;
  return (
    <div>
        {people.map(person => {
          return <p key={person.id}>{person.name} {person.number}</p>
        })}
      </div>
  )
}

export default People;