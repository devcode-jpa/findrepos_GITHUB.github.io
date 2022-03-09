import React, { useContext } from 'react';

import Container from '../components/container';
import ReposContainer from '../components/reposContainer';

import { context } from '../context';

const Repos = props => {
    const ctext = useContext(context);

    return (
        <Container>
            <ReposContainer name={ctext.userData?.name} repos={ctext.repos} />
        </Container>
    );
}

export default Repos;