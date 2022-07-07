import style from './EventBoard.module.css';

export const EventBoard = ({ events }) => {
  return (
    <div className={style.eventBoard}>
      {events.map(event => (
        <div key={event.name}>{event.name}</div>
      ))}
    </div>
  );
};
