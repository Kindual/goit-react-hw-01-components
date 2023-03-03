import user from '../path/to/user.json';
import data from '../path/to/data.json';
import friends from '../path/to/friends.json';
import transactions from '../path/to/transactions.json';
import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import FriendList from './friends/friendList';
import TransactionHistory from './transactionsHistory/TransactionHistory';

export const App = () => {
  return (<>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={data} />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />;
  </>
  );
};

