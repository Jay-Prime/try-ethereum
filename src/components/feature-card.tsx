import * as React from 'react';

import { css, StyleSheet } from 'aphrodite';

import compoundLogo from '../images/compound-square.png';

const styles = StyleSheet.create({
  container: {
    width: '33em',
    height: '20em',
    padding: '1.25em',
    borderRadius: '1.5em',
    background: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 20px 40px -10px !important'
  },
  iconItems: {
    display: 'grid',
    gridColumnGap: '1em',
    gridRowGap: '1em',
    gridTemplateColumns: '5em 5em 5em'
  }
});

class FeatureCard extends React.Component {
  public render() {
    return (
     <div className={css(styles.container)}>
       <h5>Finance</h5>
       <h4>Lend or borrow tokens</h4>
       <div className={css(styles.iconItems)}>
       {
         Array(6).fill( <img src={compoundLogo} style={{maxWidth: '100%'}}/>)
       }
       </div>
     </div>
    )
  }
}

export default FeatureCard;