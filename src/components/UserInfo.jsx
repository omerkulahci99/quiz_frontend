import React from 'react'
import { Card, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';

export default function UserInfo() {

  return (
   <>
   
   <Card>
   <Avatar style={{marginLeft: 15}} size={64} src={'https://media.licdn.com/dms/image/C4D03AQHXl9xlqm1fvQ/profile-displayphoto-shrink_100_100/0/1608596765319?e=1701302400&v=beta&t=f6GKTHSMI2l9vrcd-5Or4qOukF7vONa9diATAMF3uxw'} 
   />
     <label style={{marginLeft: 20, fontSize: 24, verticalAlign: 'middle'}}>Ömer KÜLAHCI</label>
     </Card>
   
   </>
  )
}
