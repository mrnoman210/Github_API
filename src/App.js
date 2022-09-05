import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ArtScreen from './screens/CreateArtScreen';
import ArtsScreen from './screens/ArtsScreen';
import CreateArtScreen from './screens/CreateArtScreen';
import HomeScreen from './screens/HomeScreen';
import Art from './screens/Art';
import Home from './screens/Home';
import { TodosContextProvider } from './context/TodoContext';
import UsersScreen from './screens/UsersScreen';

const App = () => {
  return (
    <BrowserRouter>
      <nav className='header'>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/arts'}>Arts</NavLink>
          </li>
          <li>
            <NavLink to={'/users'}>Users</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path='/'
          element={
            <TodosContextProvider>
              <HomeScreen />
            </TodosContextProvider>
          }
        />
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='/' element={<CreateArtScreen />} /> */}
        <Route path='/arts' element={<ArtsScreen />} />
        {/* <Route path='/art' element={<Art />} /> */}
        <Route path='/arts/:artId' element={<ArtScreen />} />
        <Route path='/users' element={<UsersScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
