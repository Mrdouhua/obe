import React from 'react'
import { connect } from 'dva'
import { Button } from 'antd'
import 'antd/dist/antd.css'

function User() {
  return (
    <Button>
      user
    </Button>
  );
}

User.propTypes = {
}

export default connect()(User)
