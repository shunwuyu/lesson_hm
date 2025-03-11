import React from 'react';
import {
  useNavigate
} from 'react-router-dom'
import PropTypes from 'prop-types';
import {
  NavBar, 
  Icon
} from 'zarm';
import s from './style.module.less'

// console.log(s, '//////');

const AppHeader = (props) => {
  const navigate = useNavigate();
  const { title } = props;// UI 简单 
  return (
    <div className={s.headerWarp}>
      <div className={s.block}>
        <NavBar 
          className={s.header}
          left={<Icon 
              type="arrow-left" 
              theme="primary" 
              onClick={() => navigate(-1)}
          />}
          title={title}
        /> 
      </div>
    </div>
  )
}
AppHeader.propTypes = {
  title: PropTypes.string
}

export default AppHeader;