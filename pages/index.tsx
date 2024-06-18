
import { GetServerSideProps } from 'next';
import Image from 'next/image'

import { withSSRSession } from '@frontegg/nextjs/pages';
import { AdminPortal } from '@frontegg/nextjs'
import {useAuth } from '@frontegg/nextjs';


export default function MyPage({ products }) {
  const {user} = useAuth();
  
  //baseUrl should be your FRONTEGG_APP_URL from .env.local
  const baseUrl =  'FRONTEGG_APP_URL'
  
  const logout = () => {
    window.location.href = `${baseUrl}/account/logout`;
  };

  const handleClick = () => {
    AdminPortal.show();
  };
  
  return (
    <div>
      <h1>My Page</h1>
       {products}
      <div>
        <Image 
          src={user?.profilePictureUrl} 
          alt={user?.name}
          width={50}
          height={50}
          
                />
      </div>
      <div>
        <button onClick={handleClick}>Settings</button>
      </div>
      <div>
        <span>Logged in as: {user?.name}</span>
      </div>
            <div>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRSession(
  async (context, session) => {
//     const { data } = await fetch('{external}/product', {
//      headers: {
//        Authorization: 'bearer ' + session.accessToken,
//      },
//    });
    console.log(session)
    return { props: { } };
  }
);