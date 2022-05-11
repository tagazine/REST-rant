const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img src="/images/market.jpg" alt="Market" height='300px' width='500px'/>
          <div>Photo by <a href="https://unsplash.com/@thomasble?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thomas Le</a> on <a href="unsplash.com">Unsplash</a></div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
