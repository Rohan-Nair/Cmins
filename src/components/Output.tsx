import { useState } from 'react'
import { runCodeCall } from '../api/apis';
import toast from 'react-hot-toast';
import { BeatLoader } from 'react-spinners';

type OutputProps = {
    editorRef: React.MutableRefObject<any>;
    language: string;
}

const Output: React.FC<OutputProps> = ({ editorRef, language }) => {
    const [opValue, setOpValue] = useState<string>("Output will be shown here...");
    const [ipValue, setIpValue] = useState<string>("");
    const [loading, setLoading] = useState<Boolean>(false);
    const [wrongCode, setWrongCode] = useState(false);
    const runCode = async () => {
        const code = editorRef.current.getValue();
        if (!code) return;
        try {
            setLoading(true);
            const { run, compile } = await runCodeCall(language, code, ipValue);
            if (run.stderr) {
                setWrongCode(true);
                setOpValue(compile.stderr);
                return;
            } else {
                setWrongCode(false);
            }
            setOpValue(run.output.split('\n').join('\n'));
        } catch (e) {
            toast.error('Something went wrong!', {
                style: {
                    background: '#333',
                    color: '#fff',
                }
                , position: 'top-right'
            });
            console.error(e);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className='h-full mx-2 rounded-md py-2 px-2'>
            <p className='font-bold text-[#80BA4F] pb-1'>Input</p>

            <textarea
                className={`bg-[#1e1e1e] w-full h-[35.5vh] resize-none border-none focus:outline-none p-2 text-[#80BA4F] placeholder:text-[#80BA4F]`}
                placeholder='Input goes here'
                value={ipValue}
                onChange={(e) => setIpValue(e.target.value)}
            />


            <textarea
                className={`bg-[#1e1e1e] w-full h-[40vh] resize-none p-2 focus:outline-none ${wrongCode ? 'text-red-500 border border-red-500' : 'text-[#80BA4F] border-none'}`}
                readOnly
                value={opValue}
            />
            <div className='mb-2 flex items-center gap-2 '>
                {
                    loading ?

                        <button onClick={runCode} className='text-[#80BA4F] border-2 border-[#80BA4F] h-7 w-24 flex justify-center items-center rounded font-bold' disabled>
                            <BeatLoader color='#80BA4F' />
                        </button> :
                        <button onClick={runCode} className='text-[#80BA4F] border-2 border-[#80BA4F] h-7 w-24 rounded font-bold'>
                            Run
                        </button>

                }
            </div>


        </div >
    )
}

export default Output