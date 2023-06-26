import styled from 'styled-components';
import { Container } from '@mui/system';
import { Box } from '@mui/material';
import SideBar from '../../../components/sideBar/SideBar';
import NavBarDashBoard from '../../../components/navbarDashboard';
import SearchDashboard from '../../../components/searchDashboard/Search';
import Provider from '../../../context/Provider';
import Table from '../../../components/table';
import { rows, columns } from '../../../dummyData';

const PageContent = styled.div`
margin-top: 5rem;
`;

const StyleTable = styled.div`
margin-top: 1rem !important;
padding
`;

const DashOrderPage = () => (
  <Provider>
    <Box mt={2}>
      <NavBarDashBoard />
      <Box sx={{ display: 'flex' }} height="100%">
        <SideBar />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Container>
            <Box>
              <PageContent>
                <SearchDashboard btnText="Search" />
                <StyleTable>
                  <Table rows={rows} columns={columns} />
                </StyleTable>
              </PageContent>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  </Provider>

);

export default DashOrderPage;
