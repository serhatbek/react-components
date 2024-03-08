import './FloatLabel.scss';
import { useState } from 'react';

const FloatLabel = ({ children, label, value, ...props }) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  const labelClass =
    focus || (value && value.length > 0) ? 'label label--float' : 'label';

  return (
    <div
      {...props}
      className='float-label'
      onBlur={handleBlur}
      onFocus={handleFocus}
    >
      {children}
      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default FloatLabel;
