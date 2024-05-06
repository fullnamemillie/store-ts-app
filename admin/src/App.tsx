import React, { useEffect } from 'react';
import { Admin, DataProvider, Resource } from 'react-admin';
import { CssBaseline } from '@mui/material';
import buildHasuraProvider from 'ra-data-hasura';
import { MenuList } from '@/components/Menu/MenuList/MenuList';
import { MenuEdit } from '@/components/Menu/MenuEdit/MenuEdit';
import { MenuCreate } from '@/components/Menu/MenuCreate/MenuCreate';
import authProvider from '@/services/auth-provider';
import { apolloClient } from '@/api/apollo-client';
import { theme } from './theme';

function App() {
  const [dataProvider, setDataProvider] =
    React.useState<DataProvider<string> | null>(null);

  useEffect(() => {
    const builddataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        client: apolloClient,
      });

      setDataProvider(() => dataProvider);
    };

    builddataProvider();
  }, []);

  if (dataProvider === null) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <div>
      <CssBaseline />
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        requireAuth
        theme={theme}
      >
        <Resource
          name="menu"
          list={<MenuList />}
          edit={<MenuEdit />}
          create={<MenuCreate />}
          options={{ label: 'Menu' }}
        />
      </Admin>
    </div>
  );
}

export default App;
