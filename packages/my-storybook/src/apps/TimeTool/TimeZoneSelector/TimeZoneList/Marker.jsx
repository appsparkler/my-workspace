import React from 'react'
import PropTypes from 'prop-types'
import MarkJS from 'mark.js/dist/mark.es6.min.js'

const Marker = ({highlightText, children}) => {
  const markerRef = React.useRef();

  const [markerState, setMarkerState] = React.useState({
    markJsInstance: null,
    lastUpdated: null
  })

  React.useEffect(() => {
    if(markerRef.current) {
      setMarkerState(currentState => ({
        ...currentState,
        markJsInstance: new MarkJS(markerRef.current)
      }))
    }
  },[markerRef])

  React.useEffect(() => {
    if(markerState.markJsInstance) {
      markerState
        .markJsInstance
        .unmark({
          done: () => {
            setMarkerState(currentState => ({
              ...currentState,
              lastUpdated: Date.now()
            }))
          }
        });
    }
  }, [highlightText, markerState.markJsInstance])

  React.useEffect(() => {
    if(markerState.lastUpdated) {
      markerState
        .markJsInstance
        .mark(highlightText);
    }
  }, [
    highlightText,
    markerState.lastUpdated,
    markerState.markJsInstance
  ])

  return (
    <section ref={markerRef}>
      {children}
    </section>
  )
}

Marker.propTypes = {
  highlightText: PropTypes.string,
  children: PropTypes.any
}

Marker.defaultProps = {
  highlightText: '',
}

export default React.memo(Marker);