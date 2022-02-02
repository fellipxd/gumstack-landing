import React from "react";
import { Card, Grid, Wrapper } from "./styled";
import chat from "../../assets/chat.svg";
import routing from "../../assets/routing.svg";
import calendar from "../../assets/calendar.svg";
import recording from "../../assets/recording.svg";
import reminder from "../../assets/reminder.svg";
import triage from "../../assets/triage.svg";
import alarm from "../../assets/alarm.svg";
import dash from "../../assets/dash.svg";
export const Support = () => {
  return (
    <Wrapper>
      <h2>Everything you need to support your customers over video call</h2>
      <span>
        Just install your script, add your team and start delighting your
        customers.
      </span>

      <Grid>
        <Card>
          <img src={chat} alt="chat" />
          <h4>Agent Inbox</h4>
          <p>
            Allows agents to manage their queue & answer customers from any
            device.
          </p>
        </Card>

        <Card>
          <img src={routing} alt="routing" />
          <h4>Call Routing</h4>
          <p>Route your calls to the right agent.</p>
        </Card>

        <Card>
          <img src={calendar} alt="calendar" />
          <h4>Calendar</h4>
          <p>Manage your team’s schedules, availability and workload.</p>
        </Card>


        <Card>
          <img src={recording} alt="recording" />
          <h4>Recording</h4>
          <p>Use recordings to train your agents to be more effective.</p>
        </Card>


        <Card>
          <img src={reminder} alt="reminder" />
          <h4>Remiders</h4>
          <p>Notifications and alerts to agents and customers, so no calls go unanswered.</p>
        </Card> 

        <Card>
          <img src={triage} alt="triage" />
          <h4>Triaging</h4>
          <p>Manually assign calls to agents based on their schedules.</p>
        </Card>

        <Card>
          <img src={alarm} alt="alarm" />
          <h4>Scheduling</h4>
          <p>Automatically assign scheduled calls to the available agent.</p>
        </Card>

        <Card>
          <img src={dash} alt="dash" />
          <h4>Dashboard</h4>
          <p>Monitor response times and improve the overall customer experience.</p>
        </Card>
      </Grid>
    </Wrapper>
  );
};
