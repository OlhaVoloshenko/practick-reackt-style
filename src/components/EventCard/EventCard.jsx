import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constans';
import style from './EventCard.module.css';
import { Card, EventName } from './EventCard.styled';

export const EventCard = ({ name, location, speaker, type, start, end }) => {
  const formatedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <Card>
      <EventName>{name}</EventName>
      <p className={style.info}>
        <FaMapMarkerAlt className={style.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={style.info}>
        <FaUserAlt className={style.icon} size={16} />
        {speaker}
      </p>
      <p className={style.info}>
        <FaCalendarAlt className={style.icon} size={16} />
        {formatedStart}
      </p>
      <p className={style.info}>
        <FaClock className={style.icon} size={16} />
        {duration}
      </p>
      <span className={`${style.chip} ${style[type]}`}>{type}</span>
    </Card>
  );
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
