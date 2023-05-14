import * as React from 'react';
import Box from '@mui/material/Box';
import FormDialog from './components/allowances/FormDialog'
import Form from './components/corporate-registration/Form';
import NavBar from './components/navbar/NavBar.js';
import LandingPage from './components/main/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Box sx={{display:"flex"}} bgcolor="primary">
      <NavBar />
      <Box
        component="main" 
        sx={{ flexGrow: 1, bgcolor: 'background.default', m: 3 }}
      >
        <FormDialog/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/register' element={<Form/>}></Route>
        </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
}
export default App;
