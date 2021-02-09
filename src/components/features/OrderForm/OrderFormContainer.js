import {connect} from 'react-redux';
import {getOrderOptions} from '../../../redux/orderRedux.js';
import OrderForm from './OrderForm.js';

const mapStateToProps = (state) => {
  const options = getOrderOptions(state);

  return {
    options,
  };
};

export default connect(mapStateToProps) (OrderForm);
