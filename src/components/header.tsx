function Header({ title, authorContactUrl, authorName }: any) {
    return (
        <>
            <a href='https://github.com/oismaelash/mindmap-wiki-nextjs-ts-frontend' target='_blank'>
                <img width={50} height={50} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' />
            </a>
            <h1>{title} - Mind Map</h1>
            <h2 style={{ marginBottom: 10 }} >
                Created by:
                <a
                    style={{ marginLeft: 10, color: 'cyan' }}
                    href={authorContactUrl}
                    target='_blank'
                >
                    {authorName}
                </a>
            </h2>
        </>
    )
}

export default Header