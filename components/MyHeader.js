import React from 'react'
import { Appbar } from 'react-native-paper'

const MyHeader = (props) => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Previsão do Tempo" subtitle={props.title} style={{ alignItems: 'center' }} />
    </Appbar.Header>
  )
}

export default MyHeader
