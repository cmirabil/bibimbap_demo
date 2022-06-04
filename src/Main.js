import React from "react";
import { Grid } from "grommet";
import { Anchor } from "grommet";
import { Box } from "grommet";
import { Nav } from "grommet";
import { TextInput } from "grommet";
import GradientText from './GradientText';
import { Text } from "grommet";
import { Search } from "grommet-icons";

const Main = (props) => {

    return (

    
        <Grid color="#003049" align='stretch'
        rows={['medium','xsmall', 'xsmall', 'xxsmall','medium']}
        columns={['', '', '']}
        gap="small"
        areas={[
         
          { name: 'title', start: [1, 0], end: [1, 0] },
          { name: 'presentation', start: [1, 1], end: [1, 1] },
          { name: 'calendar', start: [1, 2], end: [1, 2] },
          { name: 'main', start: [1, 3], end: [1, 3] },
        ]}
      >
      <Box gridArea="title" background="#003049" align='center' >
         <GradientText/>
        </Box>
      
      
        <Box gridArea="presentation" direction='column-reverse' background="#003049" align='center' alignSelf='end' alignContent= 'stretch' >
        <Text size='large' alignSelf='left' textAlign='left'>Snap gives a place to fastly find <br/>CPT units based on MHE nodes cycle time </Text>
      
        
        
        </Box>
      
        <Box gridArea="calendar" background="#003049" align='center' >
          <Nav>
            
          </Nav>
        </Box>
        <Box gridArea="main" background="#003049">
          <Nav>
            <Anchor>
              <TextInput 
                placeholder="type here" 
                icon={<Search/>} 
                hoverIndicator 
                background='#000000'
                />
            </Anchor> 
          </Nav>
        </Box> 
      
      
      
      
      
      </Grid> 
        
    )

};

export default Main;