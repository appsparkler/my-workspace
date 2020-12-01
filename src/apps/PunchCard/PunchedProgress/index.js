import React from 'react'
import PropTypes from 'prop-types'
import {ProgressIndicator} from '@fluentui/react'

const PunchedProgressLayout = ({
  show, progressIndicator
}) => show && <ProgressIndicator {...progressIndicator}/>

const PunchedProgress = ({
  show, progress,
}) => {
  const [state] = React.useState({
    progressIndicator: {
      label: '⏳Punched',
      barHeight: 12,
    }
  })
  const punchedProgress = {
    show,
    progressIndicator: {
      ...state.progressIndicator,
      percentComplete: progress,
    }
  }
  return (
    <PunchedProgressLayout {...punchedProgress} />
  )
}

PunchedProgressLayout.propTypes = {
  show: PropTypes.bool,
  progress: PropTypes.number
}

PunchedProgressLayout.defaultProps = {
  show: false,
  progress: 0
}

export default React.memo(PunchedProgress)
