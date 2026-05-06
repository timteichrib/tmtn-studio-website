/* global React */
function Button({
  kind = 'primary',
  size = 'md',
  block = false,
  href,
  onClick,
  children,
  type = 'button',
  ...rest
}) {
  const cls = [
    'btn',
    `btn-${kind}`,
    size === 'sm' ? 'btn-sm' : '',
    block ? 'btn-block' : '',
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

function Logo({ light = false, size = 32 }) {
  // Inline so we don't have to load an external svg
  const ink = light ? '#F5F1EA' : '#15243D';
  return (
    <svg width={size * 5} height={size * 1.2} viewBox="0 0 320 64" aria-label="TMTN Studio" role="img">
      <text x="0" y="44" fontFamily="Fraunces, Georgia, serif" fontWeight="600"
            fontSize="40" letterSpacing="-0.02em" fill={ink}>TMTN</text>
      <text x="135" y="44" fontFamily="Fraunces, Georgia, serif" fontStyle="italic"
            fontWeight="400" fontSize="28" fill={ink}>Studio</text>
      <circle cx="245" cy="36" r="4" fill="#B85D3A" />
    </svg>
  );
}

window.Button = Button;
window.Logo = Logo;
