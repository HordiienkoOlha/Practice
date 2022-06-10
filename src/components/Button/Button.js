import PropTypes from 'prop-types';

const Button = ({ name, onHandle }) => {
  return (
    <>
      <button type="button" onClick={onHandle}>
        {name}
      </button>
    </>
  );
};

Button.protoType = {
  button: PropTypes.string.isRequired,
  onHandle: PropTypes.func.isRequired,
};

export default Button;
