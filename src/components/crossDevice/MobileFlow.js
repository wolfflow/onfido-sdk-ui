import { h, Component } from 'preact'

import MobileConnected from './MobileConnected'
import CrossDeviceSubmit from './CrossDeviceSubmit'

class MobileFlow extends Component {
  componentDidMount() {
    this.props.socket.on('disconnect ping', this.onDisconnectPing)
    this.props.socket.on('get config', this.sendConfig)
    this.props.socket.on('client success', this.onClientSuccess)
  }

  componentWillUnmount() {
    this.props.socket.off('disconnect ping')
    this.props.socket.off('get config')
    this.props.socket.off('client success')
    const {socket, roomId} = this.props
    socket.emit('disconnecting', {roomId})
  }

  sendConfig = (data) => {
    const { roomId, mobileConfig, socket, actions } = this.props
    if (roomId && roomId !== data.roomId) {
      socket.emit('leave', {roomId})
    }
    actions.setRoomId(data.roomId)
    this.sendMessage('config', data.roomId, mobileConfig)
  }

  sendMessage = (event, roomId, payload) => {
    this.props.socket.emit('message', {event, payload, roomId})
  }

  onClientSuccess = () => {
    this.props.actions.setClientSuccess(true)
  }

  onDisconnectPing = (data) => {
    this.sendMessage('disconnect pong', data.roomId)
  }

  render = (props) =>
    this.props.clientSuccess ?
      <CrossDeviceSubmit {...props}/> : <MobileConnected {...props}/>
}

export default MobileFlow
