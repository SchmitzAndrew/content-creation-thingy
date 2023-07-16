interface Props {
    title: string;
}

export default function Heading({ title }: Props) {
    return (
        <>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {title}
            </h1>
        </>
    );
}