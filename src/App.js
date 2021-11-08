import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home/Home'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import './App.css';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Appointment from './Components/Appointment/Appointment';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MedicineDetails from './Components/MedicineDetails/MedicineDetails';
import AuthProvider from './context/AuthProvider';
import DoctorAppointment from './Components/DoctorAppointment/DoctorAppointment';



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <PrivateRoute path="/services">
              <Services/>
            </PrivateRoute>
            <PrivateRoute path="/medicine/:id">
              <MedicineDetails />
            </PrivateRoute>
            <PrivateRoute path="/doctor/:id">
              <DoctorAppointment/>
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blog/>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment/>
            </PrivateRoute>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="*"> 
              <PageNotFound/>
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
