export default function Title({text,}){
    return (
        <div className="container mx-auto">
            <div className="flex flex-col text-center w-full m-2">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green1">{text}</h1>
            </div>
        </div>
        
    );
}