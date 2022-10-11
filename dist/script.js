import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

function App() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement(Card, {
      img: "https://www.mweb.co.za/media/images/providers/provider-openserve.png",
      title: "25Mbps Uncapped Fibre",
      description: "Unthrottled",
      line: "FREE Installation + Router",
      price: "R499pm" }), /*#__PURE__*/


    React.createElement(Card, {
      img: "https://www.mweb.co.za/media/images/providers/provider-openserve.png",
      title: "50Mbps uncapped",
      description: "Unthrottled",
      line: "FREE Installation + Router",
      price: "R689pm" }), /*#__PURE__*/


    React.createElement(Card, {
      img: "https://www.mweb.co.za/media/images/providers/provider-openserve.png",
      title: "50Mbps uncapped fibre lite",
      description: "Unthrottled",
      line: "FREE Installation + Router",
      price: "R679pm" })));



}

function CoverageButton({ onClick }) {
  return /*#__PURE__*/(
    React.createElement("button", { className: "card__btn",
      onClick: "{onClick}" }, "Check Coverage"));



}

function Card(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "card" }, /*#__PURE__*/
    React.createElement("div", { className: "card__body" }, /*#__PURE__*/
    React.createElement("h4", { className: "card__title" }, props.title), /*#__PURE__*/
    React.createElement("p", { className: "card__description" }, props.description), /*#__PURE__*/
    React.createElement("p", { className: "card__description" }, props.line)), /*#__PURE__*/

    React.createElement("div", { className: "subcard" }, /*#__PURE__*/
    React.createElement("h3", { className: "card_price" }, props.price), /*#__PURE__*/
    React.createElement("img", { src: props.img, class: "card__image" }), /*#__PURE__*/
    React.createElement(CoverageButton, { onClick: "{onClick}" }))));



}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));