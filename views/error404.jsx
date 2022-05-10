const React = require('react');
const Def = require('./default');

function error404(){
    return (
        <Def>
            <main>
                <h1>404: Page Not Found</h1>
                <p>Wrong Page, Dummy!</p>
                <img src="http://placekitten.com/200/300" alt="Cat" />
                <div>Photo by <a href="placekitten.com">placekitten</a></div>

            </main>
        </Def>
    )
}

module.exports = error404;