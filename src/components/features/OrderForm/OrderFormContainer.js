import {connect} from 'react-redux';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux.js';
import OrderForm from './OrderForm.js';

const mapStateToProps = (state) => {
  const options = getOrderOptions(state);

  return {
    options,
  };
};

const mapDispatchToProps = dispatch => ({
  setOrderOption: orderOption => dispatch(setOrderOption(orderOption)),
});

export default connect(mapStateToProps, mapDispatchToProps) (OrderForm);
