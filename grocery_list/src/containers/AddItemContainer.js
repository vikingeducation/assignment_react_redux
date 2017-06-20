import { connect } from 'react-redux'
import AddItem from '../components/AddItem'
import { addItem, updateCategories } from '../actions'
import serialize from 'form-serialize'



const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault()
      const form = e.target
      const data = serialize(form, { hash: true })
      data.purchased = data.purchased || 'FALSE'
      dispatch(addItem(data))
      dispatch(updateCategories(data.category))
      form.reset()
    }
  }

}

const AddItemContainer = connect(
  null,
  mapDispatchToProps
)(AddItem)

export default AddItemContainer
