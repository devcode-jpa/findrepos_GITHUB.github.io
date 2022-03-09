import React, { useContext } from 'react';

import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetails from '../components/userDetails';
import UserNumbers from '../components/userNumbers';
import { context } from '../context';

export default function Home() {
  const ctext = useContext(context);
  return (
      <Container>
          <Header />
          <UserContainer>
            {ctext.userData?.name?
              <React.Fragment>
                <UserPicture url={ctext.userData?.avatar_url} AlterText={ctext.userData?.login} />
                <UserDetails name={ctext.userData?.name} login={ctext.userData?.login} bio={ctext.userData?.bio} />
                <UserNumbers repos={ctext.userData?.public_repos} followers={ctext.userData?.followers} following={ctext.userData?.following} />
              </React.Fragment>
            : undefined }
          </UserContainer>
      </Container>
  );
}