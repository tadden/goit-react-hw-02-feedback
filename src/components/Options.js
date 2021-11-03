function Options({onGoodBtn, onNeutralBtn, onBadBtn}) {
    return (
        <div>
            <button type="button" onClick={onGoodBtn}>
                Good
            </button>
            <button type="button" onClick={onNeutralBtn}>
                Neutral
            </button>
            <button type="button" onClick={onBadBtn} >
                Bad
            </button>
        </div>
    );
}

export default Options;
