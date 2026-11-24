import useReveal from '../hooks/useReveal';

function Reveal({ as: Tag = 'div', delay = 0, threshold = 0, rootMargin = '0px 0px -40px 0px', className = '', style, children, ...rest }) {
    const [ref, isVisible] = useReveal(threshold, rootMargin);

    return (
        <Tag
            ref={ref}
            className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
            style={{ '--delay': `${delay}s`, ...style }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

export default Reveal;
