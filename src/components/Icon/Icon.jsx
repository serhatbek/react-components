import classNames from 'classnames';
import './Icon.scss';

const Icon = ({ icon, className, size, onClick }) => {
  return (
    <i
      className={classNames('icon', 'icon-' + icon, className)}
      style={{ fontSize: `${size}` }}
      onClick={onClick}
    ></i>
  );
};

export default Icon;
