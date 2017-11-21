import { h, Component } from 'preact'

import theme from '../../Theme/style.css'
import style from './style.css'
import { trackComponent } from '../../../Tracker'

class ClientSuccess extends Component {
  componentDidMount () {
    this.props.sendClientSuccess()
  }

  render () {
    return (
      <div className={theme.thickWrapper}>
        <h1 className={theme.title}>Uploads successful</h1>
        <p>You can now return to your computer to continue</p>
        <span className={`${theme.icon}  ${style.icon}`} />
        <p className={style.text}>Your computer may take a few seconds to update</p>
      </div>
    )
  }
}

export default trackComponent(ClientSuccess, 'crossdevice_mobile_success')
