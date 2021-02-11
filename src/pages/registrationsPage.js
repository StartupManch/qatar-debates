import React from "react";
import { Card } from "react-bootstrap";
import RegAreaChart from "./regAreaChart";
import ContryTableChart from "./countryTableChart";

export default function RegistrationsPage() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Card className="regCard">
            <Card.Body>
              <Card.Title>1000</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Regsitration
              </Card.Subtitle>
              <Card.Text>20% More that a Week</Card.Text>
            </Card.Body>
          </Card>
          <Card className="regCard">
            <Card.Body>
              <Card.Title>1000</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Regsitration
              </Card.Subtitle>
              <Card.Text>20% More that a Week</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-9">
          <RegAreaChart />
        </div>
      </div>

      <div className="row">
        <ContryTableChart />
        {/* <div className="col-md-8">
         <CountryTable />   
       </div>   
       <div className="col-md-4">
         <
       </div> */}
      </div>
    </div>
  );
}
