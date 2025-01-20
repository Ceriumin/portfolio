import React, {useState} from 'react';
import './styles.css';

    
function Device({
    type,
    title,
    img,
    isFinished,
    className,
}) {
    
    const [scale, setScale] = useState(1);

    const onPressIn = () => setScale(0.95);
    const onPressOut = () => setScale(1);

    type = type.toUpperCase();


    return (
        <div
            className="device"
            style={{ transform: `scale(${scale})`}}
            onMouseDown={onPressIn}
            onMouseUp={onPressOut}
            onMouseLeave={onPressOut}
            onTouchStart={onPressIn}
            onTouchEnd={onPressOut}
            onTouchCancel={onPressOut}
        >
            <div className="device__title">
                <h3>{type}</h3>
                <h1>{title}</h1>
                {!isFinished && (
                    <div className="device__status">
                        <p>Coming Soon</p>
                    </div>
                )}
            </div>
            <img src={img} alt={type} className={className} />
        </div>
    );
}

export default Device;