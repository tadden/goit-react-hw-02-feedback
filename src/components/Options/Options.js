import propTypes from 'prop-types';
import s from './Options.module.css'


function Options({ onGoodBtn, onNeutralBtn, onBadBtn }) {
    return (
        <div className={s.container}>
            <button type="button"
                onClick={onGoodBtn}
                className={s.btn__green}>
                Good
            </button>
            <button type="button"
                onClick={onNeutralBtn}
                className={s.btn__yellow}>
                Neutral
            </button>
            <button type="button"
                onClick={onBadBtn}
                className={s.btn__red} >
                Bad
            </button>
        </div>
    );
}

Options.propTypes = {
  onGoodBtn: propTypes.func.isRequired,
  onNeutralBtn: propTypes.func.isRequired,
  onBadBtn: propTypes.func.isRequired,
};

export default Options;
