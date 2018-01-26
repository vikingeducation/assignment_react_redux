import {connect} from 'react-redux'
import serialize from 'form-serialize'
import AddNewItem from '../components/AddNewItem'
import {addGroceryItem} from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault()
      const form = e.target
      const data = serialize(form, {hash: true})

      dispatch(addGroceryItem(data))
      form.reset()
    }
  }
}

const AddNewItemContainer = connect(
  null,
  mapDispatchToProps
)(AddNewItem)


export default AddNewItemContainer
