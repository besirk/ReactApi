
import CatFactInfo from './CatFactInfo';
import CatFactLoader from './CatFactLoader';
import UserInfo from './userInfo';
import SingleUserLoader from './SingleUserLoader';
import UserLoader from './UserLoader';
import ResourceLoader from './ResourceLoader';
import DataSource from './DataSource';
import axios from 'axios';


const getServerData = (url,id) => async() => {
    const response = await axios.get(url+id);
    return response.data;
}

// const userIds = [5,6,7];

function App() {

  return (
    <div>
      {/* <CatFactLoader>
        <CatFactInfo />
      </CatFactLoader> */}
      {/* <SingleUserLoader>
        <UserInfo />
      </SingleUserLoader> */}
      {/* <UserLoader userId={10}>
        <UserInfo />
      </UserLoader>

      <ResourceLoader resourceUrl={"https://fakestoreapi.com/users/1"} resourceName="user">
        <UserInfo />
      </ResourceLoader> */}

      {/* map userIds array to create users with the ids we want */}
      {/* {userIds.map((user) => {
        return (
        <UserLoader userId={user} key={user} >
          <UserInfo />
        </UserLoader>
      )})} */}
     

      <DataSource getDataFunc={getServerData('https://fakestoreapi.com/users/',4)} resourceName="user" >
          <UserInfo /> 
      </DataSource>
    </div>
  )
}

export default App
