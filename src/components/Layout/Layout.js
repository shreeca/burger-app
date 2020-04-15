/** Adding Layout page (landing page)
 * */


import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

// Adding Layout
const layout = ( props ) => (
        //To avoid wrapping up in div, adding Aux (higher order component)
     <Aux>
       {/*//Adding Nav Bar*/}
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>
          {/*//Adding the properties from other component*/}
      {props.children}
      </main>
     </Aux>
 );

 export default layout;
