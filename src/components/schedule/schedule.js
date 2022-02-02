import React from "react";
import { Header, Wrapper, Box, Card, Card2 } from "./styled";
import vector from "../../assets/vector.svg";
import { Button2 } from "../buttons/Button";
export const Schedule = () => {
  return (
    <Wrapper>
      <Header>
        <p>
          Worried about missing calls from customers? What if your team is busy
          or not available?
        </p>
        <h2>Let customers schedule calls when you are not around</h2>
      </Header>
      <Box>
        <div className="left">
          <Card>
            <p className="p1">When would you like to schedule the call?</p>
            <div className="calender">
              <div className="date">
                <p>WED</p>
                <p>Mar 6</p>
              </div>
              <div className="date">
                <p>WED</p>
                <p>Mar 6</p>
              </div>
              <div className="date">
                <p>WED</p>
                <p>Mar 6</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="right">
          <h3>Schedule callback when you are not around</h3>
          <div>
            <p >
              <img src={vector} alt="bullet" /> Automatically capture contact
              details and schedule callback
            </p>
            <p>
              <img src={vector} alt="bullet" />
              Book meeting only during your office hours
            </p>
            <p>
              <img src={vector} alt="bullet" />
              Use any software to complete the call- Zoom, Meet, or just phone
            </p>
          </div>
        </div>
      </Box>
      <Box>
        <div className="left2">
          <h3>
            Sync your team’s calendar and manage schedules without a separate
            calendar software
          </h3>
          <div>
            <p>
              <img src={vector} alt="bullet" /> Show availability across your agents’ calendar
            </p>
            <p>
              <img src={vector} alt="bullet" />
              Send reminders so that they don’t forget their appointments
            </p>
            <p>
              <img src={vector} alt="bullet" />
              Add calls to your calendar or CRM
            </p>
          </div>
        </div>
        <div className="left">
          <Card2>
            <p className="p2">Sync your Googe Calendar account and update it as calls gets scheduled on Gumstack</p>
            <div className="search">
              <input type="text" placeholder="George@gmail.com"/>
              <button>Add</button>
            </div>
          </Card2>
        </div>
      </Box>
      <Button2 className="btn">Get in touch</Button2>
    </Wrapper>
  );
};
