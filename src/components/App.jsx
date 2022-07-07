import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';

export const App = () => {
  return (
    <div>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard />
    </div>
  );
};
