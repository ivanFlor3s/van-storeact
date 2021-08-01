import React from "react";
import "./Opinion.style.scss";
import { Form, Col, Row, Image } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const tsToDate = (ts) => {
 

  var a = new Date(ts * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min =   a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;

};

export const Opinion = ({ opinion }) => {
  return (
    <Row style={{ color: "white" }}>
      <Col xs={12}>
        <small className="text-muted"> { tsToDate(opinion.ts.seconds)} </small>
      </Col>
      <Col xs={2}>
        <Image fluid   src="/images/user3.png"/>
      </Col>
      <Col xs={6}>
        <p>{opinion.observacion}</p>
      </Col>
      <Col xs={4}>
        <Row style={{ textAlign: "center" }}>
          <h1>{opinion.rate}</h1>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <StarRatings
            rating={opinion.rate}
            numberOfStars={5}
            starRatedColor="rgb(13,110,253)"
            starDimension="15px"
            starSpacing="3px"
            starHoverColor="#ffffff"
          />
        </Row>
      </Col>
    </Row>
  );
};
