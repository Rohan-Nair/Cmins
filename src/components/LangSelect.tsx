import { Select, Text } from "@geist-ui/core"
import { LANGS } from "../constants/langs";

const langs = Object.entries(LANGS);
type LangSelectProps = {
    lang: string;
    onSelect: (l: string) => void;
};

const LangSelect: React.FC<LangSelectProps> = ({ lang, onSelect }) => {
    const handler = (value: string | string[]) => {
        if (typeof value === 'string') {
            onSelect(value);
        } else {
            onSelect(value[0]);
        }
    }
    return (
        <Select placeholder={lang} onChange={handler} >
            {langs.map(([key]) => (
                <Select.Option key={key} value={key}>
                    <Text>
                        {key}
                    </Text>
                </Select.Option>
            ))}
        </Select>
    )
}

export default LangSelect