import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Icon } from 'semantic-ui-react';

export default class FAQAccordion extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          How to applying for entry to the Boulder Bike Tour?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            The general-entry application period for the 2020 Boulder Bike Tour
            will be January 15-February 15, 2020. Riders must have applied for
            the general entry drawing or claimed their guaranteed entry during
            this one-month application period. Guaranteed entries not claimed
            during this time period are forfeited.
          </p>
          <p>
            <Link to="/sponsorship">Visit the "Sponsorship" page.</Link>
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What is the cancellation policy?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            All Boulder Bike Tour fees are non-refundable. If you cancel your
            entry, it cannot be reinstated for the current year's Boulder Bike
            Tour. If you cancel this year (and did not cancel last time) and you
            want to guarantee your entry for the following event, you'll need to
            apply for the upcoming race during the application window and pay
            the processing and entry fees required. Riders who have guaranteed
            entry to the 2020 race because they cancelled in 2010 cannot cancel
            a second time and become eligible for guaranteed entry in 2030.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Are there toilets at the start?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            There are more than 1,500 toilets in the start villages and the
            start corrals. Along the course, toilets are located every mile from
            mile 3 onward. Boulder City reserves the right to disqualify anyone
            who uses any alternative to the supplied toilets.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
