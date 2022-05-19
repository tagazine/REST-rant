const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <html>
      <Def>
        <main>
          <div className="row">
            <div className="col-sm-6">
              <img src={data.place.pic} alt={data.place.name} />
              <h2>
                {data.place.city}, {data.place.state}
              </h2>
            </div>
            <div className="col-sm-6">
              <h1>{data.place.name}</h1>
              <h2>Rating</h2>
              <h2>*****</h2>
              <h2>Description: </h2>
              <h3>{data.place.showEstablished()}</h3>
              <h4>Serving {data.place.cuisines}</h4>
              <br />
              <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
              </a>
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
            </div>
          </div>
        </main>
        <h2>Comments</h2>
        <h3>No comments yet!</h3>
      </Def>
    </html>
  );
}
module.exports = show;
