import React from 'react'
import { Button } from 'antd'

function MyButton({Title,btnOnClick,}) {
    return (
        <Button onClick={btnOnClick}>{Title}</Button>
    )
}

export default MyButton
