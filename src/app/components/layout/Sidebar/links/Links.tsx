export const Links = () => {

    const items = [
        'HomePage',
        'Services',
        'About',
        'Contact',
        'Blog'
    ]
    return (
        <div className="links">
            {items.map((item) => (
                <a key={item} href={`#${item}`}>
                    {item}
                </a>
            ))}
        </div>
    )
}