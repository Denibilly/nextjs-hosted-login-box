
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import Image from 'next/image'


import { withSSRSession } from '@frontegg/nextjs/pages';
import { AdminPortal } from '@frontegg/nextjs'
import { useAuth, useAuthActions } from '@frontegg/nextjs';

export default function MyPage({ products }) {
  const { switchTenant } = useAuthActions();
  const {user} = useAuth();
  
  const [selectedTenant, setSelectedTenant] = useState(user?.tenantIds[0]);

  const logout = () => {
    window.location.href = `${process.env.BASE_URL}/account/logout`;
  };

  const handleClick = () => {
    AdminPortal.show();
  };

  const handleSwitchTenant = (tenantId) => { 
    console.log(tenantId.selectedTenant);
    switchTenant({ tenantId: tenantId.selectedTenant });
  };

  const showUserTenants = (tenants) => {
    return (
      <select
        value={selectedTenant}
        onChange={e => setSelectedTenant(e.target.value)}
      >
        {tenants.map((tenant) => (
          <option key={tenant} value={tenant}>{tenant}</option> 
        ))}
        <option key="Test" value="Test">Test - bad request in console</option> 
      </select>
    )
  }
  
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
      <br></br>
      <div>
        <label>Settings: </label>
        <button onClick={handleClick}>Settings</button>
      </div>
      <br></br>
      <div>
        <label>Switch tenant: </label>
        {showUserTenants(user?.tenantIds)}
        <button onClick={() => handleSwitchTenant({selectedTenant})}>Select Active Tenant</button>
      </div>
      <br></br>
      <div>
        <span>Logged in as: {user?.name}</span>
      </div>
      <br></br>
      <div>
        <label>Logout: </label>
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