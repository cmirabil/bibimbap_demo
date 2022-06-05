import {TextInput, Anchor,Grommet, Nav, Grid, Header, Button, DateInput, Box, Text} from 'grommet';

import {Search} from 'grommet-icons'
import FooterAPP from './FooterApp';

import Main from './Main';
import Header_APP from './Header_app';
import Autentication from './Autentication';


function App() {
  return (
 
    

    <Grommet className="App">
<div 
style={{
  backgroundColor: '#003049'}}
>

<Header_APP name='jaaleu' />   


<Autentication />






<FooterAPP />   
</div>




</Grommet>
  );
}

export default App;
