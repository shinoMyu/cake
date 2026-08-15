const FeedbackMessage = ({ message, onClose }) => {
    if (!message) return null;

    return (
        <div className="message-overlay">
            <div className="message-box">
                <p>{message}</p>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    )
};

export default FeedbackMessage;
