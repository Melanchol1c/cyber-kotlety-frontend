import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';

import { fetchEvent } from './store/actions';
import DataLoader from 'app/common/DataLoader/DataLoader';
import EventPageRouting from './router';
import EventTabs from './EventTabs/EventTabs';

const EventPage = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const { title, startDate, finishDate, background, prize, teamsCount } = useSelector(state => state.eventPage.event);
  const loading = useSelector(state => state.eventPage.loading);

  useEffect(() => {
    dispatch(fetchEvent(eventId));
  }, [dispatch]);

  const renderEventContent = loading ? (
    <DataLoader />
  ) : (
    <div className="event-wrapper">
      <div className="event-bg" style={{ backgroundImage: `url(${background})` }} />
      <div className="event-content">
        <div className="container">
          <div className="head">
            <div className="date">
              {startDate} - {finishDate}
            </div>
            <h1>{title}</h1>
            <div className="prize">
              <b>{prize}$</b> • <b>{teamsCount}</b> Participants
            </div>
          </div>

          <EventTabs />
          <div className="main-content container-fluid">
            <EventPageRouting />
          </div>
        </div>
      </div>
    </div>
  );

  return <>{renderEventContent}</>;
};

export default EventPage;
