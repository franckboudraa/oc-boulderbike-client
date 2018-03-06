import React from 'react';
import { Card, Container } from 'semantic-ui-react';

const ArticleItem = () => {
  return (
    <Container className="mt-3">
      <Card fluid>
        <Card.Content>
          <Card.Header>Running & Sleeping</Card.Header>
          <Card.Meta>March 6, 2018 by Franck</Card.Meta>
          <Card.Description className="mt-3">
            <p>
              <strong>Stay Dry and Cool</strong>
            </p>
            <p>
              Temperature makes all the difference to your sleep—this means
              keeping your room cool, around 67 degrees, and controlling
              humidity by keeping moisture away from your body with breathable
              fabrics. When your body gets overheated, you flip over to try to
              cool yourself down, causing a disruption in your sleep. Bedding
              layers that circulate and balance your body heat with your
              environment make it easier for your body to follow its natural
              circadian rhythm of dropping two degrees at night for cellular
              rejuvenation, and reduces sensations of restlessness. BEDGEAR’s
              patented, air flow enhancing fabric technologies work to wick away
              heat and moisture to help regulate your body temperature in order
              to generate a more comfortable night’s sleep.
            </p>
            <p> </p>
            <p>
              <strong>Keep Your Spine Aligned</strong>
            </p>
            <p>
              Spinal alignment is essential for maximizing your recovery while
              you sleep and it is dependent on choosing the right, personalized
              products that work for you and support your body’s needs. Pressure
              points, and the pull of the heavier parts of your body such as the
              hips and thighs in runners, can cause your lower back to torque,
              compelling you to unconsciously change position in order to get
              more support from your mattress. Having the right pillow to
              support the weight of your head, neck, and shoulders—and even the
              addition of a leg pillow—can help you stay in one position longer,
              which will lead to a more restful night.
            </p>
            <p> </p>
            <p>
              <strong>Stay On Your Sleep Path </strong>
            </p>
            <p>
              Don’t change any habits before the race such as your sleep
              position or your diet to ensure that you perform at your best.
              Your sleep patterns two or three days before you race will give
              you the reserves you need to get through your 26.2-mile run, the
              night or two before can do damage if you are uncomfortable! If
              possible, travel with a pillow that you know fits you, so you
              don’t risk neck strain or tossing and turning from having the
              wrong gear in your hotel room.
            </p>
            <p> </p>
            <p>
              <strong>Rest and Recovery! </strong>
            </p>
            <p>
              Make sure you are getting adequate sleep in the weeks leading up
              to the marathon, as well as after the marathon, so your body can
              be prepared for race day endurance and recover properly. Set a
              schedule that helps you get to bed earlier and get up earlier, so
              you will be ready for race day’s early start. It’s important to
              build a routine that gives you reserves, as pre-race day
              adrenaline can keep you up. Don’t forget, your marathon strength
              comes from having a personalized fit sleep regimen as part of your
              training.
            </p>
            <p style={{ textAlign: 'right' }}>
              Source:{' '}
              <a
                href="https://www.tcsnycmarathon.org/running-and-sleep"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.tcsnycmarathon.org/running-and-sleep
              </a>
            </p>
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default ArticleItem;
