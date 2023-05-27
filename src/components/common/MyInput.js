import React from 'react'
import { Input } from 'antd'

function MyInput({value}) {
    return (
        <Input onChange={onChange}  value={value} />
    )
}

export default MyInput
