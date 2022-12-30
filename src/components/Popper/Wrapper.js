import PropTypes from 'prop-types';
import classNames from "classnames";
import styles  from "./Popper.module.scss";

const cx=classNames.bind(styles);

function Wrapper({children, className}) {
    return <div className={cx('Wrapper',className)}>{children}</div>
}

Wrapper.propTypes={
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default Wrapper;