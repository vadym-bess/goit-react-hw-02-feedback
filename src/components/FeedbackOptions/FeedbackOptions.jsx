import clsx from 'clsx';
import css from './FeedbackOptions.module.css';

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