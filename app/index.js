import React from 'react';
import { YellowBox ,Platform} from 'react-native'
import {Tabs ,Drawer} from "./config/router";
// import firebase from 'firebase';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

// var config = {
//     databaseURL: "https://peepo-d3437.firebaseio.com",
//     projectId: "peepo-d3437",
// };
//
// firebase.initializeApp(config);

const App =() =>{
    if(Platform === 'ios'){
        return <Tabs/>
    }
    return <Drawer/>
};

export default App;