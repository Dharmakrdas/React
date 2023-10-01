/**
 * <div>
 *   <h1>this is H1 tag</>
 *  </div>
 */

// const heading = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "This is H1 tag")
// );

/**
 * <div>
 *   <h1>this is H1 tag</>
 *   <h2>this is H2 tag<h2/>
 *  </div>
 */

// const heading = React.createElement("div", {}, [
//   React.createElement("h1", {}, "This is H1 tag"),
//   React.createElement("h2", {}, "This is H2 tag"),
// ]);

/**
 * <div>
 *   <div>
 *    <h1>this is H1 tag</>
 *    <h2>this is H2 tag<h2/>
 *   </div>
 *   <div>
 *    <h1>this is H1 tag</>
 *    <h2>this is H2 tag<h2/>
 *   </div>
 * </div>
 */

const heading = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "This is H1 tag"),
        React.createElement("h2", {id:"heading"}, "This is H2 tag"),
      ]),
      React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "This is H1 tag"),
        React.createElement("h2", {id:"heading"}, "This is H2 tag"),
      ])
  ]);

// this is simple code to hello word in React
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello is from React JS"
// );
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(heading);
