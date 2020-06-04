import * as React from 'react'
import { HeaderTitle } from './HeaderTitle';
import { HeaderLeft } from './HeaderLeft';
import { HeaderRight } from './HeaderRight';


export class NavOption extends React.Component {
    static navigationOptions = () => {
        return {
            title: 'Play Lista',
            headerStyle: {
             backgroundColor: '#f0f2fa',
            },
            headerTitle: () => <HeaderTitle/>,
            headerLeft: () => <HeaderLeft/>,
            headerRight: () => <HeaderRight/>,
        };
      };
  }