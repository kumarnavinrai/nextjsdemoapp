const KittenItem = ({ kitten, index, inProgress, handleUpdate, handleDelete }) => (
  <div className={inProgress === kitten.id ? 'inProgress' : ''} title={`id: ${kitten.id}`}>
    {kitten.name}
    <a className='update' onClick={handleUpdate.bind(this, index, kitten.id)}>Update</a>
    <a className='delete' onClick={handleDelete.bind(this, index, kitten.id)}>Delete</a>
    <style jsx>{`
      a {
        margin-left: 0.5em;
        cursor: pointer;
        font-size: 0.6em;
        text-transform: uppercase;
      }
      a.update {
        color: lime;
      }
      a.delete {
        color: tomato;
      }

      .inProgress {
        opacity: 0.3;
      }
    `}</style>
  </div>
)
export default KittenItem
