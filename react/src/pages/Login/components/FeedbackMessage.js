import { useEffect } from "react";

const FeedbackMessage = ({ message, onClose }) => {

    useEffect(() => {
        if (!message) return;

        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [message, onClose]);

    if (!message) return null;

    return (
        <div className="message-overlay">
            <div className="message-box">
                <p>{message}</p>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

export default FeedbackMessage;