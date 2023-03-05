import user from '../path/to/user.json';
import data from '../path/to/data.json';
import friends from '../path/to/friends.json';
import transactions from '../path/to/transactions.json';
import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import FriendList from './friends/friendList';
import TransactionHistory from './transactionsHistory/TransactionHistory';
import css from './App.module.css'

export const App = () => {
  return (<>
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

    </div>
    <div className={css.container}>
      <Statistics title="Upload stats" stats={data} />
    </div>
    <div className={css.container}>
      <FriendList friends={friends} /></div>
    <div className={css.container}>
      <TransactionHistory items={transactions} />;
    </div>
  </>
  );
};

