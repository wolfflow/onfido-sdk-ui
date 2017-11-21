import { h } from 'preact'
import theme from '../Theme/style.css'
import style from './style.css'
import DocumentSelector from '../DocumentSelector'
import { trackComponent } from '../../Tracker'

const Select = props => {
  const {
    actions: { setDocumentType },
    data: { title, hint }
  } = props;
  return (
    <div className={theme.thickWrapper}>
      <h1 className={theme.title}>{title}</h1>
      <p className={style.hint}>{hint}</p>
      <DocumentSelector setDocumentType={setDocumentType} {...props} />
    </div>
  )
}

Select.defaultProps = {
  data: {
    hint: 'Select the type of document you would like to upload',
    title: 'Verify your identity'
  }
};

export default trackComponent(Select, 'type_select')
