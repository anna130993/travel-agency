import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';

import Home from '../src/components/views/Home/Home';
import Trips from '../src/components/views/Trips/TripsContainer';
import Trip from '../src/components/views/Trip/TripContainer';
import Countries from '../src/components/views/Countries/CountriesContainer';
import Country from '../src/components/views/Country/CountryContainer';
import Regions from '../src/components/views/Regions/RegionsContainer';
import Info from '../src/components/views/Info/Info';
import NotFound from '../src/components/views/NotFound/NotFound';
import styles from './App.scss';
import parseTrips from '../src/utils/parseTrips';
import {setMultipleStates} from '../src/redux/globalRedux';
import { AnimatedSwitch } from 'react-router-transition';

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    setStates: PropTypes.func,
  }

  constructor(props){
    super(props);
    // parse trips when App is first created
    parseTrips(this.props.trips, this.props.setStates);
  }

  componentDidUpdate(prevProps){
    if(prevProps.trips != this.props.trips){
      // parse trips again if they changed
      parseTrips(this.props.trips, this.props.setStates);
    }
  }

  render(){
    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className={styles.switchWrapper}
          >
            <Route exact path='/' component={Home} />
            <Route exact path='/trips' component={Trips} />
            <Route exact path='/trip/:id' component={Trip} />
            <Route exact path='/countries' component={Countries} />
            <Route exact path='/country/:id' component={Country} />
            <Route exact path='/regions' component={Regions} />
            <Route exact path='/info' component={Info} />
            <Route path='*' component={NotFound} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips,
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
