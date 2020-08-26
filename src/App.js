import React from 'react';

import { Cards, Chart, CountryPicker } from './Components'
import styles from './App.module.css'
import { fetchData } from './api'


class App extends React.Component {
    state = {
        data:{},
        country:''
    }

    async componentDidMount() {
        const data = await fetchData();
        
        console.log('fectched data',data)
        this.setState({data:data})
    }

    countryHandler = async(country) => {
        const fetchedData = await fetchData(country);
        this.setState(
            { 
                data:fetchedData,
                country:country
            }
        )
    }
    
    render(){
        const {data} = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker countryHandler={this.countryHandler}/>
                <Chart/>
            </div>
        )
    }
}

export default App;