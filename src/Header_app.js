import { Menu, Header, Button } from 'grommet';
import handleClick from './Handleonclick';
import React from 'react';
import {Amazon} from 'grommet-icons';
import {Menu as Menu_ico} from 'grommet-icons';
import {User} from 'grommet-icons';
import { ReactComponent as ICOSVG } from './SNAP_ico.svg';

const Header_APP = (props) => {
   
const username=props.name;
const styles ={
    border: '2px solid rgba(0,150,214,1)',
    borderRadius: 7+ 'px' 

};
    return(

        <Header background="#232F3E"
        align='center'

        
        > 
  
        <Menu label="" 
        
        icon={<Menu_ico />}
        dropBackground= "neutral-1" 

            items={[
                { label: 'First Action', onClick: () => {} },
                { label: 'Second Action', onClick: () => {} },
                ]}
        

        
        />
        
        <ICOSVG />
  
        <Button    justify='between' plain='true'   label= {"hey "+ props.name + ", welcome"} 
            icon={<img 
            style={styles}
            src={"https://internal-cdn.amazon.com/badgephotos.amazon.com/?uid="+ username} width={37.5} height={50}/>} 
            margin="medium" hoverIndicator 
           onClick= {handleClick}
        
            ></Button>
        </Header>  
    
);



}


export default Header_APP;
