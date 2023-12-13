type Props = {
    dateString: string;
}

const DateFormat = ({ dateString }: Props) => {
    const date = new Date(dateString);
    return date.toDateString();
}

export default DateFormat;