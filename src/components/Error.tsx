type ErrorProps = {
    message?: string;
}

const Error= (e: ErrorProps) => {
    return (
        <div>
            <h1>ERRO AQUI</h1>
        </div>
    );
};

export default Error;