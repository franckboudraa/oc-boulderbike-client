import React from 'react';
import { Card, Container } from 'semantic-ui-react';

const ProhibitedItems = () => {
  return (
    <Container className="my-3">
      <Card fluid>
        <Card.Content>
          <Card.Header textAlign="center" className="mb-3">
            Prohibited Items
          </Card.Header>
          <Card.Meta className="mb-3">
            In order to ensure the safety of all Boulder Bike Tour participants,
            spectators, and partners, BBT direction has added two categories of
            items to its list of prohibited objects at all race-week and
            race-day events. As always, all bags and items entering Boulder Bike
            Tour venues and events are subject to inspection by BBT direction,
            contracted private security personnel, venue personnel, and the
            Bouler Police Department.
          </Card.Meta>
          <Card.Description>
            The following items are prohibited from all BBT direction events and
            race venues:
            <ul>
              <li>
                A weapon of any kind, including firearms, knives, Mace, etc.
              </li>
              <p />
              <li>
                Any dangerous item or “dual-use” item that could be considered
                dangerous, including hammers, saws, sharp objects, etc.
              </li>
              <p />
              <li>
                Flammable liquids, fuels, fireworks, toxic chemicals, and
                explosives
              </li>
              <p />
              <li>Large packages, coolers, tents, and lean-tos</li>
              <p />
              <li>Duvets, sleeping bags, and large blankets or comforters</li>
              <p />
              <li>Alcoholic beverages and illegal substances of any kind</li>
              <p />
              <li>
                Unmanned aerial devices, drones, survey balloons, photography
                mini-copters, and any flying device with an on/off switch.
              </li>
              <p />
              <li>
                Opaque trash bags and any non-transparent plastic bags (Clear
                trash bags are allowed.)
              </li>
              <p />
              <li>Animals/pets</li>
              <p />
              <li>Folding chairs, camp chairs, and tables of any kind</li>
              <p />
              <li>Glass containers</li>
              <p />
              <li>Containers of liquid larger than one liter</li>
              <p />
              <li>Strollers</li>
              <p />
              <li>Suitcases and rolling bags</li>
              <p />
              <li>Backpacks and any bags other than the UPS Baggage Bag </li>
              <p />
              <li>
                Camelbaks® and any type of hydration backpack (Fuel belts and
                hand-held water bottles are allowed.)
              </li>
              <p />
              <li>
                Weight vests and any vests with multiple pockets, especially
                those that can be used as a water reservoir
              </li>
              <p />
              <li>
                Costumes that cover the face and any bulky outfits that extend
                beyond the perimeter of the body (Form-fitting outfits are
                allowed.)
              </li>
              <p />
              <li>
                Props, including flagpoles, sporting equipment, military and
                fire gear, and signs larger than 11”x17”
              </li>
              <p />
              <li>
                Selfie-sticks and any camera mount or rig that isn’t attached
                directly to the head or torso
              </li>
              <p />
              <li>
                Photocopies or reproductions of Boulder Bike Tour runner bibs or
                credentials
              </li>
            </ul>
            <h3>Race Numbers/Bibs</h3>
            <p>
              Race numbers must be visible at all times while on official
              Boulder Bike Tour transportation, entering and within the start
              villages, in the corrals, and on the race course. Amenities and
              medals will be denied to runners who do not display a race number.
            </p>
            <p>
              <strong>
                Please note that race numbers are non-transferable
              </strong>; you cannot give or sell your number or tag to another
              person or participate with an unofficial race number or tag. A
              participant who does not wear his or her assigned race number and
              tag, or who is found to have transferred, bought, or sold entry
              into an BBT direction event, or otherwise permitted any other
              individual to wear his or her race number, will be disqualified
              and suspended from subsequent BBT direction events.{' '}
              <strong>
                This policy is extremely important to ensure we have accurate
                medical information about every participant.
              </strong>
            </p>
            <p>
              Your cooperation, patience, and understanding are greatly
              appreciated as we enhance and expand our security efforts to make
              your Boulder Bike Tour experience safe and enjoyable.
            </p>
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default ProhibitedItems;
