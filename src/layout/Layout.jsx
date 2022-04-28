import React from 'react';
import TopNavBar from '../navigation/TopNavBar.jsx';
import SideBar from '../navigation/SideBar.jsx';
import styled from 'styled-components';

// component styles
const Wrapper = styled.div`
    @media (min-width: 700px) {
        display: flex;
        top: 60px;
        position: relative;
        height: calc(100% - 64px);
        width: 100%;
        flex: auto;
        flex-direction: column;
    }
`;
const Main = styled.main`
    position: fixed;
    height: calc(100% - 185px);
    width: 100%;
    padding: 1em;
    overflow-y: scroll;
    @media (min-width: 700px) {
        flex: 1;
        margin-left: 260px;
        height: calc(100% - 64px);
        width: calc(100% - 260px);
		overflow-y: scroll;
    }
`;

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <TopNavBar />
		<Wrapper>
        <div className="navigationWrapper">
            <SideBar />
            <Main>{children}</Main>
        </div>
		</Wrapper>
    </React.Fragment>
    );
};
export default Layout;