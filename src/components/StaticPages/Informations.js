import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';

const Informations = () => {
  return (
    <div>
      <Helmet>
        <title>Informations - Boulder Bike Tour</title>
      </Helmet>
      <Container className="my-3">
        <Card fluid>
          <Card.Content>
            <Card.Header textAlign="center">Medical Guidelines</Card.Header>
            <Card.Meta textAlign="center">
              Riders safety is a primary concern at all of our races.
            </Card.Meta>
            <Card.Description>
              <p>
                The Boulder Bike Tour, a true test of endurance, requires
                preparation and planning by riders and event medical personnel.
                We work closely with city and state health and emergency service
                agencies to ensure we have the necessary medical staff and
                qualified volunteers in place at the start, throughout the
                course, and at the finish. These personnel are ready to respond
                immediately to the medical needs of runners, spectators,
                volunteers, and staff.
              </p>
              <p>
                We advise all participants to follow these precautions in order
                to have an enjoyable and stress-free experience:
              </p>
              <ul>
                <li>
                  Respect the race distance: Take part in the event only if you
                  are properly trained and physically prepared to complete the
                  full distance.
                </li>
                <li>
                  Respect your health: Consider consulting with your physician
                  when planning to participate in our event.
                </li>
                <li>
                  Respect your body: If you are injured or experience any
                  symptoms of fever, weakness, diarrhea, or vomiting prior to
                  the event that could prevent you from being physically
                  prepared to run 26.2 miles, we recommend that you consider not
                  riding the Boulder Bike Tour.
                </li>
                <li>
                  Respect your routine: Do not make any major changes to your
                  training and hydration in the days leading up to the race. On
                  race day, a simple rule is "drink to thirst." Drink both water
                  and sports drinks to stay hydrated and maintain sodium levels.
                  Don't wear new shoes for the first time on race day.
                </li>
                <li>
                  Respect the weather: Pay attention to the forecast and dress
                  for the conditions. Layer, but do not overdress. You want to
                  feel slightly chilly when you start riding.
                </li>
              </ul>
              <p>
                If you experience any feelings or symptoms that seem very
                different than you expect, seek the attention of our medical
                staff and volunteers at the start, along the course, or at the
                finish. Review the course map and be aware of the locations of
                medical stations. Every medical station has water, sports
                drinks, toilets, medical facilities, and access to
                transportation vehicles in the event that you are unable to
                complete the race.
              </p>
            </Card.Description>
          </Card.Content>
        </Card>
      </Container>
    </div>
  );
};

export default Informations;
