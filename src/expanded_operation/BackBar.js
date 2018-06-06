import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

const styles = {
  button: {
    marginLeft: "8px",
    marginRight: 0
  }
}

export default ({ goBack }) => {
  return (
    <FlatButton
      primary={true}
      style={styles.button}
      onClick={() => goBack()}
      icon={<ArrowBack />} />
  )
}
