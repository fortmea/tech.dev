import { parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
interface DateParserProps {
    dateString: string
}
export default function DateParser( {dateString} : DateParserProps) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, "eeee, dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</time>
}
