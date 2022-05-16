const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <html>
      <Def>
        <main>
          <h1>{data.place.name}</h1>
          <img src={data.place.pic} alt={data.place.name} />
          <h2>Rating: *****</h2>
          <h2>Description: {data.place.cuisines}</h2>
          <h2>
            {data.place.city}, {data.place.state}
          </h2>
          <br />
          <br />
        </main>
        <h2>Comments</h2>
        <br />
        <br />
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <br />
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </Def>
    </html>
  );
}
module.exports = show;
