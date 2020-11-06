import React from 'react';
import PropTypes from 'prop-types'
import { TextField} from '@fluentui/react'

const CopyTextTool = ({
  text, onClickCopy
}) => (
  <TextField
    secondary
    onClick={onClickCopy}
    style={{border: "2px lightgray dashed"}}
    iconProps={{iconName: 'Copy'}}
    value={text}
    label="Timestamp"
    readOnly
  />
)

CopyTextTool.propTypes  = {
  text: PropTypes.any,
  onClickCopy: PropTypes.func.isRequired
}

CopyTextTool.defaultProps  = {
  text: '',
}

export default React.memo(CopyTextTool)
