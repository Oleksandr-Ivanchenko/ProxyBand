import './utils/reset.scss';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { UserList } from './components/UserList';
import { Route, Routes } from "react-router-dom";
import { PostList } from './components/PostList';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/posts/:userId" element={<PostList />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
