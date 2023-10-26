import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
import { Helmet } from 'react-helmet'


const RootPage = () => {

  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
      <div className="">
        <main>
          <Outlet />
        </main>
        <ScrollRestoration />
      </div>
    </>
  );
};

export default RootPage;
