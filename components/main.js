import { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';

import LaunchPanel from './launchPanel';
import Filters from './filters';

import styles from './main.module.css';

export default function Header (props) {
    const [filterYear, setFilterYearClick] = useState('');
    const [sucessfulLaunch, setFilterSucessfulLaunch] = useState();
    const [sucessfulLanding, setFilterSucessfulLanding] = useState();
    const [launchData, setLaunchData] = useState(props.launchData);

    let handleFilterYearClick = function(year) {
        if (filterYear === year) {
            setFilterYearClick('');
        } else {
            setFilterYearClick(year);
        }
    }

    let handleFilterSucessfulLaunch = function(filter) {
        if (sucessfulLaunch === filter) {
            setFilterSucessfulLaunch()
        } else {
            setFilterSucessfulLaunch(filter)
        }        
    }

    let handleFilterSucessfulLanding = function(filter) {
        if (sucessfulLanding === filter) {
            setFilterSucessfulLanding()
        } else {
            setFilterSucessfulLanding(filter)
        }
    }

    useEffect(() => {
        console.log('updating');
        // https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014
        let generatedUrl = function() {
            let baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
            if (filterYear) baseUrl += '&launch_year=' + filterYear;
            if (typeof(sucessfulLaunch) === "boolean") baseUrl += '&launch_success=' + sucessfulLaunch;
            if (typeof(sucessfulLanding) === "boolean") baseUrl += '&land_success=' + sucessfulLanding;

            return baseUrl;
        }

        fetch(generatedUrl()).then(response => response.json()).then(responseJson => setLaunchData(responseJson));

    }, [filterYear, sucessfulLaunch, sucessfulLanding])

    console.log(filterYear);
    console.log(sucessfulLaunch);
    console.log(sucessfulLanding);
    return (
        <div className={styles.main}>
            <Filters 
                filters={{filterYear, sucessfulLaunch, sucessfulLanding}}
                handleFilterYearClick={handleFilterYearClick}
                handleFilterSucessfulLaunch={handleFilterSucessfulLaunch}
                handleFilterSucessfulLanding={handleFilterSucessfulLanding} />
            <LaunchPanel launchData={launchData}/>
        </div>
    );
}