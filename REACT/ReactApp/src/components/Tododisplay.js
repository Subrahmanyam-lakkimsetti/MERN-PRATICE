import './Tododisplay.css';
const Tododisplay = ({ data, dooer, date }) => {
  const filteredArray = data.filter((array) => {
    if (dooer.length > 0) {
      if (dooer !== array.assignment) return false;
    }

    if (date.length > 0) {
      if (date !== array.date) return false;
    }

    return true;
  });

  return (
    <>
      <div className="cards">
        {filteredArray.map((elements) => {
          return (
            <div className="card">
              <h3 className="tittle">Task tittle : {elements.name}</h3>
              <p className="date">
                {' '}
                <small>addeed date : {elements.date}</small>
              </p>
              <p className="description">
                <b>Task description : </b>
                {elements.description}
              </p>
              <p className="assinee">
                <b>assigned to : </b>
                {elements.assignment}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tododisplay;
