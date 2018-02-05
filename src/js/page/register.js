import React from 'react';
import { render } from 'react-dom';
import '../../css/page/register.css'
import '../../css/common/topBar.css';
import '../../css/common/settledType.css'
import SettledType from '../components/settledType';

class SettleIn extends React.Component {
  render() {
    return(
      <div>
        <SettledType types={["艺术家入驻","商家入驻","经纪人入驻"]}/>
      </div>
    );
  }
}
  
render(<SettleIn />, document.getElementById('register'));
  
