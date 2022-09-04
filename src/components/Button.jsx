import style from './Button.module.css';

const EXTRA_CLASS = {
  sm: style.smallSize,
  md: style.mediumSize,
  lg: style.largeSize,
  default: style.default,
  primary: style.primary,
  secondary: style.secondary,
  danger: style.danger,
  text: style.textVariant,
  outline: style.outlineVariant,
};

const Button = ({
  text,
  iconWidth,
  startIcon: StartIcon,
  endIcon: EndIcon,
  size = 'md',
  color = 'default',
  variant,
  disableShadow,
  ...props
}) => {
  const sizeClass = size ? EXTRA_CLASS[size] : '';
  const colorClass = color ? EXTRA_CLASS[color] : '';
  const variantClass = variant ? EXTRA_CLASS[variant] : '';
  const noShadowClass = disableShadow ? style.noShadow : '';

  return (
    <button
      className={`${style.button} ${sizeClass} ${colorClass} ${variantClass} ${noShadowClass}`}
      {...props}
    >
      {StartIcon && <StartIcon width={iconWidth || '1rem'} />}
      {text}
      {EndIcon && <EndIcon width={iconWidth || '1rem'} />}
    </button>
  );
};

export default Button;
