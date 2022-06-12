import React from 'react'
import { Link } from 'react-router-dom'

const ToolBar = () => {
  return (
    <div>
      {/* Link 컴포넌트를 이용해여 페이지를 이동할 수 있다. a태그를 이용하면 페이지가 새로 로딩된다(이를 보완하는것).  */}
      <Link to="/">
        <span>홈</span>
      </Link>
      <Link to="/auth/login">        
        <span style={{float: 'right'}}>로그인</span>
      </Link>
      <Link to="/auth/register">
        <span style={{float: 'right', marginRight: 15}}>회원가입</span>
      </Link>
    </div>
  )
}

export default ToolBar