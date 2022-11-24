import { Admin, Resource, ListGuesser } from "react-admin";
import { CountryList } from "./CountryList";
import { fakeJsonDataProvider } from './fakeData/reproDataProvider';

const App = () => (
    <Admin dataProvider={fakeJsonDataProvider}>
      <Resource name="country" list={CountryList} />
    </Admin>
);

export default App;