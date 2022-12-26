import clsx from 'clsx';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={clsx(css.buttonThumb)}>
      {options.map((option, index) => {
        return (
          <div key={index}>
            <button
              type="button"
              name={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </div>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      onLeaveFeedback: PropTypes.func.isRequired
}