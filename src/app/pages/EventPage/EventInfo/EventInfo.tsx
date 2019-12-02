import React from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

const EventInfo = () => {
  const { title, startDate, location, finishDate, stage, prize, teamsCount } = useSelector(
    state => state.eventPage.event,
  );

  return (
    <div>
      <div className="info-card">
        <div className="mb-2">
          <b className="head-title">
            Tournament <div className="stage">{stage} Stage</div>
          </b>
        </div>
        <div className="text">
          <b>{title}</b>
        </div>
        <div className="text">
          Dates:{' '}
          <b>
            {startDate} - {finishDate}
          </b>
        </div>
        <div className="text">
          Prize: <b>{prize}$</b>
        </div>
        <div className="text">
          Location: <b>{location}</b>
        </div>
      </div>
      <div className="info-card">
        <div className="mb-2">
          <b className="head-title">Participants</b>
        </div>

        <div className="teams">
          <div className="team">
            <img src="/assets/images/vp-logo.png" />
            <span>VP</span>
          </div>
          <div className="team">
            <img src="/assets/images/og-logo.png" />
            <span>OG</span>
          </div>
          <div className="team">
            <img src="/assets/images/alliance-logo.png" />
            <span>Alliance</span>
          </div>
          <div className="team">
            <img src="/assets/images/vp-logo.png" />
            <span>VP</span>
          </div>
          <div className="team">
            <img src="/assets/images/og-logo.png" />
            <span>OG</span>
          </div>
          <div className="team">
            <img src="/assets/images/alliance-logo.png" />
            <span>Alliance</span>
          </div>
          <div className="team">
            <img src="/assets/images/vp-logo.png" />
            <span>VP</span>
          </div>
          <div className="team">
            <img src="/assets/images/og-logo.png" />
            <span>OG</span>
          </div>
          <div className="team">
            <img src="/assets/images/alliance-logo.png" />
            <span>Alliance</span>
          </div>
          <div className="team">
            <img src="/assets/images/vp-logo.png" />
            <span>VP</span>
          </div>
          <div className="team">
            <img src="/assets/images/og-logo.png" />
            <span>OG</span>
          </div>
          <div className="team">
            <img src="/assets/images/alliance-logo.png" />
            <span>Alliance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
