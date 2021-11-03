import propTypes from 'prop-types';
import s from './Statistic.module.css'


function Options({ onGoodBtn, onNeutralBtn, onBadBtn }) {
    return (
        <div className={s.btn__container}>
            <button type="button" onClick={onGoodBtn} className={s.btn}>
                Good
            </button>
            <button type="button" onClick={onNeutralBtn} className={s.btn}>
                Neutral
            </button>
            <button type="button" onClick={onBadBtn} className={s.btn} >
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
