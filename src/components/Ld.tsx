export default ({ content }: { content: object }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(content),
            }}
        ></script>
    );
};
